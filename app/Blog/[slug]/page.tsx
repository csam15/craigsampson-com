import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    author->{
      name,
      bio
    }
  }`;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );
  const postImageUrl = post.mainImage ? urlFor(post.mainImage).url() : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/blog" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl ? (
        <img
          src={postImageUrl}
          alt={post.title}
          className="w-360 h-auto rounded-xl"
        />
      ) : (
        <div>No image found</div>
      )}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div>Author: {post.author.name}</div>
      <div className="prose">
        Bio:
        {Array.isArray(post.author.bio) && (
          <PortableText value={post.author.bio} />
        )}
      </div>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}
