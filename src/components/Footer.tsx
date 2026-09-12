import React from 'react';
import { ShieldCheck, Mail, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-sm mb-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Módulo 1782 · Prevención de Riesgos Laborales</span>
          </div>
          <p className="text-slate-400 max-w-xl">
            Módulo profesional: Grados A, B y C (Sistema Formación Profesional). Contenido educativo adaptado a la Ley 31/1995 de Prevención de Riesgos Laborales, el RD 485/1997 y la norma internacional UNE-EN ISO 7010.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <a
            href="mailto:jpons@centredelamar.com"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-teal-400" />
            <span>jpons@centredelamar.com</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-slate-800/80 text-center text-slate-500 text-[11px]">
        Material docente interactivo con evaluación autocorregible · Diseño responsivo optimizado para formación profesional.
      </div>
    </footer>
  );
};
