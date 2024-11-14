"use client";

import './Page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolang, faJs, faPython, faRust } from '@fortawesome/free-brands-svg-icons';
import GraphemeSplitter from 'grapheme-splitter';
import dynamic from 'next/dynamic';

const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

const stringSplitter = (text: string): any => {
  const splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(text);
};

export default function Home() {
  return (
    <div className="app">
      <img src="logo.png" alt="Logo" className="logo" />
      <div className="shape-blob"></div>
      <div className="shape-blob one"></div>
      <div className="shape-blob two"></div>
      <div className="home">
        <h2>
          <Typewriter
            options={{
              stringSplitter,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hey, I'm Leo 👋🏻")
                .start()
                .pauseFor(2400)
                .deleteAll()
                .typeString("A software developer")
                .pauseFor(2400)
                .changeDeleteSpeed(10)
                .deleteChars(18)
                .typeString("Cybersecurity engineer")
                .pauseFor(2400)
                .deleteChars(22)
                .typeString("Computer architect")
                .pauseFor(2400);
            }}
          />
        </h2>
        <p>
          I'm a developer and researcher from Tirane, Albania. I'm the leader of{' '}
          <a href="https://github.com/orus-dev">Orus</a>. I've been coding for 5
          years and I'm in love with it. I work on free and open source projects.
          I'm also willing to work on paid projects with a payment. You can find
          me on <a href="https://instagram.com/kleo.dev">Instagram</a>,{' '}
          <a href="https://github.com/kleo-dev">GitHub</a>,{' '}
          <a href="https://www.youtube.com/@0xkleo">YouTube</a>, Or if you
          prefer to contact me via Discord: leocodes. You can also check out{' '}
          <a href="/blog">My Blog</a>
        </p>
      </div>

      <div className="tech-stack">
        <FontAwesomeIcon icon={faRust} className="tech" />
        <FontAwesomeIcon icon={faPython} className="tech" />
        <FontAwesomeIcon icon={faGolang} className="tech" />
        <FontAwesomeIcon icon={faJs} className="tech" />
      </div>
    </div>
  );
};
