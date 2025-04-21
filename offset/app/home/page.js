"use client";

import { useEffect, useState } from "react";
import Button from "../components/button";
import Mira from "../components/mira";
import Navbar from "../components/navbar";

export default function Home() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 5); // tweak the threshold as needed
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

    return (
      <div className="px-12 py-8">
        
      
        <div className="sticky flex top-0 z-50">
          

          <div
            className={`dark:invert transition-all duration-[800ms] ease-in-out ${
              scrolled ? 'w-48 h-48 pt-8' : 'w-150 pb-6 pt-50'
            }`}
          >
            <img
              src="/avegrafica.svg"
              alt="Logo"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="fixed top-8 right-12">
            <Navbar logo={false}/>
          </div>
          
        </div>

      <div className="pt-0">
        <div className="w-150 text-justify font-[400] text-xl pb-800">
          Nascida em 1997, a Avegráfica tem como principal missão responder com prontidão e com um serviço de qualidade aos seus clientes. Com uma equipa jovem e dinâmica, encaramos cada trabalho como um novo desafio sempre com o máximo empenho para garantir a satisfação do cliente e a melhor qualidade do produto.
        </div>
      </div>
        
      <Mira />
      </div>
    )
  }