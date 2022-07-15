/* eslint-disable react/no-unescaped-entities */
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import type { IconType } from "react-icons";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Button } from "../components/atoms";
import { ProjectList } from "../components/organisms";
import type { SEOProps } from "../components/seo";
import SEO from "../components/seo";

type SocialMediaType = {
  icon: IconType;
  url: string;
  title: string;
}

function Home() {
  const SEOData: SEOProps = {
    title: "Andrian Fadhilla (andrianfaa) - Front-End Web Developer",
    description: "I'm a User Interface Designer and also a Front-End Developer based in Bekasi, Indonesia. I Love to create beautiful and functional user interfaces using React.js.",
    url: "https://www.andriann.co",
    keywords: [
      "Andrian Fadhilla",
      "andrianfaa",
      "user interface designer",
      "UI designer",
      "front-end developer",
      "front-end web developer",
      "bekasi",
      "indonesia",
      "react",
      "react.js",
    ],
  };

  const socialMediaLinks: SocialMediaType[] = [
    {
      icon: IoLogoGithub,
      url: "https://github.com/andrianfaa",
      title: "Github",
    },
    {
      icon: IoLogoTwitter,
      url: "https://twitter.com/andrianfaa",
      title: "Twitter",
    },
    {
      icon: IoLogoLinkedin,
      url: "https://linkedin.com/in/andrianfaa",
      title: "LinkedIn",
    },
  ];

  return (
    <div className="fade-in">
      <SEO data={SEOData} />

      <header className="container p-6 min-h-screen sm:min-h-[unset] sm:h-[500px] flex flex-col sm:flex-row items-center justify-center">
        <div className="w-full mb-6">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-black-100 max-w-3xl font-normal text-center sm:text-left leading-normal md:leading-[56px]">
            <span className="block text-lg md:text-xl font-sans mb-4 font-medium">
              Hi, I'm Andrian Fadhilla{" "}
            </span>
            I'm a {" "}
            <span className="text-primary">
              User Interface Designer
            </span>
            {" "}
            and also a{" "}
            <span className="text-cyan-300">
              Front-End Developer
            </span>
            {" "}
            based in Bekasi, Indonesia.
            I Love to create beautiful and functional user interfaces using React.js.
          </h1>

          <Button.Base
            className="button-base rounded mt-4 block mx-auto sm:mx-[unset]"
            title="Hire me"
          >
            Hire me
          </Button.Base>
        </div>

        <ul className="w-full sm:w-[50px] flex items-center justify-center sm:flex-col gap-4">
          {socialMediaLinks.map(({ title, url, icon }) => {
            const Icon = icon;

            return (
              <li key={title}>
                <a
                  href={url}
                  className="button-base w-12 h-12 rounded-full flex items-center justify-center"
                  title={title}
                >
                  <Icon className="h-6 w-6" />
                </a>
              </li>
            );
          })}
        </ul>
      </header>

      <div className="my-4 justify-center hidden sm:flex">
        <MdOutlineDoubleArrow className="h-6 w-6 rotate-90 text-black-100" />
      </div>

      <div className="container p-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black-100 mb-6 border-b border-b-black-700 pb-6">
          Projects.
        </h2>

        <ProjectList offset={3} />
      </div>
    </div>
  );
}

export default Home;
