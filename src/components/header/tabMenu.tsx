"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const tabsConfig = [
  {
    text: "About",
    link: "/",
  },
  {
    text: "Projects",
    link: "/projects",
  },
  {
    text: "Skills",
    link: "/skills",
  },
  {
    text: "Articles",
    link: "/articles"
  }
];

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
}

const Tab = ({ text, selected, setSelected }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
      } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-primary"
        ></motion.span>
      )}
    </button>
  );
};

const ButtonShapeTabs = () => {
  const [selected, setSelected] = useState<string>(tabsConfig[0].text);
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2">
      {tabsConfig.map((tab, index) => (
        <Link key={index} href={tab.link}>
          <Tab
            text={tab.text}
            selected={selected === tab.text}
            setSelected={setSelected}
          />
        </Link>
      ))}
    </div>
  );
};

export default ButtonShapeTabs;
