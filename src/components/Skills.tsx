import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import { developerSkills, type Skill } from '../data/skills';
import { useState } from 'react';

export default function Skills() {
  const { language } = useApp();
  const [skillSelected, setskillSelected] = useState('Frontend');
  const translation = translations[language];

  return (
    <main className="w-[95%] max-w-[1200px] mx-auto lg:w-full" id='stack'>
      <div className='flex flex-wrap m-auto justify-center'>
          <button 
            className={`border cursor-pointer shadow-lg shadow-[#151530]/50 p-6 m-1 rounded-xl text-white  ${skillSelected == translation.titlesSkills.frontend ? 'border-[#21215b] bg-[#151530] flex-1' : 'border-[#20202e] bg-[#111118] flex'}`}
            onClick={() => setskillSelected(translation.titlesSkills.frontend)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inline mr-1 icon icon-tabler icons-tabler-outline icon-tabler-user-screen"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.03 17.818a3 3 0 0 0 1.97 -2.818v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8c0 1.317 .85 2.436 2.03 2.84" /><path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M8 21a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" /></svg>
              {translation.titlesSkills.frontend}
          </button>
          <button 
            className={`border cursor-pointer shadow-lg shadow-[#151530]/50 p-6 m-1 rounded-xl text-white ${skillSelected == translation.titlesSkills.backend ? 'border-[#21215b] bg-[#151530] flex-1' : 'border-[#20202e] bg-[#111118] flex'}`}
            onClick={() => setskillSelected(translation.titlesSkills.backend)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inline mr-1 icon icon-tabler icons-tabler-outline icon-tabler-database"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" /><path d="M4 6v6a8 3 0 0 0 16 0v-6" /><path d="M4 12v6a8 3 0 0 0 16 0v-6" /></svg>
              {translation.titlesSkills.backend}
          </button>
          <button 
            className={`border cursor-pointer shadow-lg shadow-[#151530]/50 p-6 m-1 rounded-xl text-white ${skillSelected == translation.titlesSkills.cloud ? 'border-[#21215b] bg-[#151530] flex-1' : 'border-[#20202e] bg-[#111118] flex'}`}
            onClick={() => setskillSelected(translation.titlesSkills.cloud)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inline mr-1 icon icon-tabler icons-tabler-outline icon-tabler-cloud"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" /></svg> 
              {translation.titlesSkills.cloud}
          </button>
          <button 
            className={`border cursor-pointer shadow-lg shadow-[#151530]/50 p-6 m-1 rounded-xl text-white ${skillSelected == translation.titlesSkills.design ? 'border-[#21215b] bg-[#151530] flex-1' : 'border-[#20202e] bg-[#111118] flex'}`}
            onClick={() => setskillSelected(translation.titlesSkills.design)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inline mr-1 icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg> 
              {translation.titlesSkills.design}
          </button>
          <button 
            className={`border cursor-pointer shadow-lg shadow-[#151530]/50 p-6 m-1 rounded-xl text-white ${skillSelected == translation.titlesSkills.languages ? 'border-[#21215b] bg-[#151530] flex-1' : 'border-[#20202e] bg-[#111118] flex'}`}
            onClick={() => setskillSelected(translation.titlesSkills.languages)}
            
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="inline mr-1 icon icon-tabler icons-tabler-outline icon-tabler-world"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg> 
              {translation.titlesSkills.languages}
          </button>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-9">
        {(developerSkills as Record<string, Skill[]>)[skillSelected]?.map((skill: Skill, index: React.Key) => (
          <div
            key={index}
            className='flex items-center justify-center rounded-xl mb-1 mr-4 px-16 py-4 md:mr-2 md:mb-1 bg-[#1a1c21]'
          >
                <p className="flex items-center text-[#cad1dc] ">
                  {skill.image && (
                      <img
                        src={skill.image}
                        alt={`${skill.name} Logo`}
                        className="max-h-[30px] w-auto mr-4"
                        height="30"
                      />
                    )
                  }
                 {skill.name}
                </p>
            </div>
          ))
        }
      </div>
    </main>
  );
}
