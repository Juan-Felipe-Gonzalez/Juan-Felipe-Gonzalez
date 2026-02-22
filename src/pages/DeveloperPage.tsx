import Banner from "../components/Banner";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";
import TeamProjects from "../components/TeamProjects";

export default function DeveloperPage() {
  return (
    <>
      <div className="flex flex-col space-y-16 mb-16">
        <Banner />
        <About />
        <Skills />
        <Projects />
        <TeamProjects />
      </div>
    </>
  );
}
