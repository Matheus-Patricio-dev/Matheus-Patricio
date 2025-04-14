'use client'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image'
import devtoLogo from '../../../../public/svg-icon.svg'

type Article = {
    id: number;
    title: string;
    description: string;
    url: string;
    published_at: string;
};
  

const DevArticles: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
  
    useEffect(() => {
      const fetchArticles = async () => {
        try {
          const username = 'matheuspatriciodev'; // Substitua aqui
          const response = await axios.get(`https://dev.to/api/articles?username=${username}`);
          setArticles(response.data);
        } catch (error) {
          console.error('Erro ao buscar artigos:', error);
        }
      };
  
      fetchArticles();
    }, []);
  
    return (
      <div>
         <div className="grid w-full grid-cols-2 gap-x-10 md:grid-cols-3">
        {articles.map((articles) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: 'spring',
                bounce: 0.7,
              }}
              key={articles.id}
              className="mt-5 text-left"
            >
                
              <a target="_blank" rel="noopener noreferrer" href={articles.url}>
                <Image
                  src={devtoLogo}
                  width={30}
                  height={30}
                  className="mb-3 rounded-lg border-gray-400 dark:border"
                  alt={articles.title}
                    />                 
                <h2 className="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {articles.title}
                </h2>
                <h3 className="max-w-[250px] text-sm font-normal text-gray-700 dark:text-gray-500">
                    {articles.published_at}
                </h3>
                <p className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-500">
                    {articles.description}
                </p>
              </a>
            </motion.div>
          )
        })}
      </div>
      </div>
    );
  };

export default DevArticles