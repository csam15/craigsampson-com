import { SecondaryButton } from "../../../Buttons/Button";
import HomeProjectsCard from "./HomeProjectscard";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";

const WEB_PROJECTS_QUERY = `*[_type == "webProject"] | order(featured desc, title asc)[0...2]{
  title,
  slug,
  previewImage,
  technologies,
}`;

const CALLIGRAPHY_PROJECTS_QUERY = `*[_type == "calligraphyProject"] | order(featured desc, title asc)[0]{
  title,
  slug,
  mainImage,
  tools,
}`;

export default async function HomeProjects() {
  const { data: webProjects } = await sanityFetch({
    query: WEB_PROJECTS_QUERY,
  });

  const { data: calligraphyProject } = await sanityFetch({
    query: CALLIGRAPHY_PROJECTS_QUERY,
  });

  const [webProject1, webProject2] = webProjects || [];
  const calligraphyProject1 = calligraphyProject;
  return (
    <div className="space-y-4 w-full">
      <div className="flex flex-col md:flex-row items-start gap-4 justify-between w-full">
        <div className="flex flex-col">
          <h1 className="font-semibold">Latest Projects</h1>
          <p>Check out my latest works</p>
        </div>
        <SecondaryButton label="See All" link="/projects" />
      </div>
      <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-2">
        {webProject1 && (
          <div className="lg:col-span-2">
            <HomeProjectsCard
              title={webProject1.title}
              image={urlFor(webProject1.previewImage).url()}
              types={webProject1.technologies || []}
              slug={webProject1.slug.current}
              projectType="web"
            />
          </div>
        )}
        {webProject2 && (
          <HomeProjectsCard
            title={webProject2.title}
            image={urlFor(webProject2.previewImage).url()}
            types={webProject2.technologies || []}
            slug={webProject2.slug.current}
            projectType="web"
          />
        )}
        {calligraphyProject1 && (
          <HomeProjectsCard
            title={calligraphyProject1.title}
            image={urlFor(calligraphyProject1.mainImage).url()}
            types={calligraphyProject1.tools || []}
            slug={calligraphyProject1.slug.current}
            projectType="calligraphy"
          />
        )}
      </div>
    </div>
  );
}
