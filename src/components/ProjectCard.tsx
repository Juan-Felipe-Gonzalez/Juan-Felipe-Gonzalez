import type { Project } from "../data/projects";
import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useApp();
  const translation = translations[language];

  return (
    <div>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <div className="rounded-2xl bg-[#232528]">
          <div className="relative min-h-[220px] rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover h-full w-full rounded-t-2xl"
              height="200"
              loading="lazy"
            />

            <div className="md:opacity-0 opacity-100 md:group-hover:opacity-100 md:group-focus:opacity-100 transition-opacity duration-200 ease-in-out absolute inset-0 flex flex-col justify-end p-8 overflow-hidden bg-linear-to-b from-[rgba(0,0,0,0.02)] to-[rgba(0,0,0,0.8)] backdrop-blur-[5px] rounded-t-2xl">
              <h2 className="mb-10 text-3xl md:text-5xl font-black text-white">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-end py-[1.1rem] pr-4 pl-8">
            {project.technologies.map((techSrc, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-md max-h-[22px]"
              >
                <img
                  src={techSrc}
                  alt="Technology logo"
                  className="max-h-[22px] w-auto"
                  height="40"
                  width="40"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center bg-[#1d88b9]">
            <p className="my-[1.4rem] mx-[1.4rem] text-white font-bold">
              {translation.developer.seeWebsite}{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </p>
          </div>
        </div>
      </a>

      {project.github == "" ? (
        <div>
          <div className="flex justify-center bg-white  rounded-b-2xl">
            <p className="my-[1.4rem] mx-[1.4rem] text-[#989898] font-bold">
              Github <i className="fa-brands fa-github"></i>
            </p>
          </div>
        </div>
      ) : (
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <div className="flex justify-center bg-white  rounded-b-2xl">
            <p className="my-[1.4rem] mx-[1.4rem] text-[#1d88b9] font-bold">
              Github <i className="fa-brands fa-github"></i>
            </p>
          </div>
        </a>
      )}
    </div>
  );
}
