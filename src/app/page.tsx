import PinnedRepos from "@/components/PinnedRepos";
import Skill from "@/components/Skill";
import {
  faGithub,
  faGolang,
  faInstagram,
  faJs,
  faLinkedin,
  faPython,
  faReact,
  faRust,
} from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons/faJava";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubCalendar from "react-github-calendar";

export default function App() {
  return (
    <div>
      <div className="content-center w-full lg:mx-auto pt-5 relative z-20 pb-10 animate-fadeIn">
        <div className="w-full max-w-screen-lg mx-auto">
          <div className="px-8 md:px-10 lg:px-15 xl:px-24">
            <h1 className="py-2 text-gray-300">Hey, I'm Klesti! 👋🏻</h1>
            <p className="font-semibold text-gray-300">
              A 15 year old Software Engineer from Tirane, Albania, with 6 years
              of experience, specializing in full-stack web development, desktop
              applications, TUI apps, and hacking. I also have a deep interest in
              low-level programming.
            </p>

            {/* Socials and skill */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 bg-transparent">
              {/* socials */}
              <div className="pt-5 flex flex-row gap-5 w-max">
                <a href="https://github.com/kleo-dev/" target="blank_">
                  <FontAwesomeIcon
                    icon={faGithub}
                    width={36}
                    className="text-red"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/klesti-selimaj-7a0162343/"
                  target="blank_"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    width={36}
                    className="text-red"
                  />
                </a>
                <a href="https://www.instagram.com/kleo.dev/" target="blank_">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    width={36}
                    className="text-red"
                  />
                </a>
              </div>
              <div>
                <div className="p-3 bg-transparent-ish rounded-xl">
                  <div className="mx-auto w-max flex flex-row gap-5">
                    <Skill skill="Rust" icon={faRust} />
                    <Skill skill="Go" icon={faGolang} />
                    <Skill skill="JavaScript" icon={faJs} />
                    <Skill skill="Java" icon={faJava} classInsert="p-1" />
                    <Skill skill="Python" icon={faPython} />
                    <Skill skill="React" icon={faReact} />
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-red-400">Pinned Projects</h1>
            <section className="">
              <PinnedRepos />
            </section>
            <section className="mt-8">
              <GitHubCalendar username="kleo-dev" theme={{
                light: ["#1a000f", "#5c001d", "#9f0030", "#d10045", "#f5304c"],
                dark: ["#1a000f", "#5c001d", "#9f0030", "#d10045", "#f5304c"],
              }} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
