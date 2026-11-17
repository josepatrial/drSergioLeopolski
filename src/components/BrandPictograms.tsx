import React from 'react';

interface BrandPictogramsProps {
  className?: string;
  showText?: boolean;
}

export const BrandPictograms: React.FC<BrandPictogramsProps> = ({
  className = 'h-10',
  showText = true
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 6-Icon Grid from Official Identity */}
      <img
        src="/images/icone-marca-6grid.png"
        alt="Símbolo oficial Dr. Sergio Leopolski — Ortopedia, Medicina Esportiva e Cirurgia da Mão"
        className="h-10 sm:h-12 w-auto object-contain rounded-lg shadow-sm"
      />

      {showText && (
        <div className="flex flex-col justify-center">
          <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-navy-950 uppercase leading-none">
            Dr. Sergio Leopolski
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald-700 mt-1">
            Ortopedia, Med. Esportiva e Cirurgia da Mão
          </span>
        </div>
      )}
    </div>
  );
};

