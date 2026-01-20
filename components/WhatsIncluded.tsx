import React from 'react';
import { TrendingUp, Users, ShieldCheck, FileText, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const WhatsIncluded: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-black text-center text-navy-900 mb-16 uppercase">
          O QUE ESTÁ INCLUSO NO SEU GPS?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-black text-navy-900 mb-2 uppercase">1. ENCONTROS QUINZENAIS AO VIVO</h3>
            <span className="text-slate-500 font-medium text-sm mb-4">(Duração de 6 Meses)</span>
            <p className="text-slate-600 leading-relaxed">
              Nossas reuniões de conselho. Eu trago um tema rápido (Vendas, Finanças ou Rotina) e depois abro para tirar dúvidas. É aqui que destravamos o seu negócio.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Users className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-black text-navy-900 mb-6 uppercase">2. GRUPO DE NETWORKING</h3>
            <p className="text-slate-600 leading-relaxed">
              Você vai estar num ambiente com outros empresários que também querem crescer. Onde tem gente crescendo, você cresce junto.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-white border-2 border-gold-400 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-10 h-10 text-gold-500" />
            </div>
            <h3 className="text-xl font-black text-navy-900 mb-2 uppercase">3. MINHAS FERRAMENTAS PESSOAIS</h3>
            <span className="text-slate-500 font-medium text-sm mb-6">Consultorias de R$ 5.000</span>
            
            <ul className="space-y-3 text-left w-full pl-4">
              <li className="flex items-center text-slate-700">
                <FileText className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm font-medium">Fluxo de Caixa Simples</span>
              </li>
              <li className="flex items-center text-slate-700">
                <FileText className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm font-medium">Roteiro de Vendas Imediatas</span>
              </li>
              <li className="flex items-center text-slate-700">
                <FileText className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm font-medium">Checklist do Dono</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="success" className="px-12 py-5 text-lg" href="#pricing">
            <div className="flex items-center gap-2">
              QUERO RECEBER ESSAS FERRAMENTAS <ArrowRight size={24} />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};