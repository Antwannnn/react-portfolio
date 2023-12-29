import * as Assets from '../assets/assets'

const navLinks = [
    {
        id: "home",
        name: "Accueil",
        url: "/",
    },
    {
        id: "about",
        name: "A propos",
        url: "/about",
    },
    {
        id: "projects",
        name: "Projets",
        url: "/projects",
    },

    {
        id: "skills",
        name: "Compétences",
        url: "/skills",
    },

    {
        id: "experiences",
        name: "Experiences",
        url: "/experiences",
    },

    {
        id: "contact",
        name: "Contact",
        url: "/contact",
    },
]

const skills = [

    {
        name: "HTML 5",
        level: 80,
        icon: Assets.html,
      },
      {
        name: "Tailwind CSS",
        level: 60,
        icon: Assets.tailwind,
      },
      {
        name: "JavaScript",
        level: 60,
        icon: Assets.javascript,
      },
      {
        name: "PHP",
        level: 50,
        icon: Assets.php,
      },
      {
        name: "Java",
        level: 80,
        icon: Assets.java,
      },
      {
        name: "Python",
        level: 30,
        icon: Assets.python,
      },
      {
        name: "C",
        level: 40,
        icon: Assets.c,
      },
      {
        name: "React",
        level: 60,
        icon: Assets.reactjs,
      },
      {
        name: "Node JS",
        level: 50,
        icon: Assets.nodejs,
      },
      {
        name: "Typescript",
        level: 60,
        icon: Assets.typescript,
      },
      {
        name: "git",
        level: 60,
        icon: Assets.git,
      },
      {
        name: "Jetbrains",
        level: 30,
        icon: Assets.jetbrains,
      },
      {
        name: "Unreal Engine",
        level: 40,
        icon: Assets.ue,
      },
      {
        name: "Oracle",
        level: 20,
        icon: Assets.oracle
      }
]

const projects = [
    {
      name: "Jeu Memory",
      description:
        "Application JavaFX qui permet de jouer au jeu Memory. Le jeu est composé de 16 cartes qui sont retournées face cachée. Le but du jeu est de retrouver les paires de cartes identiques en un minimum de coups.",
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
      tags: [
        {
          name: "c++",
          color: "blue-tag",
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

export { navLinks, skills, projects };

