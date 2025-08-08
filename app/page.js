import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Projects />
    </main>
  );
}