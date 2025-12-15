import { useApp } from "../context/AppContext";
import { translations } from "../data/translations";
import fondo3Img from "../assets/img/Fondo3.webp";
import linkedinSmallImg from "../assets/img/Logos/linkedinSmall.webp";

export default function Banner() {
  const { language } = useApp();
  const translation = translations[language];

  return (
    <div
      className="bg-cover bg-center shadow-[1px_8px_10px_-4px_rgba(0,0,0,0.67)]"
      style={{ backgroundImage: `url(${fondo3Img})` }}
    >
      <div className="w-[95%] max-w-[1200px] mx-auto lg:w-full flex flex-col pt-20 px-6 pb-12 h-[calc(100vh-30rem)] md:h-[calc(100vh-65rem)]">
        <h1 className="mb-10 text-4xl md:text-6xl font-black text-white">
          Juan Felipe González
        </h1>
        <h2 className="mb-12 text-3xl md:text-5xl font-black text-white">
          {translation.developer.title}
        </h2>

        <div className="w-[60%] md:flex justify-start gap-12">
          <a
            className="flex items-center justify-center p-8 bg-[#061221] rounded-lg mb-10 shadow-[0_5px_9px_hsla(0,0%,100%,0.35)]"
            href="https://www.linkedin.com/in/juan-felipe-gonzalez-backend/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinSmallImg}
              alt="LinkedIn Logo"
              height="29"
              width="102"
            />
            &nbsp;&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="fill-white"
            >
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
            </svg>
          </a>
        </div>
      </div>


    </div>
  );
}
