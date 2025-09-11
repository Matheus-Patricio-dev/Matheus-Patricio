"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../../context/languageContext";

// Importa os JSONs
import projectsEN from "@/messages/en.json";
import projectsPT from "@/messages/pt.json";

export default function Projects() {
  const { language } = useLanguage();
  const projects = language === "pt" ? projectsPT.projectsPT : projectsEN.projectsEN;

  return (
    <div>
      <div className="grid w-full grid-cols-2 gap-x-10 md:grid-cols-3">
        {projects.map((project) => {
          return (
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", bounce: 0.7 }}
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
                  {project.stacks.map((stack: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs px-3 py-1 rounded-full shadow-md transition-all duration-200 hover:bg-indigo-500 hover:text-white"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
