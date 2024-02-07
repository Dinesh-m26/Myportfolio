import './App.css';
import Aboutme from './Components/Aboutme';
import ContactForm from './Components/Contact';
import { Education } from './Components/Education';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Project } from './Components/Project';
import { Footer } from './Components/Footer';


function App() {

  return (

    <div className="bg-[#23283E] text-[#CDCDFF] " data-aos="fade-down" data-aos-duration="1000"  >
      <Header />
      <Home />
      <Aboutme />
      <Education />
      <Project />
      <ContactForm />
      <Footer />
    </div>

  );
}

export default App;
