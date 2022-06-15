import projects from "./projects.json";
import tags from "./tags.json";
import timeline from "./timeline.json";

export type ProjectType = typeof projects[0];
export type TagType = typeof tags[0];
export type TimelineType = {
  id: string;
  title: string;
  description: string;
  date: {
    start: string;
    end: string;
  };
  location: string;
  url: string;
  logo: string;
};

export {
  projects,
  tags,
  timeline,
};
