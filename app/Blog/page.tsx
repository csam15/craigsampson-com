import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";

const POSTS_QUERY = `*[
  _type == "webProject"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, previewImage, description, tagline}`;

export default async function IndexPage() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  return (
    <div className="page-container">
      <div className="flex flex-col items-start gap-6">
        <h1 className="mb-8">Projects</h1>
        <div className="space-y-8 max-w-full w-full">
          <h2 className="text-secondary">
            Web Development & Software Projects
          </h2>
          {posts.map((post: SanityDocument) => (
            <div className="hover:underline" key={post._id}>
              <Link href={`/blog/${post.slug.current}`}>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <img src={urlFor(post.previewImage).width(300).height(400).url()} alt={post.title} />
                <p>{post.tagline}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
