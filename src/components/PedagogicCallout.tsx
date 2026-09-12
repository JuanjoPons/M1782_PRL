import React from 'react';
import { Lightbulb, BookOpenCheck } from 'lucide-react';

interface PedagogicCalloutProps {
  type: 'idea' | 'caso';
  title?: string;
  children: React.ReactNode;
}

export const PedagogicCallout: React.FC<PedagogicCalloutProps> = ({ type, title, children }) => {
  const isIdea = type === 'idea';

  return (
    <div
      className={`my-5 rounded-xl border p-4 sm:p-5 flex items-start gap-3.5 transition-all ${
        isIdea
          ? 'bg-amber-50/70 border-amber-200/80 text-amber-950'
          : 'bg-teal-50/60 border-teal-200/80 text-teal-950'
      }`}
    >
      <div
        className={`p-2 rounded-lg shrink-0 ${
          isIdea ? 'bg-amber-100 text-amber-700' : 'bg-teal-100 text-teal-700'
        }`}
      >
        {isIdea ? <Lightbulb className="w-5 h-5" /> : <BookOpenCheck className="w-5 h-5" />}
      </div>
      <div className="flex-1 text-sm leading-relaxed">
        <h4
          className={`font-bold tracking-tight text-xs uppercase mb-1.5 ${
            isIdea ? 'text-amber-800' : 'text-teal-800'
          }`}
        >
          {title || (isIdea ? 'Idea clave' : 'Caso práctico')}
        </h4>
        <div className="space-y-1.5 text-slate-700 font-normal">{children}</div>
      </div>
    </div>
  );
};
