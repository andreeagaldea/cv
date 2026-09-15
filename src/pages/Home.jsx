import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import ProjectsCallout from '../components/ProjectsCallout';
import Contact from '../components/Contact';
import { cvData } from '../data/cvData';
import { useNavigate } from 'react-router-dom';
import Divider from '../components/Divider';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
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
  );
}