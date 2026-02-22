import html5 from '../assets/img/Logos/html-5.webp';
import css3 from '../assets/img/Logos/css3.webp';
import sass from '../assets/img/Logos/Sass.webp';
import tailwind from '../assets/img/Logos/TailwindCss.webp';
import js from '../assets/img/Logos/JavaScript.webp';
import ts from '../assets/img/Logos/Typescript.webp';
import php from '../assets/img/Logos/PHP-logo.svg.webp';
import python from '../assets/img/Logos/python.webp';
import react from '../assets/img/Logos/React.webp';
import nodejs from '../assets/img/Logos/node.webp';
import git from '../assets/img/Logos/git.webp';
import photoshop from '../assets/img/Logos/photoshop.webp';
import illustrator from '../assets/img/Logos/illustrator.webp';
import canva from '../assets/img/Logos/canva.webp';
import figma from '../assets/img/Logos/figma.webp';
import jest from '../assets/img/Logos/jest.webp';
import postman from '../assets/img/Logos/postman.webp';
import github from '../assets/img/Logos/github.webp';
import express from '../assets/img/Logos/express.webp';
import bootstrap from '../assets/img/Logos/boostrap.webp';
import mysql from '../assets/img/Logos/mysql.webp';
import java from '../assets/img/Logos/java.webp';
import springboot from '../assets/img/Logos/springboot.webp';
import postgres from '../assets/img/Logos/postgres.webp';
import swagger from '../assets/img/Logos/swagger.webp';
import mongo from '../assets/img/Logos/mongo.webp';
import aftereffects from '../assets/img/Logos/aftereffects.webp';
import netlify from '../assets/img/Logos/netlify.webp';
import hostinger from '../assets/img/Logos/hostinger.webp';
import render from '../assets/img/Logos/render.webp';

export type Skill = {
  name: string;
  image: string;
  isEnglish?: boolean;
  englishUrl?: string;
}

export const developerSkills = {
  'Frontend' : [
    { name: 'React', image: react },
    { name: 'Tailwind', image: tailwind },
    { name: 'Sass', image: sass },
    { name: 'Bootstrap', image: bootstrap },
    { name: 'HTML', image: html5 },
    { name: 'CSS', image: css3 },
  ], 
  'Backend & Data bases': [
    { name: 'TypeScript', image: ts },
    { name: 'JavaScript', image: js },
    { name: 'Java', image: java },
    { name: 'Spring Boot', image: springboot },
    { name: 'MySQL', image: mysql },
    { name: 'MongoDB', image: mongo },
    { name: 'Postgres', image: postgres },
    { name: 'Node.Js', image: nodejs },
    { name: 'Express', image: express },
    { name: 'PHP', image: php },
    { name: 'Python', image: python },
  ],
  'Cloud & Tools': [
    { name: 'Git', image: git },
    { name: 'Github', image: github },
    { name: 'Postman', image: postman },
    { name: 'Swagger', image: swagger },
    { name: 'Jest', image: jest },
    { name: 'Netlify', image: netlify},
    { name: 'Render', image: render},
    { name: 'Hostinger', image: hostinger},
  ],
  'Languages': [
    { name: 'Español', image: '' },
    { name: 'English B2', image: '' },
  ],
  'Design': [
    { name: 'Figma', image: figma },
    { name: 'Canva', image: canva },
    { name: 'Illustrator', image: illustrator },
    { name: 'After Effects', image: aftereffects },
    { name: 'Photoshop', image: photoshop },
  ]
}