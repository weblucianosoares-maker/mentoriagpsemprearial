import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Button } from './Button';

export const WhoIsThisFor: React.FC = () => {
  const forYou = [
    { 
      title: 'É o "Faz-Tudo"', 
      desc: 'Você é o primeiro a chegar e o último a sair. Se você ficar doente por 3 dias, a empresa para e o dinheiro não entra.' 
    },
    { 
      title: 'Tem um bom produto, mas não vê a cor do dinheiro', 
      desc: 'Você sabe que seu serviço/produto é bom, os clientes gostam, mas no final do mês a conta não fecha.' 
    },
    { 
      title: 'Sente solidão na liderança', 
      desc: 'Você tem dúvidas cruciais sobre o negócio, mas não tem ninguém experiente para perguntar. Você decide no "chute".' 
    },
    { 
      title: 'Mistura as contas', 
      desc: 'Você paga a conta de luz de casa com o dinheiro do caixa da empresa (ou vice-versa) e nunca sabe qual é o seu lucro real.' 
    },
    { 
      title: 'Está cansado de teoria', 
      desc: 'Você já tentou ver vídeos no YouTube ou cursos longos, mas se sentiu mais confuso ainda. Você quer prática.' 
    },
  ];

  const notForYou = [
    { 
      title: 'Está procurando uma "fórmula mágica"', 
      desc: 'para ficar rico sem trabalhar.' 
    },
    { 
      title: 'Acha que já sabe de tudo', 
      desc: 'e não tem humildade para ouvir e aplicar correções.' 
    },
    { 
      title: 'Já tem uma empresa grande', 
      desc: 'com diretoria formada e processos rodando 100% (para você, eu tenho a Consultoria Individual).' 
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-black text-center text-navy-900 mb-16 uppercase">
          ESTA MENTORIA <span className="text-gold-600">É PARA VOCÊ?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* YES Column */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-500 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
                <CheckCircle2 size={120} />
             </div>
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3 relative z-10">
              <span className="bg-green-100 text-green-700 p-2 rounded-full"><CheckCircle2 size={24} strokeWidth={3} /></span>
              O GPS É PARA VOCÊ QUE:
            </h3>
            <ul className="space-y-6 relative z-10">
              {forYou.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 bg-green-50 rounded-full p-1">
                    <CheckCircle2 className="text-green-600" size={20} />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-lg mb-1 leading-tight">{item.title}:</strong>
                    <span className="text-slate-600 font-medium">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* NO Column */}
          <div className="bg-slate-100 p-8 rounded-2xl border-t-4 border-red-500 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
                <XCircle size={120} />
             </div>
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3 relative z-10">
              <span className="bg-red-100 text-red-700 p-2 rounded-full"><XCircle size={24} strokeWidth={3} /></span>
              O GPS <span className="text-red-600 underline decoration-4 decoration-red-200">NÃO</span> É PARA VOCÊ QUE:
            </h3>
            <ul className="space-y-6 relative z-10">
              {notForYou.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                   <div className="mt-1 flex-shrink-0 bg-red-100 rounded-full p-1">
                    <XCircle className="text-red-600" size={20} />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-lg mb-1 leading-tight">{item.title}</strong>
                    <span className="text-slate-600 font-medium">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <Button 
            variant="success" 
            fullWidth 
            className="md:w-auto md:px-12 py-5 text-lg shadow-green-900/20"
            subtext="(O GPS é exatamente o que eu preciso)"
          >
            👉 EU ME IDENTIFICO E QUERO ENTRAR
          </Button>
        </div>
      </div>
    </section>
  );
};