
import { LanguageProvider } from "./context/languageContext"; // Somente o LanguageProvider aqui
import { Header } from "@/components/header/page";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matheus Patricio",
  description:
    "Desenvolvedor de software apaixonado por criar soluções inovadoras. Especializado em React, Node.js e tecnologias modernas de desenvolvimento web. Explore meus projetos e habilidades técnicas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <html >
      <body className={inter.className}>
        <LanguageProvider>
          <main>
            <Header />
            {children}
          </main>
        </LanguageProvider>
      </body>
  </html>
  );
}
