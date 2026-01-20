import React from 'react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = "5521972070247";
  const message = encodeURIComponent("QUERO SABER MAIS SOBRE A MENTORIA GPS EMPRESARIAL");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer"
      // Increased bottom spacing (bottom-24) to sit above the sticky footer bar
      className="fixed bottom-28 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* WhatsApp SVG Logo */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="white" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382C17.119 14.205 15.396 13.36 15.078 13.254C14.76 13.149 14.53 13.096 14.3 13.449C14.07 13.802 13.416 14.562 13.222 14.792C13.028 15.022 12.834 15.058 12.481 14.882C12.128 14.706 10.991 14.335 9.643 13.136C8.597 12.205 7.891 11.056 7.679 10.686C7.467 10.316 7.657 10.12 7.834 9.944C7.993 9.786 8.188 9.539 8.365 9.327C8.542 9.115 8.612 8.956 8.718 8.744C8.824 8.532 8.771 8.338 8.7 8.197C8.629 8.056 8.046 6.626 7.8 6.044C7.569 5.486 7.336 5.564 7.16 5.564C6.997 5.564 6.802 5.553 6.608 5.553C6.414 5.553 6.1 5.624 5.835 5.906C5.57 6.188 4.811 6.894 4.811 8.341C4.811 9.788 5.87 11.182 6.029 11.394C6.188 11.606 8.129 14.711 11.186 15.928C14.243 17.145 14.243 16.745 14.773 16.692C15.303 16.639 16.486 16.004 16.733 15.316C16.98 14.628 16.98 14.045 16.909 13.922C16.839 13.799 16.644 13.729 16.291 13.553H17.472V14.382ZM12.005 2C6.48 2 2 6.48 2 12C2 13.809 2.484 15.494 3.344 16.97L2.005 22L7.15 20.641C8.566 21.411 10.211 21.859 11.979 21.859H12.005C17.53 21.859 22.01 17.379 22.01 11.854C22.01 6.329 17.53 1.849 12.005 1.849V2Z" />
      </svg>
      <span className="absolute right-full mr-4 bg-white text-slate-800 py-2 px-4 rounded-lg shadow-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Dúvidas? Fale com a equipe
      </span>
    </a>
  );
};