import React, { useState } from 'react';
import { Activity } from '../types';
import { InteractiveActivity } from './InteractiveActivity';
import { Award, CheckCircle2 } from 'lucide-react';

interface ActivitiesBlockProps {
  sectionId: string;
  sectionNumber: number;
  activities: Activity[];
  onSectionScoreUpdate?: (sectionId: string, score: number, total: number) => void;
}

export const ActivitiesBlock: React.FC<ActivitiesBlockProps> = ({
  sectionId,
  sectionNumber,
  activities,
  onSectionScoreUpdate
}) => {
  const [results, setResults] = useState<Record<string, boolean>>({});

  const handleResultChange = (activityId: string, isCorrect: boolean) => {
    const updated = {
      ...results,
      [activityId]: isCorrect
    };
    setResults(updated);

    const correctCount = Object.values(updated).filter(Boolean).length;
    const grade = (correctCount * 10) / activities.length;
    if (onSectionScoreUpdate) {
      onSectionScoreUpdate(sectionId, grade, activities.length);
    }
  };

  const correctCount = Object.values(results).filter(Boolean).length;
  const answeredCount = Object.keys(results).length;
  const grade = ((correctCount * 10) / activities.length).toFixed(1);

  return (
    <div className="mt-8 pt-6 border-t-2 border-dashed border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-100/80 border border-slate-200 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-teal-800 text-white flex items-center justify-center font-bold text-sm shrink-0">
            ✓
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Actividades del apartado {sectionNumber}
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              5 ejercicios autocorregibles · Evaluación continua del tema
            </p>
          </div>
        </div>

        {answeredCount > 0 && (
          <div className="flex items-center gap-3 bg-white px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
            <div className="text-right">
              <span className="text-xs text-slate-500 block">Nota del bloque:</span>
              <span className="text-base font-extrabold text-teal-800">
                {grade} <span className="text-xs font-normal text-slate-400">/ 10</span>
              </span>
            </div>
            <div className="h-6 w-px bg-slate-200" />
            <div className="flex items-center gap-1 text-xs text-emerald-700 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>{correctCount}/{activities.length}</span>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {activities.map((act, idx) => (
          <InteractiveActivity
            key={act.id}
            activity={act}
            index={idx}
            onResultChange={handleResultChange}
          />
        ))}
      </div>

      {answeredCount === activities.length && (
        <div className="mt-5 p-4 rounded-xl bg-teal-50/80 border border-teal-200 flex items-center justify-between gap-4 text-xs sm:text-sm text-teal-950">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-teal-700 shrink-0" />
            <div>
              <span className="font-bold block">
                ¡Has completado todas las actividades del Apartado {sectionNumber}!
              </span>
              <span>
                Aciertos: {correctCount} de {activities.length} ({((correctCount / activities.length) * 100).toFixed(0)}%).
              </span>
            </div>
          </div>
          <span className="px-3 py-1.5 rounded-lg bg-teal-700 text-white font-extrabold text-sm whitespace-nowrap">
            {grade} / 10
          </span>
        </div>
      )}
    </div>
  );
};
