import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import { teamProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function TeamProjects() {
  const { language } = useApp();
  const translation = translations[language];

  return (
    <div>
      <div className="w-[95%] max-w-[1200px] mx-auto lg:w-full">
      
      <div className="mt-12">
          <h2 className="mb-10 text-3xl md:text-5xl font-black text-white mt-12">
            {translation.developer.teamProjects}
          </h2>
          
          <p className="text-[1.7rem] md:text-[2rem] text-gray-200 leading-[1.8] mb-7">
            {translation.developer.projectsTeamDescription}
          </p>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-12 w-[95%] max-w-[1200px] mx-auto lg:w-full">
            {teamProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
