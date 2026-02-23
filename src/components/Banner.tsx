import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import fondo3Img from "../assets/img/Fondo3.webp";
import linkedinSmallImg from "../assets/img/Logos/linkedinSmall.webp";
import gitHub_Lockup from "../assets/img/Logos/gitHub_Lockup.webp";

export default function Banner() {
  const { language } = useApp();
  const translation = translations[language];

  return (
    <div
      className="bg-cover bg-center shadow-[1px_8px_10px_-4px_rgba(0,0,0,0.67)]"
      style={{ backgroundImage: `url(${fondo3Img})` }}
    >
      <div className="w-[95%] max-w-[1200px] mx-auto lg:w-full flex flex-col py-24 px-6">
        <h1 className="mb-10 text-4xl md:text-6xl font-black text-white">
          Juan Felipe González
        </h1>
        <h2 className="mb-12 text-3xl md:text-5xl font-black text-white">
          {translation.developer.title}
        </h2>

        <div className="md:flex justify-start gap-12">
          <a
            className="flex items-center justify-center p-8 border-[#20202e] bg-[#111118] rounded-4xl gap-4 shadow-[0_5px_9px_hsla(0,0%,100%,0.35)]"
            href="https://www.linkedin.com/in/juan-felipe-gonzalez-fullstack/"
            target="_blank"
          >
            <img
              src={linkedinSmallImg}
              alt="LinkedIn Logo"
              className="h-auto w-60"
            />
            <i className="fa-solid fa-arrow-up-right-from-square text-white text-3xl"></i>
          </a>
          
          <a
            className="flex items-center justify-center p-8 border-[#20202e] bg-[#111118] rounded-4xl gap-4 shadow-[0_5px_9px_hsla(0,0%,100%,0.35)]"
            href="https://github.com/Juan-Felipe-Gonzalez"
            target="_blank"
          >
            <img
              src={gitHub_Lockup}
              alt="github Logo"
              className="h-auto w-60"
            />
            <i className="fa-solid fa-arrow-up-right-from-square text-white text-3xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
