"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

// Zod schema for validation
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name contains invalid characters"),
  email: z
    .string()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters"),
  honeypot: z.string().max(0, "Bot detected"), // Should be empty
});

// Sanitize string to prevent email injection
function sanitizeForEmail(input: string): string {
  // Remove all newline characters and carriage returns
  return input.replace(/[\r\n]/g, "").trim();
}

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(identifier);

  if (!limit || now > limit.resetTime) {
    // Reset or create new limit: 3 submissions per 15 minutes
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + 15 * 60 * 1000, // 15 minutes
    });
    return true;
  }

  if (limit.count >= 3) {
    return false; // Rate limit exceeded
  }

  limit.count++;
  return true;
}

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      honeypot: formData.get("honeypot") as string,
    };

    // Validate with Zod
    const validatedData = contactSchema.parse(data);

    // Check honeypot (bots usually fill this)
    if (validatedData.honeypot !== "") {
      return {
        success: false,
        error: "Submission rejected",
      };
    }

    // Rate limiting check (using email as identifier)
    if (!checkRateLimit(validatedData.email)) {
      return {
        success: false,
        error: "Too many submissions. Please try again later.",
      };
    }

    // Sanitize inputs to prevent email injection
    const sanitizedName = sanitizeForEmail(validatedData.name);
    const sanitizedEmail = sanitizeForEmail(validatedData.email);
    const sanitizedSubject = sanitizeForEmail(validatedData.subject);

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Send to yourself
      replyTo: sanitizedEmail,
      subject: sanitizedSubject,
      text: `
Name: ${sanitizedName}
Email: ${sanitizedEmail}

Message:
${validatedData.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error("Contact form error:", error);

    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }
}
