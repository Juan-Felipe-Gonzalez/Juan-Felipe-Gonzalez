import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import logoImg from '../assets/img/Logo.webp';
import linkedinImg from '../assets/img/Logos/LinkedIn.webp';
import resumePdf from '../assets/pdf/Juan Felipe Gonzalez Desarrollador Backend.pdf';

export default function Footer() {
  const { language } = useApp();
  const translation = translations[language];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('felgart22@gmail.com');
      alert(`Email address copied to clipboard: felgart22@gmail.com`);
    } catch (err) {
      console.log(err)
      alert('Error copying email');
    }
  };

  return (
    <footer className="p-12 min-h-40 bg-[#2a2c30]">
      <div className="flex flex-col-reverse items-center md:flex-row md:justify-evenly w-[95%] max-w-[1200px] mx-auto lg:w-full">
        <div className="mt-5 md:mt-0">
          <a href="/">
            <img
              src={logoImg}
              alt="Juan Felipe González Logo"
              className="h-full w-auto max-h-36 mx-auto"
              height="14"
              width="108"
            />
          </a>
        </div>

        <ul className="flex flex-col items-center ">
          <li className="list-none mb-3 md:mb-0">
            <a href="mailto:felgart22@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <span className="text-fuchsia-500 font-bold">{translation.footer.email}</span> felgart22@gmail.com
            </a>
            <button
              onClick={handleCopyEmail}
              className="cursor-pointer bg-transparent border-0 ml-2"
              aria-label="Copy email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="fill-white"
              >
                <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" />
              </svg>
            </button>
          </li>
          <li className="list-none mb-3 md:mb-0">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex"
            >
              {translation.footer.curriculum}{' '}&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="fill-white"
              >
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
              </svg>
            </a>
          </li>
          <li className="flex gap-8 list-none mb-3 md:mb-0">
            <a
              href="https://www.linkedin.com/in/juan-felipe-gonzalez-fullstack/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 bg-[#1e2022] rounded-2xl"
            >
              <img src={linkedinImg} alt="LinkedIn Logo" className="max-h-14 w-auto" height="50" width="50" />
            </a>
          </li>
        </ul>
      </div>

      <p className="text-white text-center">{translation.footer.copyright} {new Date().getFullYear()}</p>
    </footer>
  );
}
