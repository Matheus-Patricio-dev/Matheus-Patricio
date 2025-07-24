
'use client'
import { motion } from "framer-motion";
import Image from 'next/image'
import logoReact from "../../../../public/devicon--react.svg";
import logoJavaScript from "../../../../public/logos--js.svg";
import logoNext from "../../../../public/icons-nextjs.svg";
import logoType from "../../../../public/logos--typescript-icon.svg";
import logoNode from "../../../../public/logos--nodejs-icon-alt.svg";
import logoExpress from "../../../../public/icons--expressjs.svg";
import logoCypress from "../../../../public/devicon-plain--cypressio.svg";
import logoZod from "../../../../public/zod.svg";
import logoAxios from "../../../../public/axios.svg";
import logoElementor from '../../../../public/elementor svg.svg'


const skills = [
  {
    id: 1,
    name: "JavaScript",
    image: logoJavaScript.src,
  },
  {
    id: 2,
    name: "React",
    image: logoReact.src,
  },
  {
    id: 3,
    name: "Next.js",
    image: logoNext.src,
  },
  {
    id: 4,
    name: "Typescript",
    image: logoType.src,
  },
  {
    id: 5,
    name: "Node.js",
    image: logoNode.src,
  },
  {
    id: 6,
    name: "Express.js",
    image: logoExpress.src,
  },
  {
    id: 7,
    name: "Cypress",
    image: logoCypress.src,
  },
  {
    id: 8,
    name: "Axios",
    image: logoAxios.src,
  },
  {
    id: 9,
    name: "Zod",
    image: logoZod.src,
  },
  {
    id: 10,
    name: "Elementor",
    image: logoElementor.src,
  },
];


export default function Skills() {
  return (
    <div>
      <div className="grid w-full grid-cols-2 gap-x-10 md:grid-cols-3">
        {skills.map((project) => {
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
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}
