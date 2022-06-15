import projects from "./projects.json";
import tags from "./tags.json";

export type ProjectType = typeof projects[0];
export type TagType = typeof tags[0];

export {
  projects,
  tags,
};
