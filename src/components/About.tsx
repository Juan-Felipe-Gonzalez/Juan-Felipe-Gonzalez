import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import { certifications } from '../data/certifications';

export default function About() {
  const { language } = useApp();
  const t = translations[language];

  return (
    <div className="w-[95%] max-w-[1200px] mx-auto lg:w-full mb-[30px]">
      <h2 id="sobreMi" className="font-['Inter',sans-serif] mb-1 md:mb-10 text-3xl md:text-5xl font-black text-white mt-12">{t.developer.aboutMe}</h2>

      <div className="gap-0 grid grid-cols-1 md:gap-16 md:grid-cols-2">
        <div data-aos="fade-up">
          {t.developer.aboutText.map((text, index) => (
            <p key={index} className="font-['Open_Sans',sans-serif] text-[1.7rem] md:text-[2rem] text-[#6b7280] leading-[1.8]">{text}</p>
          ))}
        </div>

        <ul className="list-none text-[1.7rem] md:text-[2rem] text-[#6b7280] leading-[1.8]" data-aos="fade-up">
          <li>{t.developer.contactMessage}</li>
          {certifications.map((cert, index) => (
            <li key={index}>
              <span className="text-[18px] font-bold text-[#42afe1]">{cert.year}:</span>&emsp;{cert.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
