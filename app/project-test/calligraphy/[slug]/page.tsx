import { PortableText, type SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const POST_QUERY = `*[_type == "calligraphyProject" && slug.current == $slug][0]{
    title,
    slug,
    mainImage,
    tagline,
    goals,
    tools,
    imageGallery,
    description,
    author->{
      name,
      bio
      }
  }`;

const options = { next: { revalidate: 30 } };

export default async function CalligraphySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });
  const postImageUrl = post.mainImage ? urlFor(post.mainImage).url() : null;

  return (
    <div className="container mx-auto min-h-screen max-w-3xl p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Link href="/project-test" className="hover:underline">
          ← Back to posts
        </Link>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-primary">Project Overview</h2>
          <p>{post.description}</p>
        </div>
        <p className="">{post.tagline}</p>
        {postImageUrl ? (
          <img
            src={postImageUrl}
            alt={post.title}
            className="w-360 h-auto rounded-xl"
          />
        ) : (
          <div>No image found</div>
        )}
      </div>
      {post.goals && post.goals.length > 0 && (
        <div className="flex flex-col gap-4">
          <h2>Project Goals</h2>
          <ul className="list-disc list-inside space-y-2">
            {post.goals.map((goal: string, index: string) => (
              <p key={index}>• {goal}</p>
            ))}
          </ul>
        </div>
      )}
      {post.tools && post.tools.length > 0 && (
        <div className="flex flex-col gap-4">
          <h2>Tools & Materials</h2>
          <ul className="list-disc list-inside space-y-2">
            {post.tools.map((tool: string, index: string) => (
              <p key={index}>• {tool}</p>
            ))}
          </ul>
        </div>
      )}
      {post.imageGallery && post.imageGallery.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {post.imageGallery.map((image: any, index: number) => {
            const imageUrl = urlFor(image).url();
            return (
              <img
                key={index}
                src={imageUrl}
                alt={image.alt || `Gallery image ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

{
  /* {post.author && (
  <>
    <div>Author: {post.author.name}</div>
    <div className="prose">
      Bio:
      {Array.isArray(post.author.bio) && (
        <PortableText value={post.author.bio} />
      )}
    </div>
  </>
)} */
}
