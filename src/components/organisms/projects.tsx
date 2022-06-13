import { memo } from "react";
import { AiOutlineLink } from "react-icons/ai";
import type { ProjectType } from "../../data";
import { projects as dataProjects } from "../../data";
import { Image } from "../atoms";

interface ProjectsProps {
  offset?: number;
}

function Projects({ offset }: ProjectsProps) {
  const fileteredProjects = dataProjects.slice(0, offset || dataProjects.length);

  return (
    <ul className="flex flex-col gap-8 sm:gap-10">
      {fileteredProjects.map(({
        id,
        name,
        description,
        image,
        url,
        tags,
        createdAt,
      }: ProjectType) => (
        <li key={id} className="flex flex-col-reverse sm:flex-row justify-between gap-4">
          <div className="w-full flex-1 max-w-[450px] sm:flex sm:flex-col sm:justify-between sm:items-start">
            <time className="text-sm text-black-200 font-medium inline-block mb-2">{new Date(createdAt).toUTCString().substring(0, 16)}</time>

            <div>
              <a
                href={url}
                className="text-2xl sm:text-3xl md:text-4xl font-display text-black-100 mb-4 inline-block hover:text-primary focus:text-primary"
                title={`Open ${name} in new tab`}
              >
                {name}
              </a>
              <p className="line-clamp-3">
                {description}
              </p>
              <a
                href={url}
                className="button-base rounded-full py-3 px-4 text-sm inline-block whitespace-nowrap my-2 w-full max-w-[335px] overflow-hidden text-ellipsis"
                target="_blank"
                rel="noreferrer noopener"
                title={`Open ${name} in new tab`}
              >
                <AiOutlineLink className="inline-block mr-2" />
                {" "}
                {url.length > 40 ? `${url.slice(0, 40)}...` : url}
              </a>
            </div>

            <div id="tags" className="flex items-center flex-wrap gap-2">
              {tags && tags.map((tag) => (
                <span key={tag} className="py-2 px-4 rounded button-base text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full flex-1 sm:max-w-[350px] mb-4 sm:mb-0 rounded overflow-hidden relative group">
            <div className="absolute z-30 w-full h-full p-4 bg-black-900 bg-opacity-50 flex items-center justify-center test-center opacity-0 invisible group-hover:opacity-100 group-hover:visible tranistion-all duration-300 ease-in-out">
              <a
                href={url}
                className="text-black-100 text-xl font-semibold hover:text-primary focus:text-primary"
                target="_blank"
                rel="noreferrer noopener"
                title={`Open ${name} in new tab`}
              >
                {name}
              </a>
            </div>
            <Image
              alt={name}
              src={image}
              className="w-full h-52 sm:w-[350px] sm:h-[350px] rounded"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default memo(Projects);
