"use client";

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
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

export default function App() {
  const [contribs, setContribs] = useState<number>();

  useEffect(() => {
    const fetchContributions = async () => {
      const res = await fetch("/api/contribs");
      const data = await res.json();
      console.log("Total contributions:", data.total);
      setContribs(data.total || undefined);
    };
    fetchContributions();
  }, []);

  return (
    <div>
      <div className="content-center w-full lg:mx-auto pt-5 relative z-20 pb-10 animate-fadeIn">
        <div className="w-full max-w-screen-lg mx-auto">
          <div className="px-8 md:px-10 lg:px-15 xl:px-24">
            <h1 className="py-2 text-gray-300">Hey, I'm Klesti! 👋🏻</h1>
            <p className="font-semibold text-gray-300">
              A 15 year old Software Engineer from Tirane, Albania, with 6 years
              of experience, specializing in full-stack web development, desktop
              applications, TUI apps, and hacking. I also have a deep interest
              in low-level programming.
            </p>

            {/* Socials and skill */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 bg-transparent">
              {/* socials */}
              <div className="pt-5 flex flex-row gap-5 w-max">
                <a href="https://github.com/kleo-dev/" target="blank_">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-slate-300 size-[2.3rem]"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/klesti-selimaj-7a0162343/"
                  target="blank_"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-slate-300 size-[2.3rem]"
                  />
                </a>
                <a
                  href="https://www.instagram.com/selimaj.dev/"
                  target="blank_"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-slate-300 size-[2.3rem]"
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

            <h1 className="text-slate-300">Pinned Projects</h1>
            <section className="">
              <PinnedRepos />
            </section>
            <h2 className="text-slate-300 mt-7">
              {contribs || "Loading.."} contributions in the last year
            </h2>
            <section className="mt-4">
              <GitHubCalendar
                username="kleo-dev"
                theme={{
                  light: [
                    "rgba(255, 255, 255, 0.1)",
                    "rgba(255, 255, 255, 0.3)",
                    "rgba(255, 255, 255, 0.5)",
                    "rgba(255, 255, 255, 0.7)",
                    "rgba(255, 255, 255, 1)",
                  ],
                  dark: [
                    "rgba(255, 255, 255, 0.1)",
                    "rgba(255, 255, 255, 0.3)",
                    "rgba(255, 255, 255, 0.5)",
                    "rgba(255, 255, 255, 0.7)",
                    "rgba(255, 255, 255, 1)",
                  ],
                }}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
