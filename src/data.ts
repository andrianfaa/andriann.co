import { v4 as uuidv4 } from "uuid";

export interface ProjectType {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  tags?: string[];
  createdAt: string;
}

export const projects: ProjectType[] = [
  {
    id: uuidv4(),
    name: "MaileHereko",
    description: "MaileHereko is a Web Application that allows you to search for movies and view their details. It uses the TMDB API to fetch the data. Built with React.js and SASS.",
    image: "https://ik.imagekit.io/lzkn3c9xkpp/Portfolio/thumbnail/maile-hereko-min_CSc2dC2a2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655089046242",
    url: "https://mailehereko.project.andriann.co/",
    tags: ["React", "SASS"],
    createdAt: "2022-01-10",
  },
  {
    id: uuidv4(),
    name: "MyLinky",
    description: "MyLinky is a website application that is useful for grouping your url links, and makes it easier for you to market your products, business, work, etc.",
    image: "https://ik.imagekit.io/lzkn3c9xkpp/Portfolio/thumbnail/my-linky-min_BB4X7KxSP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655089046247",
    url: "https://mylinky.project.andriann.co/login",
    tags: ["React", "SASS", "TailwindCSS"],
    createdAt: "2022-05-28",
  },
];

export const tags: string[] = [
  "React",
  "SASS",
];
