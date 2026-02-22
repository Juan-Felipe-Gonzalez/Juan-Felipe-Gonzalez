import type { Project } from "../data/projects";
import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";

import html5Logo from "../assets/img/Logos/html-5.webp";
import css3Logo from "../assets/img/Logos/css3.webp";
import sassLogo from "../assets/img/Logos/Sass.webp";
import jsLogo from "../assets/img/Logos/JavaScript.webp";
import phpLogo from "../assets/img/Logos/PHP-logo.svg.webp";
import mysqlLogo from "../assets/img/Logos/mysql.webp";
import tsLogo from "../assets/img/Logos/Typescript.webp";
import reactLogo from "../assets/img/Logos/React.webp";
import mongo from "../assets/img/Logos/mongo.webp";
import wordpressLogo from "../assets/img/Logos/WordPress.webp";

// Record: to define dictionaries or maps in TypeScript
const logoMap: Record<string, string> = {
  "html-5": html5Logo,
  css3: css3Logo,
  "Sass Logo (Color)-01": sassLogo,
  JavaScript: jsLogo,
  "PHP-logo.svg": phpLogo,
  mysql: mysqlLogo,
  Typescript: tsLogo,
  React: reactLogo,
  MongoDB2: mongo,
  WordPress: wordpressLogo,
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useApp();
  const translation = translations[language];

  const getImagePath = (tech: string) => {
    return logoMap[tech] || null;
  };

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
            {project.technologies.map((tech, index) => {
              const imagePath = getImagePath(tech);
              return (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-md max-h-[22px]"
                >
                  {imagePath ? (
                    <img
                      src={imagePath}
                      alt={`${tech} logo`}
                      className="max-h-[22px] w-auto"
                      height="40"
                      width="40"
                      loading="lazy"
                    />
                  ) : (
                    <p className="text-white text-base font-bold">{tech}</p>
                  )}
                </div>
              );
            })}
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
