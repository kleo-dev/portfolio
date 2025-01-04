import Background from "@/components/Background";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  return (
    <div>
      <Background />
      <div className="content-center w-full lg:mx-auto pt-16 lg:pt-0 relative z-20 pb-16 md:pb-0 animate-fadeIn">
        <div className="w-full max-w-screen-lg mx-auto">
          <div className="px-8 md:px-10 lg:px-15 xl:px-24">
            <h1 className="py-2 text-gray-300">Hey, I'm Leo 👋🏻</h1>
            <p className="font-semibold text-gray-300">
              A passionate software engineer and freelancer from Tirane,
              Albania, specializing in full-stack web development, desktop
              applications, and TUI apps. I have a deep interest in low-level
              programming, often building projects like CPU emulators from
              scratch.
            </p>
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
            <h1 className="pt-5 text-red-400">Pinned Projects</h1>
            <section className="">
              <PinnedRepos />
            </section>

            {/* Experience and skill */}
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 bg-transparent">
              {/* skill */}
              <div>
                <h1 className="pb-3 text-red-400 w-max">My Skills</h1>
                <div className="p-3 bg-transparent-ish rounded-xl">
                  <div className="mx-auto w-max flex flex-row gap-5">
                    <Skill skill="Rust" icon={faRust} />
                    <Skill skill="Python" icon={faPython} />
                    <Skill skill="Go" icon={faGolang} mt="mt-2" />
                    <Skill skill="JavaScript" icon={faJs} />
                    <Skill skill="React" icon={faReact} />
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h1 className="pb-3 text-red-400 w-max">My Experience</h1>
                <div className="p-3 bg-transparent-ish rounded-xl">
                  <div className="mx-auto w-max">Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
