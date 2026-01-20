import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">
          DÚVIDAS FREQUENTES
        </h2>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-lg text-navy-900">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-gold-600" />
                ) : (
                  <ChevronDown className="text-slate-400" />
                )}
              </button>

              <div
                className={`bg-white text-slate-600 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100 p-6 border-t border-slate-100' : 'max-h-0 opacity-0'
                  }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};