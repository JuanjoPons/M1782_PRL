import React, { useState } from 'react';
import { EPI_CATALOG } from '../data/courseData';
import {
  HardHat,
  Glasses,
  Headphones,
  Wind,
  Hand,
  Footprints,
  Shirt,
  LifeBuoy,
  ShieldAlert,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const EPI_ICONS: Record<string, React.FC<{ className?: string }>> = {
  HardHat,
  Glasses,
  Headphones,
  Wind,
  HandMetal: Hand,
  Footprints,
  Shirt,
  LifeBuoy
};

export const EpiInteractiveGrid: React.FC = () => {
  const [selectedEpiId, setSelectedEpiId] = useState<string>(EPI_CATALOG[0].id);

  const activeEpi = EPI_CATALOG.find((e) => e.id === selectedEpiId) || EPI_CATALOG[0];
  const ActiveIcon = EPI_ICONS[activeEpi.iconName] || HardHat;

  return (
    <div className="my-6 space-y-4">
      {/* Zone selection buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {EPI_CATALOG.map((item) => {
          const isSelected = item.id === selectedEpiId;
          const Icon = EPI_ICONS[item.iconName] || HardHat;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedEpiId(item.id)}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-teal-800 text-white shadow-2xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.zone}</span>
            </button>
          );
        })}
      </div>

      {/* Active EPI detailed interactive card */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 flex items-center justify-center shrink-0">
              <ActiveIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Zona Protegida: {activeEpi.zone}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {activeEpi.name}
              </h4>
            </div>
          </div>
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 self-start sm:self-center">
            {activeEpi.standards}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="font-bold text-slate-900 block mb-1.5 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-600" /> Riesgos que Previene:
            </span>
            <p className="text-slate-700 leading-relaxed">
              {activeEpi.protectsFrom}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="font-bold text-slate-900 block mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600" /> Tipos y Modelos Habituales:
            </span>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              {activeEpi.examples.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2.5 text-xs sm:text-sm text-amber-950">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold mr-1">Consejo de uso y conservación:</span>
            {activeEpi.tip}
          </div>
        </div>
      </div>
    </div>
  );
};
