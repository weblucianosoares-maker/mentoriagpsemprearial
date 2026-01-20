import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-red-950 via-red-950 to-black text-white overflow-hidden py-12 md:py-0">
      {/* Background decoration - subtle noise/texture could be added via CSS but keeping clean for now */}

      <div className="container mx-auto px-4 z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">

          {/* Left Column: Copy */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase tracking-tight">
              VOCÊ NÃO PRECISA DE MAIS UM CURSO. <br />
              <span className="text-red-500">VOCÊ PRECISA DE ALGUÉM PARA SEGURAR NA SUA MÃO.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
              Chega de gastar dinheiro com aulas difíceis que você não consegue aplicar. Eu sou o Luciano, tenho 22 anos de experiência, e vou te ajudar a <span className="bg-red-900/50 px-1 border-b-2 border-red-500">sair do sufoco, pagar as contas em dia</span> e fazer sua pequena empresa dar lucro de verdade.
            </p>

            <div className="flex justify-center md:justify-start">
              <Button variant="success" pulse subtext="Menos de R$ 5,00 por dia">
                🟢 QUERO A AJUDA DO LUCIANO AGORA
              </Button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full md:w-2/5 relative mt-12 md:mt-0 hidden md:block">
            <div className="relative rounded-2xl overflow-hidden border-4 border-red-900/30 shadow-2xl bg-black">
              {/* Image representing Guidance/Mentorship */}
              <img
                src="/assets/hero_luciano_meeting_v2.png"
                alt="Luciano mentorando empreendedores"
                className="w-full h-auto object-cover opacity-100 hover:opacity-100 transition duration-500"
              />

              {/* Overlay Card */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6 pt-12 text-center">
                <p className="text-white font-bold text-xl leading-tight">"Eu vou te mostrar onde pisar para não afundar."</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};