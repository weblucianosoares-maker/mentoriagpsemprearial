import React from 'react';

export const Mentor: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gold-500 rounded-lg transform translate-x-4 translate-y-4"></div>
              {/* Using a professional business portrait from Unsplash */}
              <img
                src="/assets/luciano_mentor.png"
                alt="Luciano Soares - Mentor"
                className="relative z-10 rounded-lg shadow-xl w-full grayscale hover:grayscale-0 transition duration-500 object-cover h-[500px]"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              MENTORADO POR QUEM VIVE O <span className="text-gold-600">CAMPO DE BATALHA</span>
            </h2>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Luciano Soares</h3>

            <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
              <p>
                Com 22 anos de experiência como consultor de empresas e empresário, Luciano já viu empresas quebram e empresas escalarem. Ele conhece na pele o peso dos impostos, a dificuldade com funcionários e a solidão da liderança no Brasil.
              </p>
              <p>
                Diferente de "gurus" de internet que nunca tiveram um CNPJ real, Luciano orienta com base em vivência prática.
              </p>
              <p className="font-semibold text-navy-900">
                Ele vai te ajudar a encurtar o caminho entre onde você está e o negócio milionário que você deseja formatar.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};