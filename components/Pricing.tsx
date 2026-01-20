import React from 'react';
import { Button } from './Button';
import { Lock, ShieldCheck, AlertTriangle } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">
          "LUCIANO, EU TÔ SEM DINHEIRO. ISSO É PRA MIM?"
        </h2>
        
        <div className="bg-red-900/30 border border-red-500/50 p-6 rounded-xl mb-12 text-left">
            <div className="flex items-start gap-4">
                <AlertTriangle className="text-red-500 w-8 h-8 flex-shrink-0" />
                <p className="text-white text-lg font-medium">
                  É exatamente por estar sem dinheiro que você precisa entrar agora. Se você continuar fazendo as mesmas coisas, mês que vem você vai estar com menos dinheiro ainda.
                </p>
            </div>
        </div>

        <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">
          Quanto custa uma decisão errada que você toma? Quanto custa o juro do cheque especial? <br/><strong className="text-white">Com certeza custa muito mais que R$ 5,00 por dia.</strong>
        </p>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-green-500 relative transform hover:scale-[1.01] transition-transform duration-300">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg w-max animate-pulse">
            🚨 Poucas Vagas Restantes
          </div>

          <div className="mt-8 mb-8">
             <p className="text-slate-600 text-lg font-medium mb-4">Eu cobro R$ 5.000,00 para atender empresas grandes. Mas eu quero ajudar o pequeno a crescer.</p>
             <p className="text-slate-600 text-lg font-medium">Por isso, para ter a minha orientação por 6 MESES, você vai investir apenas:</p>
            
            <div className="flex flex-col items-center mt-6">
              <div className="text-5xl md:text-7xl font-black text-slate-900 my-2 tracking-tighter">
                12x R$ 147,90
              </div>
              <span className="text-slate-500 text-xl font-medium">(Ou R$ 1.479,00 à vista)</span>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg mb-8 text-yellow-800 border border-yellow-200 font-bold text-lg">
            <p>(Isso dá menos que um salgado e um refrigerante por dia)</p>
          </div>

          <div className="mb-8">
            <Button 
              fullWidth 
              pulse 
              variant="success"
              className="text-2xl shadow-green-500/50"
              href="https://pay.kiwify.com.br/qTLT0Bx"
            >
              🟢 QUERO A AJUDA DO LUCIANO AGORA
            </Button>
            <div className="flex justify-center items-center text-slate-500 text-sm gap-2 mt-3">
             <Lock size={14} />
             <span>Compra 100% Segura e Garantida</span>
          </div>
          </div>

          <div className="border-t border-slate-100 pt-6 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-2">
                 <ShieldCheck size={32} className="text-green-600" />
                 <h4 className="font-black text-slate-900 text-xl">RISCO ZERO</h4>
            </div>
            <p className="text-slate-600 font-medium">Se você achar que não é pra você, eu devolvo seu dinheiro. O único risco é continuar como você está.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};