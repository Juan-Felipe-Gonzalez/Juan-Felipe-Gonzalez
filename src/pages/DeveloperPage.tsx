import Banner from '../components/Banner';
import Skills from '../components/Skills';
import About from '../components/About';
import Projects from "../components/Projects";


export default function DeveloperPage() {
  return (
    <div className='flex flex-col space-y-16'>
      <Banner />
      <Projects/>
      <Skills />
      <About />
    </div>
  );
}
