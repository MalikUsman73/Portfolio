import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Specialisms from './components/Specialisms';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Specialisms />
        <Services />
        <HowItWorks />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
