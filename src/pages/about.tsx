/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import { BiDownload } from "react-icons/bi";
import { Button, Image } from "../components/atoms";

function AboutMe() {
  const profilePict = "https://ik.imagekit.io/lzkn3c9xkpp/Portfolio/__wKCTYIDLb.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1655294393094";

  return (
    <div className="fade-in">
      <header className="container p-6">
        <h1 className="font-display text-4xl sm:text-5xl text-black-100 font-normal text-center leading-normal md:leading-[56px] mb-6 md:mb-10">
          About Me.
        </h1>

        <Button.Base
          className="button-base rounded py-3 w-full flex items-center justify-center"
          title="Download Resume"
        >
          <BiDownload className="inline-block w-6 h-6 mr-2 align-top" />
          Resume
        </Button.Base>

        <hr className="block border-b border-0 mt-6 border-b-black-700 w-full h-[1px]" />
      </header>

      <div className="container px-6 flex flex-col sm:flex-row-reverse">
        <section id="my-picture" className="w-full h-[300px] sm:h-[375px] sm:max-w-[400px]">
          <Image
            src={profilePict}
            alt="Profile Picture"
            className="rounded w-full h-full object-cover"
          />
        </section>

        <section id="about-me" className="w-full pt-6 sm:pr-8 sm:pt-0">
          <h2 className="font-semibold mb-3 sm:mb-4 text-2xl sm:text-3xl text-black-100">
            Hi There!👋
          </h2>
          <p className="text-base sm:text-lg leading-normal mb-3">
            I'm a User Interface Designer and also a Front-End Developer based in Bekasi, Indonesia. I Love to create beautiful and functional user interfaces using React.js.
          </p>

          <p className="text-base sm:text-lg leading-normal mb-3">
            Currently, I'm working as a Freelance Front-End Web Developer especially in React.js at{" "}
            <a href="https://fusionsvisual.id" className="text-black-100 hover:text-primary font-medium" title="Fusions Visual">
              Fusions Visual
            </a>.
            I work with a team of creative designers and developers to create beautiful and functional user interfaces for clients from different countries.
          </p>

          <p className="text-base sm:text-lg leading-normal">
            Btw if you're interested in my work, you can find me on{" "}
            <a href="https://www.linkedin.com/in/andrian-fadhilla-a9a8b817b/" className="text-black-100 hover:text-primary font-medium" title="LinkedIn">
              LinkedIn
            </a>{" "}
            or{" "}
            <a href="https://instagram.com/" className="text-black-100 hover:text-primary font-medium" title="Instagram">
              Instagram
            </a>
          </p>
        </section>
      </div>

      <div className="container p-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black-100 mt-6 border-t border-t-black-700 pt-6 mb-4">
          Timeline.
        </h2>
        <p>
          That is my journey in my life.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
