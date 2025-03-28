'use client'
import { motion } from "framer-motion";
import Image from 'next/image'
import logoNext from "../../../../public/icons-nextjs.svg"
import logoNode from "../../../../public/logos--nodejs-icon-alt.svg";
import logoJS from "../../../../public/logos--js.svg";



const ProjectsData = [
  {
    id: 1,
    name: "NeoOrbit E-commerce ",
    description: "NeoOrbit E-commerce is a project developed in HTML, CSS and Javascript as a integrative project for the course of Introduction of Programing focus on Front-end. NeoOrbit is a fictitious company that sells satellite service plans and sells satellite models to other companies. ",
    link: "https://github.com/Matheus-Patricio-dev/Doc-projetoPI",
    image: logoJS.src,
  },
  {
    id: 2,
    name: "NeoOrbit API",
    description: "NeoOrbit is a project that is being developed in NodeJS Express with Postgrees. It is a REST API that will store the data from the satellites and service plans that NeoOrbit offers. ",
    link: "https://github.com/Matheus-Patricio-dev/NeoOrbitAPI",
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
              </a>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}
