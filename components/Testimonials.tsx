import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            QUEM ENTROU, <span className="text-gold-500">TRANSFORMOU.</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Veja o que os empresários do GPS estão dizendo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div key={index} className="bg-navy-950 p-8 rounded-xl border border-slate-800 relative hover:border-gold-500/30 transition-colors">
              <Quote className="absolute top-6 right-6 text-gold-600 opacity-20 w-10 h-10" />

              <p className="text-slate-300 mb-6 relative z-10 italic leading-relaxed">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center font-bold text-navy-900 text-lg">
                  {item.avatarInitials}
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <span className="text-xs text-gold-500 uppercase tracking-wide">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};