import musicImg from '../assets/img/Music.webp';
import coffeBlogImg from '../assets/img/CoffeBlog.webp';
import rockFestivalImg from '../assets/img/RockFestival.webp';
import latamTetrisImg from '../assets/img/LatamTetris.webp';
import franciscoImg from '../assets/img/Francisco Foundation.webp';

export type Project = {
  id: string;
  title: string;
  url: string;
  image: string;
  technologies: string[];
  isTeamProject?: boolean;
}

export const developerProjects: Project[] = [
  {
    id: 'music',
    title: 'Cute Music',
    url: 'https://music-asthetic.netlify.app/',
    image: musicImg,
    technologies: ['html-5', 'Sass Logo (Color)-01', 'JavaScript'],
  },
  {
    id: 'coffee',
    title: 'Colombian Coffee',
    url: 'https://colombian-coffee.netlify.app/',
    image: coffeBlogImg,
    technologies: ['html-5', 'Sass Logo (Color)-01', 'JavaScript'],
  },
  {
    id: 'rockfestival',
    title: 'Rock Festival',
    url: 'https://cuartetodenos-festival.netlify.app/',
    image: rockFestivalImg,
    technologies: ['html-5', 'Sass Logo (Color)-01', 'JavaScript'],
  },
];

export const teamProjects: Project[] = [
  {
    id: 'tetrislatam',
    title: 'Tetris LATAM',
    url: 'https://tetrislatam.com',
    image: latamTetrisImg,
    technologies: ['html-5', 'css3', 'JavaScript', 'Vue.js'],
    isTeamProject: true,
  },
  {
    id: 'francisco',
    title: 'Francisco Foundation',
    url: 'https://yzflas3t9.wordpress.com/',
    image: franciscoImg,
    technologies: ['html-5', 'css3', 'WordPress'],
    isTeamProject: true,
  },
];
