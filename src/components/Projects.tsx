import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import { developerProjects, teamProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { language } = useApp();
  const translation = translations[language];

  return (
    <>
      <div className="w-[95%] max-w-[1200px] mx-auto lg:w-full">
        <h2 className="mb-10 text-3xl md:text-5xl font-black text-white mt-12">
          {translation.developer.projects}
        </h2>
        <p className="text-[1.7rem] md:text-[2rem] text-[#6b7280] leading-[1.8]">
          {translation.developer.projectsDescription}
        </p>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-12 w-[95%] max-w-[1200px] mx-auto lg:w-full">
          {developerProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12">
          <h2 className="mb-10 text-3xl md:text-5xl font-black text-white mt-12">
            {translation.developer.teamProjects}
          </h2>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-12 w-[95%] max-w-[1200px] mx-auto lg:w-full">
            {teamProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
