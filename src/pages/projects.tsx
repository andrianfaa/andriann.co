/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from "react";
import { ProjectList } from "../components/organisms";
import { tags } from "../data";
import type { SEOProps } from "../components/seo";
import SEO from "../components/seo";

function Projects() {
  const [selectedTag, setSelectedTag] = useState<string>("");

  const SEOData: SEOProps = {
    title: "Andrian Fadhilla (andrianfaa) - Projects",
    description: "This is a list of projects I've worked on. Feel free to check out my Github profile to see more projects I've worked on.",
    url: "https://www.andriann.co/projects",
    image: "https://ik.imagekit.io/lzkn3c9xkpp/Portfolio/og-images/og-image--projects_7copRYr8C.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655090529268",
    keywords: [
      "Andrian Fadhilla",
      "User Interface Designer",
      "Front-End Developer",
      "Projects",
      "Bekasi, Indonesia",
      "React.js",
      "Next.js",
      "Typescript",
      "andrianfaa",
      "andrianfadhilla",
      "andrianfaa projects",
      "andrianfadhilla projects",
      "andrianfaa portfolio",
    ],
  };

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      return setSelectedTag("");
    }

    return setSelectedTag(tag);
  };

  return (
    <div className="fade-in">
      <SEO data={SEOData} />

      <header className="container p-6 border-b border-b-black-700 mb-6">
        <h1 className="font-display text-4xl sm:text-5xl text-black-100 font-normal text-center leading-normal md:leading-[56px] mb-6 md:mb-10">
          Projects.
        </h1>

        <div className="flex flex-col sm:flex-row items-start gap-2">
          <span className="font-medium text-black-100 block py-1">
            Tags :{" "}
          </span>

          <ul className="flex flex-row flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className={`button-base py-2 px-4 rounded-full text-sm font-medium border-[2px] ${selectedTag === tag ? "active border-black-100" : "border-transparent"}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="container p-6">
        <ProjectList selectedTag={selectedTag} />
      </div>
    </div>
  );
}

export default Projects;
