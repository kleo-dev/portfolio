import './App.css';
import Home from './home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGit, faGithub, faGolang, faInstagram, faJs, faPython, faRust, faYoutube } from '@fortawesome/free-brands-svg-icons'

function App() {
  return ( 
    <div className='app'>
      <img src="logo.png" alt="Logo" className='logo' />
      <div className="shape-blob"></div>
      <div className="shape-blob one"></div>
      <div className="shape-blob two"></div>
      <Home/>

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