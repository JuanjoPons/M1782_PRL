import React, { useState, useEffect } from 'react';
import { ShieldCheck, BookOpen, ChevronRight, Award } from 'lucide-react';

interface HeaderProps {
  completedActivitiesCount: number;
  totalActivitiesCount: number;
}

const NAV_ITEMS = [
  { id: 'sec1', label: '1. Marco legal' },
  { id: 'sec2', label: '2. Riesgos' },
  { id: 'sec3', label: '3. Señalización', highlight: true },
  { id: 'sec4', label: '4. EPI' },
  { id: 'sec5', label: '5. Organización' },
  { id: 'sec6', label: '6. Emergencias' },
  { id: 'recursos', label: 'Recursos' },
  { id: 'evaluacion', label: 'Evaluación' }
];

export const Header: React.FC<HeaderProps> = ({
  completedActivitiesCount,
  totalActivitiesCount
}) => {
  const [activeSection, setActiveSection] = useState<string>('sec1');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progressPercentage = Math.round(
    (completedActivitiesCount / totalActivitiesCount) * 100
  );

  return (
    <>
      {/* Top Hero Section */}
      <header className="bg-slate-900 text-white pt-12 pb-10 px-4 sm:px-6 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Módulo profesional: Grados A, B y C</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Módulo 1782 · Prevención de Riesgos Laborales
          </h1>

          <p className="mt-3.5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Plataforma formativa interactiva: domina el marco legal, identifica factores de riesgo, interpreta la señalización normalizada, utiliza los EPIs y actúa con la conducta PAS ante emergencias.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-slate-400">
            <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700">
              Sistema Formación Profesional
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700">
              6 Apartados teóricos
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700">
              30 Actividades autocorregibles
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700">
              ISO 7010 & RD 485/1997
            </span>
          </div>
        </div>
      </header>

      {/* Sticky Modern Navbar with ScrollSpy and Progress Tracker */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 h-14">
          {/* Logo Brand */}
          <a
            href="#sec1"
            className="flex items-center gap-2 text-sm font-extrabold text-teal-900 tracking-tight shrink-0"
          >
            <div className="w-7 h-7 rounded-lg bg-teal-800 text-white flex items-center justify-center font-bold text-xs">
              PRL
            </div>
            <span className="hidden sm:inline">Nivel 3 FP</span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-teal-800 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {item.label}
                  {item.highlight && !isActive && (
                    <span className="ml-1 w-1.5 h-1.5 inline-block rounded-full bg-teal-600 align-middle" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Progress Tracker Pill */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200 text-xs">
            <Award className="w-3.5 h-3.5 text-teal-700" />
            <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-700 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="font-bold text-slate-700">
              {progressPercentage}%
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
