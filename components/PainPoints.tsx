import React from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { PAIN_POINTS } from '../constants';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-red-100 text-red-800 px-4 py-1.5 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">
            <AlertTriangle size={16} /> Identificação do Problema
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            EU SEI EXATAMENTE COMO É A SUA VIDA HOJE:
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto">
            Você começa o trabalho cedo, trabalha igual um condenado o dia todo, mas parece que o dinheiro nunca para na sua mão?
          </p>
        </div>

        {/* Grid Layout 2x2 for Pain Points */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {PAIN_POINTS.map((point, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-start p-8 bg-white rounded-2xl border-2 border-red-50 shadow-lg hover:shadow-red-200/50 hover:border-red-200 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Visual Pain Indicator - Red strip on the left */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-600 to-red-400 rounded-l-xl"></div>

              <div className="mb-6 bg-red-50 p-4 rounded-full group-hover:bg-red-100 transition-colors border border-red-100">
                <X className="w-8 h-8 text-red-600" strokeWidth={3} />
              </div>

              <p className="text-xl text-slate-800 font-bold leading-tight">
                {point}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden border-t-4 border-red-600">
          {/* Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-slate-950"></div>

          <div className="relative z-10">
            <p className="text-lg md:text-2xl font-medium leading-relaxed mb-8">
              A culpa não é sua. Você é bom no que faz (no seu serviço ou produto), mas ninguém nunca te ensinou a ser DONO DE NEGÓCIO.
            </p>
            <p className="text-lg md:text-xl text-slate-300">
              Você está tentando dirigir um carro no escuro. <br />
              <span className="text-red-400 font-bold text-2xl mt-2 block">E é por isso que você bate a cabeça todo dia.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};