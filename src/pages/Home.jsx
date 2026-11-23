import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import ProjectsCallout from '../components/ProjectsCallout';
import Contact from '../components/Contact';
import Divider from '../components/utils/Divider';
import FloatingHearts from '../components/FloatingHearts';
import { cvData } from '../data/cvData';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <FloatingHearts />

      <div className="container relative z-10">
        <Hero data={cvData.hero} />
        <Divider />
        <Skills skills={cvData.skills} />
        <Divider />
        <Experience items={cvData.experience} />
        <Divider />
        <Education items={cvData.education} />
        <Divider />
        <ProjectsCallout onButtonClick={() => navigate('/projects')} />
        <Divider />
        <Contact />
      </div>
    </div>
  );
}