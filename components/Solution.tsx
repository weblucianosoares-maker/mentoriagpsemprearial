import React from 'react';
import { MessageCircle, Shield, HandMetal, HeartHandshake } from 'lucide-react';
import { PILLARS } from '../constants';

// Updating icons to match the new "human" tone
const iconMap: any = {
  Users: MessageCircle, // WhatsApp/Talking
  Map: HandMetal, // "Stop" / Direct direction
  Shield: Shield, // Security
  Banknote: HeartHandshake, // Partnership/Profit
};

export const Solution: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100 text-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">
            VOCÊ PRECISA DE UM <span className="text-blue-900">GUIA</span>,<br /> NÃO DE UM PROFESSOR.
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Eu criei o GPS EMPRESARIAL para o empresário que não tem tempo a perder. Eu não vou te dar "aulas teóricas". <strong className="text-blue-900">Eu vou te dar SEGURANÇA.</strong>
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-200 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Imagine ter meu WhatsApp e encontros comigo a cada 15 dias:</h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="chat-bubble bg-green-100 p-4 rounded-lg rounded-tl-none border border-green-200 self-start w-fit">
              <p className="text-green-900 font-medium">"Luciano, não sei o que fazer com essa dívida. Me ajuda?"</p>
            </div>
            <div className="chat-bubble bg-green-100 p-4 rounded-lg rounded-tl-none border border-green-200 self-start w-fit">
              <p className="text-green-900 font-medium">"Luciano, preciso vender mais essa semana pra pagar o aluguel. Qual o plano?"</p>
            </div>
            <div className="chat-bubble bg-blue-100 p-4 rounded-lg rounded-tr-none border border-blue-200 ml-auto w-fit text-right">
              <p className="text-blue-900 font-bold">"Faz assim, assim e assado. Vai dar certo."</p>
            </div>
          </div>
          <p className="text-center mt-8 text-xl font-bold text-slate-800">
            É ter alguém experiente segurando na sua mão e te mostrando onde pisar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.iconName] || Shield;
            return (
              <div key={index} className="bg-white border border-slate-200 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 group">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-8 h-8 text-blue-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 uppercase">{pillar.title}</h3>
                <p className="text-slate-600 font-medium">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};