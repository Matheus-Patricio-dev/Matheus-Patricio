'use client'
import Cases from "./_components/cases";
import { useLanguage } from "../../app/context/languageContext"; // useLanguage agora é chamado aqui

export default function Page() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center justify-between w-full flex-col pb-8 px-8">
      <div className="w-full max-w-3xl">
        <div className="flex items-center gap-3">
          <h1 className="font-medium text-gray-900 text-lg">Projects</h1>
          <button
            onClick={toggleLanguage}
            className="px-2 py-0.5 rounded-md border border-gray-300 
              bg-gray-900 text-white text-sm font-medium
              transition-all duration-300 ease-in-out
              hover:bg-white hover:text-gray-900 hover:shadow-sm
              focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            {language === "pt" ? "PT" : "EN"}
          </button>
        </div> 
        <Cases />
      </div>
    </div>
  );
}
