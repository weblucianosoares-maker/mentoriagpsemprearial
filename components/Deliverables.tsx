import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { DELIVERABLES } from '../constants';

export const Deliverables: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-16 uppercase">
          O QUE VAI ACONTECER COM SUA EMPRESA
        </h2>

        <div className="space-y-8">
          {DELIVERABLES.map((item, index) => {
            return (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xl text-slate-600 font-medium">{item.description}</p>
                </div>
              </div>
            );
          })}

          <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="flex-shrink-0">
              <CheckCircle2 className="w-12 h-12 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Você não está mais sozinho</h3>
              <p className="text-xl text-slate-600 font-medium">Acabou o desespero de tomar decisão difícil sozinho. Agora você tem um conselheiro.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};