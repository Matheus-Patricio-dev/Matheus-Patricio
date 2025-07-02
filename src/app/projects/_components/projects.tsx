'use client'
import { motion } from "framer-motion";
import Image from 'next/image'
import logoNode from "../../../../public/logos--nodejs-icon-alt.svg";
import logoReact from "../../../../public/devicon--react.svg";
import logoBasketMap from '../../../../public/project-images/logoBasqueteColorido.svg'
import logoNeoOrbit from '../../../../public/project-images/logoNeoorbit.png'





const ProjectsData = [
  // {
  //   id: 1,
  //   name: "Payform",
  //   description: "BasketMap is a collaborative platform for mapping basketball courts, where anyone can register locations, game days, and other relevant info. It was created to solve a common problem among amateur players: the difficulty of finding available courts nearby. Our mission is to strengthen the basketball community by promoting connection, inclusion, and new friendships on and off the court.",
  //   link: "https://basketmap.vercel.app/",
  //   stacks: ['React','Zod','React-Hook-Form','Node','Supabase', 'Typescript', 'TailwindCss'],
  //   image: logoReact.src,
  // },
  {
    id: 2,
    name: "BasketMap",
    description: "BasketMap is a collaborative platform for mapping basketball courts, where anyone can register locations, game days, and other relevant info. It was created to solve a common problem among amateur players: the difficulty of finding available courts nearby. Our mission is to strengthen the basketball community by promoting connection, inclusion, and new friendships on and off the court.",
    link: "https://basketmap.vercel.app/",
    stacks: ['React','Zod','React-Hook-Form','Node','Supabase', 'Typescript', 'TailwindCss', 'Vite'],
    image: logoReact.src,
  },
  {
    id: 3,
    name: "NeoOrbit E-commerce ",
    description: "NeoOrbit E-commerce is a project developed in HTML, CSS, Javascript, React, Vite and TailwindCss as a integrative project for the course of Introduction of Programing focus on Front-end. NeoOrbit is a fictitious company that sells satellite service plans and sells satellite models to other companies. ",
    link: "https://neo-orbit.vercel.app/",
    stacks: ['HTML','CSS','Javascript','Figma','Axios', 'Vite'],
    image: logoReact.src,
  },
  {
    id: 4,
    name: "NeoOrbit API",
    description: "NeoOrbit is a project that is being developed in NodeJS Express with Postgrees. It is a REST API that will store the data from the satellites and service plans that NeoOrbit offers. ",
    link: "https://github.com/Matheus-Patricio-dev/NeoOrbitAPI",
    stacks: ['Typescript','Node.Js', 'Supabase'],
    image: logoNode.src,
  },
];


export default function Projects() {
  return (
    <div>
      <div className="grid w-full grid-cols-2 gap-x-10 md:grid-cols-3">
        {ProjectsData.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: 'spring',
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5 text-left"
            >
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                <Image
                  src={project.image}
                  width={30}
                  height={30}
                  className="mb-3 rounded-lg border-gray-400 dark:border"
                  alt={project.name}
                />
                <div className="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {project.name}
                </div>
                <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-500">
                  {project.description}
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                    {project.stacks.map((stack, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs px-3 py-1 rounded-full shadow-md transition-all duration-200 hover:bg-indigo-500 hover:text-white">
                        {stack}
                      </span>
                    ))}
                  </div>
              </a>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}
