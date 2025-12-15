import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import { developerSkills } from '../data/skills';

// Import skill logos
import html5Logo from '../assets/img/Logos/html-5.webp';
import css3Logo from '../assets/img/Logos/css3.webp';
import sassLogo from '../assets/img/Logos/Sass Logo (Color)-01.webp';
import tailwindLogo from '../assets/img/Logos/TailwindCss.webp';
import jsLogo from '../assets/img/Logos/JavaScript.webp';
import tsLogo from '../assets/img/Logos/Typescript.webp';
import phpLogo from '../assets/img/Logos/PHP-logo.svg.webp';
import pythonLogo from '../assets/img/Logos/python.webp';
import mysqlLogo from '../assets/img/Logos/mysql.webp';
import mongodbLogo from '../assets/img/Logos/MongoDB2.png';
import reactLogo from '../assets/img/Logos/React.png';
import nodejsLogo from '../assets/img/Logos/NodeJsWhite.webp';
import gulpLogo from '../assets/img/Logos/gulp.webp';
import gitLogo from '../assets/img/Logos/git.webp';

const logoMap: Record<string, string> = {
  'html-5': html5Logo,
  'css3': css3Logo,
  'Sass Logo (Color)-01': sassLogo,
  'TailwindCss': tailwindLogo,
  'JavaScript': jsLogo,
  'Typescript': tsLogo,
  'PHP-logo.svg': phpLogo,
  'python': pythonLogo,
  'mysql': mysqlLogo,
  'MongoDB2': mongodbLogo,
  'React': reactLogo,
  'NodeJsWhite': nodejsLogo,
  'gulp': gulpLogo,
  'git': gitLogo,
};

export default function Skills() {
  const { language } = useApp();
  const t = translations[language];

  const getImagePath = (imageName: string) => {
    if (!imageName) return '';
    return logoMap[imageName] || '';
  };

  return (
    <main className="w-[95%] max-w-[1200px] mx-auto lg:w-full">
      <h2 className="font-['Inter',sans-serif] mb-10 text-3xl md:text-5xl font-black text-white mt-12">{t.developer.stack}</h2>

      <div className="flex flex-wrap justify-center gap-2">
        {developerSkills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center justify-center rounded-sm mb-1 mr-4 flex-[0_0_calc(50%-1.6rem)] p-2 md:flex-[0_0_calc(25%-0.8rem)] md:rounded md:mr-0 md:mb-1 md:p-3 ${skill.isEnglish ? 'cursor-pointer bg-white' : 'bg-[#232528]'}`}
          >
            {skill.isEnglish ? (
              <p className="font-bold whitespace-nowrap">
                <a href={skill.englishUrl} target="_blank" rel="noopener noreferrer" className="text-[#232528]">
                  {skill.name}&nbsp;
                  <svg
                    className="pt-1.5 fill-black"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                  </svg>
                </a>
              </p>
            ) : (
              <p className="flex items-center font-bold whitespace-nowrap text-[1.7rem] md:text-[2rem] text-[#6b7280] leading-[1.8]">
                {skill.image && (
                  <img
                    src={getImagePath(skill.image)}
                    alt={`${skill.name} Logo`}
                    className="max-h-[30px] w-auto"
                    height="40"
                    width="40"
                    loading="lazy"
                  />
                )}
                &nbsp;{skill.name}
              </p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
