import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGolang, faJs, faPython, faRust } from '@fortawesome/free-brands-svg-icons'

function App() {
  return ( 
    <div className='app'>
      <img src="logo.png" alt="Logo" className='logo' />
      <div className="shape-blob"></div>
      <div className="shape-blob one"></div>
      <div className="shape-blob two"></div>
      <div className='home'>
        <h2>Hey, I'm Leo 👋🏻</h2>
        <p>I'm a developer and researcher from Tirane, Albania. I'm the leader of <a href="https://github.com/orus-dev">Orus</a>. I've been coding for 5 years and i'm in love with it. I work on free and open source projects. I'm also willing to work on paid projects with a payment. You can find me on <a href="https://instagram.com/kleo.dev">Instagram</a>, <a href="https://github.com/kleo-dev">GitHub</a>, <a href="https://www.youtube.com/@0xkleo">YouTube</a>, Or if you perfer to contact me via Discord: leocodes</p>
      </div>

      <div className='tech-stack'>
        <FontAwesomeIcon icon={faRust} className='tech' />
        <FontAwesomeIcon icon={faPython} className='tech' />
        <FontAwesomeIcon icon={faGolang} className='tech' />
        <FontAwesomeIcon icon={faJs} className='tech' />
      </div>

      
    </div>
  );
}

export default App;