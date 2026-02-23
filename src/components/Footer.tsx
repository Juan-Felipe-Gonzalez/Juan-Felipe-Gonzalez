import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import logoImg from "../assets/img/Logo.webp";
import linkedinImg from "../assets/img/Logos/LinkedIn.webp";
import github from "../assets/img/Logos/github.webp";
import resumePdf from "../assets/pdf/Juan Felipe Gonzalez Desarrollador Backend.pdf";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const { language } = useApp();
  const translation = translations[language];

  return (
    <footer className="p-12 min-h-40 bg-[#2a2c30]">
      <div className="flex flex-col-reverse items-center md:flex-row md:justify-evenly w-[95%] max-w-[1200px] mx-auto lg:w-full">
        <HashLink to="#home" className="mt-5 md:mt-0">
          <img
            src={logoImg}
            alt="Juan Felipe González Logo"
            className="h-full w-auto max-h-36 mx-auto"
            height="14"
            width="108"
          />
        </HashLink>

        <p className="text-white text-center">
          {translation.footer.copyright} {new Date().getFullYear()}
        </p>

        <ul className="flex flex-col items-center ">
          <li className="flex gap-8 list-none mb-3 md:mb-0">
            <a
              href="https://www.linkedin.com/in/juan-felipe-gonzalez-fullstack/"
              target="_blank"
              className="flex items-center justify-center h-22 w-22 shrink-0 p-4 bg-[#1e2022] rounded-2xl"
            >
              <img
                src={linkedinImg}
                alt="LinkedIn Logo"
                className="max-h-full max-w-full w-auto object-contain"
                height="50"
                width="50"
              />
            </a>
            <a
              href="https://github.com/Juan-Felipe-Gonzalez"
              target="_blank"
              className="flex items-center justify-center h-22 w-22 shrink-0 p-4 bg-[#1e2022] rounded-2xl"
            >
              <img
                src={github}
                alt="github logo"
                className="max-h-full max-w-full w-auto object-contain"
                height="50"
                width="50"
              />
            </a>
            <a
              href="mailto:felgart22@gmail.com"
              target="_blank"
              className="flex items-center justify-center h-22 w-22 shrink-0 p-4 bg-[#1e2022] rounded-2xl"
            >
              <i className="fa-solid fa-at text-white text-5xl"></i>
            </a>
            <a
              href={resumePdf}
              target="_blank"
              className="flex items-center justify-center h-22 w-22 shrink-0 p-4 bg-[#1e2022] rounded-2xl text-white font-bold text-3xl"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
