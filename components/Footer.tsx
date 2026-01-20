import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-500 py-10 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 text-sm">
          &copy; {new Date().getFullYear()} GPS Empresarial. Todos os direitos reservados.
        </p>
        <p className="text-xs max-w-2xl mx-auto opacity-70">
          "Os resultados podem variar de pessoa para pessoa e dependem da dedicação de cada empresário em aplicar os métodos ensinados."
        </p>
      </div>
    </footer>
  );
};