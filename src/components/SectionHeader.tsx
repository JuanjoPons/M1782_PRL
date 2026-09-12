import React from 'react';

interface SectionHeaderProps {
  number: string | number;
  title: string;
  subtitle: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title, subtitle }) => {
  return (
    <div className="flex items-start sm:items-center gap-3.5 pb-4 mb-6 border-b border-slate-200/80">
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-teal-800 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
        {number}
      </div>
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
          {title}
        </h2>
        <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
