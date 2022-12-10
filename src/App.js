import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import WorkSample from './Components/WorkSample';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <WorkSample />
      <Contact />
    </div>
  );
}

export default App;
