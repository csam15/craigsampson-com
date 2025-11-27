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
    <div>
      <div></div>
    </div>
  );
}
