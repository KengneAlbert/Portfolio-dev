import express from "../../public/assets/express.png";
import murcas_ui from "../../public/assets/murcas_ui.png";
import email_manager from "../../public/assets/email_manager.png";
import ndjoka_ui from "../../public/assets/ndjoka_ui.png";
import synapse from "../../public/assets/synapse.png";
import tontine_africaine from "../../public/assets/tontine_africaine.png";
import Startup_academy from "../../public/assets/Startup academy.png";
import Centre_albert_einstein from "../../public/assets/Centre albert einstein.png";


export const personalInfo = {
  name: "Albert Kengne",
  title: "Front End Developer",
  email: "albertkengne2000@gmail.com",
  phone: "+237 659 070 872",
  location: "Bayangam, Cameroun",
  github: "https://github.com/KengneAlbert",
  linkedin: "https://linkedin.com",
};

export const skills = [
  { name: "React", level: 70 },
  { name: "TypeScript", level: 75 },
  { name: "JavaScript", level: 90 },
  { name: "HTML/CSS", level: 90 },
  { name: "Tailwind CSS", level: 70 },
  { name: "Redux", level: 60 },
  { name: "Next.js", level: 25 },
  { name: "UI/UX Design", level: 30 },
];

export const projects = [
  {
    title: "Voyages Express",
    description:
      "Plateforme de réservation de billets de bus en ligne, avec une interface moderne et intuitive. Application en cours de développement.",
    image: express,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://voyageexpres.onrender.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Email Manager",
    description:
      "Interface de gestion des emails de masse développée que j'ai proposé à Stéphanie Mbida de 'Parlons de Business', permettant une gestion efficace des campagnes email.",
    image: email_manager,
    tags: ["React", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://email-manager.onrender.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Ndjoka",
    description:
      "Site vitrine moderne que j'ai proposé à l'entreprise Ndjoka du Dr Claudel Noubissié, présentant leurs services et expertise.",
    image: ndjoka_ui,
    tags: ["React", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://ndjoka.onrender.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Synapse Tech",
    description:
      "Site web professionnel développé pour une startup technologique, mettant en avant leurs services et solutions.",
    image: synapse,
    tags: ["React", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://synapse-tech.onrender.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Tontine Africaine",
    description:
      "Plateforme de gestion de tontines proposée à Mme Stéphanie Mbida, adaptée aux besoins spécifiques du marché africain.",
    image: tontine_africaine,
    tags: ["React", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://tontine-africaine.onrender.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "Startup Academy",
    description:
      "Site web moderne pour Startup Academy du Dr Claudel Noubissie, focalisé sur la formation entrepreneuriale.",
    image:Startup_academy,
    tags: ["React", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://startup-academy.onrender.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "Centre Albert Einstein",
    description:
      "Site web moderne développé pour une startup éducative, mettant en avant leurs services de formation et d'accompagnement.",
    image: Centre_albert_einstein,
    tags: ["React", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://centrealberteinstein.onrender.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "MURCAS",
    description:
      "Proposition de refonte des interfaces pour la MURCAS, modernisant l'expérience utilisateur tout en préservant la fonctionnalité.",
    image: murcas_ui,
    tags: ["React", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://murcas.onrender.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];
