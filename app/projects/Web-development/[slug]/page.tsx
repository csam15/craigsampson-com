import { PortableText, type SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const POST_QUERY = `*[_type == "webProject" && slug.current == $slug][0]{
    title,
    slug,
    mainImage,
    tagline,
    categories,
    goals,
    technologies,
    features,
    domain,
    link,
    description,
    author->{
      name,
      bio
      }
  }`;

const options = { next: { revalidate: 30 } };

export default async function WebDevSlugPage({
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
        <Link href="/projects" className="hover:underline">
          ← Back to posts
        </Link>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="">{post.tagline}</p>
        {post.domain && post.link && (
          <div className="font-bricolage flex items-center gap-2">
            <h3>Visit this project at</h3>
            <a target="_blank" href={post.link} className="text-accent/80 hover:text-accent text-2xl">{post.domain}</a>
          </div>
        )}
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
      <div className="flex flex-col gap-4">
        <h2>Project Overview</h2>
        <p>{post.description}</p>
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
      {post.technologies && post.technologies.length > 0 && (
        <div className="flex flex-col gap-4">
          <h2>Technologies</h2>
          <ul className="list-disc list-inside space-y-2">
            {post.technologies.map((tech: string, index: string) => (
              <p key={index}>• {tech}</p>
            ))}
          </ul>
        </div>
      )}
      {post.features && post.features.length > 0 && (
        <div className="flex flex-col gap-4">
          <h2>Project features</h2>
          <ul className="list-disc list-inside space-y-2">
            {post.features.map((feature: string, index: string) => (
              <p key={index}>• {feature}</p>
            ))}
          </ul>
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
