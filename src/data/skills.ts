export interface Skill {
  name: string;
  image: string;
  isEnglish?: boolean;
  englishUrl?: string;
}

export const developerSkills: Skill[] = [
  {
    name: 'English B2',
    image: '',
    isEnglish: true,
    englishUrl: 'https://www.efset.org/cert/4M3Cwx',
  },
  { name: 'HTML 5', image: 'html-5' },
  { name: 'CSS 3', image: 'css3' },
  { name: 'SCSS', image: 'Sass Logo (Color)-01' },
  { name: 'Tailwind CSS', image: 'TailwindCss' },
  { name: 'JavaScript', image: 'JavaScript' },
  { name: 'TypeScript', image: 'Typescript' },
  { name: 'PHP', image: 'PHP-logo.svg' },
  { name: 'Python', image: 'python' },
  { name: 'MySQL', image: 'mysql' },
  { name: 'MongoDB', image: 'MongoDB2' },
  { name: 'React', image: 'React' },
  { name: 'Node.Js', image: 'NodeJsWhite' },
  { name: 'Gulp.js', image: 'gulp' },
  { name: 'Git', image: 'git' },
];

export const designerSkills: Skill[] = [
  {
    name: 'English B2',
    image: '',
    isEnglish: true,
    englishUrl: 'https://www.efset.org/cert/4M3Cwx',
  },
  { name: 'Photoshop', image: 'Adobe_Pothoshop' },
  { name: 'Illustrator', image: 'Adobe_Illustrator' },
  { name: 'After Effects', image: 'Adobe_AE' },
  { name: 'Premiere', image: 'Adobe_Premiere' },
  { name: 'Adobe XD', image: 'Adobe_XD' },
  { name: 'Blender', image: 'Blender' },
  { name: 'ZBrush', image: 'Zbrush' },
];
