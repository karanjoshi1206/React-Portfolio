import { useState } from 'react';
import './app.scss';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import TopBar from './components/topbar/TopBar';
import Menu from './menu/Menu';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro />
        <Projects />
        <About />
        <Contact />
      </div>
      <a href="https://api.whatsapp.com/send?phone=+918532055221" className="whatsappIcon">
      <WhatsAppIcon/>

      </a>
    </div>
  );
}

export default App;
