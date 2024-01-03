import * as Assets from '../assets/assets'

const navLinks = [
  {
    id: "home",
    name: "Accueil",
    path: "/",
  },
  {
    id: "about",
    name: "A propos",
    path: "/about",
  },
  {
    id: "skills",
    name: "Compétences",
    path: "/skills",
  },
  {
    id: "experiences",
    name: "Experiences",
    path: "/experiences",
  },
  {
    id: "projects",
    name: "Projets",
    path: "/projects",
  },
  {
    id: "contact",
    name: "Contact",
    path: "/contact",
  },
]

const curriculum = [
  {
    name: "Collège",
    date: "2015-2019",
    description: "Collège Leo-Ferré, Gourdon (46)",
    image: Assets.lotdpt,
  },
  {
    name: "Baccalauréat spécialité SVT et LLCE Anglais",
    date: "2019 - 2022",
    description: "Lycée Leo-Ferré, Gourdon (46)",
    image: Assets.lotdpt,
  },
  {
    name: "BUT Informatique",
    date: "2022 - 2025",
    description: "IUT de Blagnac, Blagnac (31)",
    image: Assets.iutblagnac,
  },

]

const skills = [

  {
    name: "HTML 5",
    level: 80,
    color: "orange",
    icon: Assets.html,
  },
  {
    name: "Tailwind CSS",
    level: 80,
    color: "lightblue",
    icon: Assets.tailwind,
  },
  {
    name: "JavaScript",
    level: 60,
    color: "yellow",
    icon: Assets.javascript,
  },
  {
    name: "Typescript",
    level: 60,
    color: "blue",
    icon: Assets.typescript,
  },
    {
    name: "React",
    level: 70,
    color: "lightblue",
    icon: Assets.reactjs,
  },
  {
    name: "PHP",
    level: 60,
    color: "purple",
    icon: Assets.php,
  },
  {
    name: "Java",
    level: 80,
    color: "red",
    icon: Assets.java,
  },
  {
    name: "Python",
    level: 50,
    color: "yellow",
    icon: Assets.python,
  },
  {
    name: "C",
    level: 40,
    color: "blue",
    icon: Assets.c,
  },
  {
    name: "git",
    level: 60,
    color: "red",
    icon: Assets.git,
  },
  {
    name: "Unreal Engine",
    level: 50,
    color: "purple",
    icon: Assets.ue,
  },
  {
    name: "mySQL",
    level: 40,
    color: "yellow",
    icon: Assets.mysql,
  }
]

const projects = [
  {
    name: "Site E-commerce",
    description:
      "Site e-commerce pour une entreprise fictive appelée \"Pages d'or\" spécialisée dans la vente de livres. Développé avec PHP, Tailwind CSS et Javascript le site est hébergé sur un serveur de l'IUT de Blagnac.",
    link: "http://193.54.227.208/~saephp06/",
    tags: [
      {
        name: "php",
        color: "purple-tag",
      },
      {
        name: "tailwind",
        color: "blue-tag",
      },
      {
        name: "javascript",
        color: "yellow-tag",
      },
      {
        name: "mysql",
        color: "orange-tag",
      },
    ],
    image: Assets.ecommerce,
    source_code_link: ""
  },
  {
    name: "Site Web Portfolio",
    description:
      "Portfolio développé avec React, Typescript et Tailwind CSS. Le site est responsive et est hébergé sur github pages.",
    link: "https://antoine-leboucher.fr",
    tags: [
      {
        name: "react",
        color: "blue-tag",
      },
      {
        name: "typescript",
        color: "dark-blue-tag",
      },
      {
        name: "tailwind",
        color: "blue-tag",
      },
      {
        name: "framer-motion",
        color: "pink-tag",
      },
    ],
    image: Assets.portfolio,
    source_code_link: "https://github.com/Antwannnn/react-portfolio",
  },
  {
    name: "Jeu Memory",
    description:
      "Application JavaFX qui permet de jouer au jeu Memory. Le jeu est composé de 16 cartes qui sont retournées face cachée. Le but du jeu est de retrouver les paires de cartes identiques en un minimum de coups.",
    link: null,
    tags: [
      {
        name: "java",
        color: "orange-tag",
      },
      {
        name: "javafx",
        color: "red-tag",
      },
    ],
    image: Assets.memory,
    source_code_link: "https://github.com/Antwannnn/Memory-Game",
  },
  {
    name: "Agence Bancaire",
    description:
      "Application java qui permet de gérer les comptes bancaires des clients d'une agence bancaire mais également les comptes des employés de l'agence.",
    link: null,
      tags: [
      {
        name: "java",
        color: "orange-tag",
      },
      {
        name: "javafx",
        color: "red-tag",
      },
      {
        name: "oracle-sql",
        color: "pink-tag",
      },
    ],
    image: Assets.bank,
    source_code_link: "https://github.com/IUT-Blagnac/sae2023-bank-1b3",
  },
  {
    name: "Prototype de jeu d'horreur en 3D",
    description:
      "Prototype de jeu d'horreur en 3D développé avec le moteur de jeu Unreal Engine 4. Mécaniques de base et interactions avec l'environnement implémentées.",
    link: "https://drive.google.com/file/d/1N7xE_k6AQu7aGOEWx7CNY6airpYlPMW-/view?usp=drive_link",
      tags: [
      {
        name: "c++",
        color: "dark-blue-tag",
      },
      {
        name: "unreal-engine-4",
        color: "purple-tag",
      },
      {
        name: "blueprint",
        color: "blue-tag",
      },
    ],
    image: Assets.horrorgame,
    source_code_link: "https://github.com/Antwannnn/TheForgottenWords_SourceCode/tree/main",
  },
];

export { navLinks, skills, projects, curriculum };

