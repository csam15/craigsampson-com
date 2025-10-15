"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

// Client-side validation schema (matches server-side)
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
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
  honeypot: z.string().max(0),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("subject", data.subject);
      formData.append("message", data.message);
      formData.append("honeypot", data.honeypot);

      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Message sent successfully!",
        });
        reset(); // Clear form on success

        // Clear success message after 10 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 10000);
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-fit p-6 border border-border rounded-3xl">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {/* Name and Email Fields - Side by side on lg+ */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Name Field */}
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="name"
              className="text-lg font-bricolage font-semibold"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="px-4 py-3 border border-border rounded-2xl bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
              placeholder="Your name"
            />
            {errors.name && (
              <span className="text-error text-sm">{errors.name.message}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="email"
              className="text-lg font-bricolage font-semibold"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="px-4 py-3 border border-border rounded-2xl bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <span className="text-error text-sm">{errors.email.message}</span>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="subject"
            className="text-lg font-bricolage font-semibold"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            {...register("subject")}
            className="px-4 py-3 border border-border rounded-2xl bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
            placeholder="What's this about?"
          />
          {errors.subject && (
            <span className="text-error text-sm">{errors.subject.message}</span>
          )}
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-lg font-bricolage font-semibold"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={6}
            className="px-4 py-3 border border-border rounded-2xl bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none"
            placeholder="Tell me about your project or inquiry..."
          />
          {errors.message && (
            <span className="text-error text-sm">{errors.message.message}</span>
          )}
        </div>

        {/* Honeypot Field (hidden from users, catches bots) */}
        <input
          type="text"
          {...register("honeypot")}
          className="absolute opacity-0 pointer-events-none"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Submit Status Messages */}
        {submitStatus.type && (
          <div
            className={`p-4 rounded-2xl ${
              submitStatus.type === "success"
                ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="primary-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}