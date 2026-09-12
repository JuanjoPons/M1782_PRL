import React, { useState, useEffect } from 'react';
import { Activity } from '../types';
import { CheckCircle2, XCircle, RotateCcw, HelpCircle, Check } from 'lucide-react';

interface InteractiveActivityProps {
  activity: Activity;
  index: number;
  onResultChange?: (activityId: string, isCorrect: boolean) => void;
  isCorrectOverride?: boolean;
}

const TYPE_LABELS: Record<string, string> = {
  choice: 'Opción múltiple',
  multi: 'Selección múltiple',
  vf: 'Verdadero o Falso',
  match: 'Relacionar conceptos',
  gap: 'Completar texto',
  order: 'Ordenar pasos',
  caso: 'Caso práctico'
};

function normalizeText(text: string): string {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export const InteractiveActivity: React.FC<InteractiveActivityProps> = ({
  activity,
  index,
  onResultChange
}) => {
  const [selectedSingle, setSelectedSingle] = useState<number | null>(null);
  const [selectedMulti, setSelectedMulti] = useState<number[]>([]);
  const [selectedVf, setSelectedVf] = useState<boolean | null>(null);
  const [matchSelections, setMatchSelections] = useState<Record<number, string>>({});
  const [gapAnswers, setGapAnswers] = useState<Record<number, string>>({});
  const [orderSelections, setOrderSelections] = useState<Record<number, number>>({});
  const [caseResponse, setCaseResponse] = useState<string>('');

  const [feedback, setFeedback] = useState<{
    submitted: boolean;
    isCorrect: boolean;
    message: string;
  } | null>(null);

  // Shuffled options for matching
  const [shuffledMatches, setShuffledMatches] = useState<string[]>([]);

  useEffect(() => {
    if (activity.type === 'match' && activity.pares) {
      const rightCols = activity.pares.map((p) => p[1]);
      // deterministic or stable shuffle
      const shuffled = [...rightCols].sort(() => Math.random() - 0.5);
      setShuffledMatches(shuffled);
    }
  }, [activity]);

  const handleValidate = () => {
    let correct = false;
    let customMsg = activity.expl;

    if (activity.type === 'choice') {
      if (selectedSingle === null) {
        setFeedback({
          submitted: true,
          isCorrect: false,
          message: 'Por favor, selecciona una respuesta antes de comprobar.'
        });
        return;
      }
      correct = selectedSingle === activity.correct;
    } else if (activity.type === 'multi') {
      if (selectedMulti.length === 0) {
        setFeedback({
          submitted: true,
          isCorrect: false,
          message: 'Por favor, marca al menos una opción antes de comprobar.'
        });
        return;
      }
      const sortedSelected = [...selectedMulti].sort().join(',');
      const sortedCorrect = Array.isArray(activity.correct)
        ? [...activity.correct].sort().join(',')
        : String(activity.correct);
      correct = sortedSelected === sortedCorrect;
    } else if (activity.type === 'vf') {
      if (selectedVf === null) {
        setFeedback({
          submitted: true,
          isCorrect: false,
          message: 'Por favor, indica si es Verdadero o Falso antes de comprobar.'
        });
        return;
      }
      correct = selectedVf === activity.correct;
    } else if (activity.type === 'match' && activity.pares) {
      const allSelected = activity.pares.every((_, i) => !!matchSelections[i]);
      if (!allSelected) {
        setFeedback({
          submitted: true,
          isCorrect: false,
          message: 'Por favor, asigna una opción a cada uno de los elementos de la izquierda.'
        });
        return;
      }
      correct = activity.pares.every((p, i) => matchSelections[i] === p[1]);
    } else if (activity.type === 'gap' && activity.answers) {
      const allFilled = activity.answers.every((_, i) => (gapAnswers[i] || '').trim() !== '');
      if (!allFilled) {
        setFeedback({
          submitted: true,
          isCorrect: false,
          message: 'Por favor, rellena todos los campos de texto.'
        });
        return;
      }
      correct = activity.answers.every((ans, i) => {
        const userNorm = normalizeText(gapAnswers[i] || '');
        const validOptions = ans.split('|').map((v) => normalizeText(v));
        return validOptions.includes(userNorm);
      });
    } else if (activity.type === 'order' && activity.items) {
      const allFilled = activity.items.every((_, i) => !!orderSelections[i]);
      if (!allFilled) {
        setFeedback({
          submitted: true,
          isCorrect: false,
          message: 'Por favor, asigna una posición numérica a cada paso.'
        });
        return;
      }
      correct = activity.items.every((_, i) => orderSelections[i] === i + 1);
    } else if (activity.type === 'caso' && activity.keywords) {
      const normalizedUser = normalizeText(caseResponse);
      if (normalizedUser.length < 4) {
        setFeedback({
          submitted: true,
          isCorrect: false,
          message: 'Por favor, redacta una respuesta antes de comprobar.'
        });
        return;
      }
      // Check if user answer includes keywords
      correct = activity.keywords.some((kwGroup) => {
        const words = kwGroup.split('|');
        return words.some((w) => normalizedUser.includes(normalizeText(w)));
      });
    }

    setFeedback({
      submitted: true,
      isCorrect: correct,
      message: customMsg
    });

    if (onResultChange) {
      onResultChange(activity.id, correct);
    }
  };

  const handleReset = () => {
    setSelectedSingle(null);
    setSelectedMulti([]);
    setSelectedVf(null);
    setMatchSelections({});
    setGapAnswers({});
    setOrderSelections({});
    setCaseResponse('');
    setFeedback(null);
    if (onResultChange) {
      onResultChange(activity.id, false);
    }
  };

  return (
    <div
      id={activity.id}
      className={`p-4 sm:p-5 rounded-xl border transition-all duration-200 bg-white ${
        feedback?.submitted
          ? feedback.isCorrect
            ? 'border-emerald-300 ring-1 ring-emerald-200/60 shadow-sm'
            : 'border-rose-300 ring-1 ring-rose-200/60 shadow-sm'
          : 'border-slate-200/90 shadow-sm hover:border-slate-300'
      }`}
    >
      {/* Activity Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/70">
            {TYPE_LABELS[activity.type] || 'Actividad'}
          </span>
          <span className="text-xs font-bold text-slate-400">
            Actividad {index + 1}
          </span>
        </div>
        {feedback?.submitted && (
          <span
            className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full ${
              feedback.isCorrect
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-rose-100 text-rose-800'
            }`}
          >
            {feedback.isCorrect ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" /> Acierto
              </>
            ) : (
              <>
                <XCircle className="w-3.5 h-3.5" /> Revisar
              </>
            )}
          </span>
        )}
      </div>

      {/* Enunciado */}
      <div
        className="text-sm sm:text-base font-semibold text-slate-800 mb-3.5 leading-snug"
        dangerouslySetInnerHTML={{ __html: activity.q }}
      />

      {/* Inputs according to Activity Type */}
      <div className="space-y-2 mb-4">
        {activity.type === 'choice' &&
          activity.opts?.map((opt, optIdx) => {
            const isChecked = selectedSingle === optIdx;
            return (
              <label
                key={optIdx}
                className={`flex items-start gap-3 p-3 rounded-lg border text-xs sm:text-sm cursor-pointer transition-all ${
                  isChecked
                    ? 'border-teal-600 bg-teal-50/50 text-teal-950 font-medium'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name={activity.id}
                  checked={isChecked}
                  onChange={() => setSelectedSingle(optIdx)}
                  className="mt-0.5 w-4 h-4 text-teal-700 border-slate-300 focus:ring-teal-600"
                />
                <span className="flex-1 leading-relaxed">{opt}</span>
              </label>
            );
          })}

        {activity.type === 'multi' &&
          activity.opts?.map((opt, optIdx) => {
            const isChecked = selectedMulti.includes(optIdx);
            return (
              <label
                key={optIdx}
                className={`flex items-start gap-3 p-3 rounded-lg border text-xs sm:text-sm cursor-pointer transition-all ${
                  isChecked
                    ? 'border-teal-600 bg-teal-50/50 text-teal-950 font-medium'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 text-slate-700'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedMulti([...selectedMulti, optIdx]);
                    } else {
                      setSelectedMulti(selectedMulti.filter((item) => item !== optIdx));
                    }
                  }}
                  className="mt-0.5 w-4 h-4 rounded text-teal-700 border-slate-300 focus:ring-teal-600"
                />
                <span className="flex-1 leading-relaxed">{opt}</span>
              </label>
            );
          })}

        {activity.type === 'vf' && (
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setSelectedVf(true)}
              className={`py-2.5 px-4 rounded-lg border text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                selectedVf === true
                  ? 'border-teal-600 bg-teal-600 text-white shadow-sm'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
              }`}
            >
              {selectedVf === true && <Check className="w-4 h-4" />} Verdadero
            </button>
            <button
              type="button"
              onClick={() => setSelectedVf(false)}
              className={`py-2.5 px-4 rounded-lg border text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                selectedVf === false
                  ? 'border-rose-600 bg-rose-600 text-white shadow-sm'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
              }`}
            >
              {selectedVf === false && <Check className="w-4 h-4" />} Falso
            </button>
          </div>
        )}

        {activity.type === 'match' &&
          activity.pares?.map((par, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-50/80 border border-slate-200/80 text-xs sm:text-sm"
            >
              <span className="font-semibold text-slate-800 sm:w-1/2">{par[0]}</span>
              <select
                value={matchSelections[i] || ''}
                onChange={(e) =>
                  setMatchSelections({
                    ...matchSelections,
                    [i]: e.target.value
                  })
                }
                className="w-full sm:w-1/2 p-2 rounded-md border border-slate-300 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-600 text-xs sm:text-sm"
              >
                <option value="">— Seleccionar concepto —</option>
                {shuffledMatches.map((opt, oIdx) => (
                  <option key={oIdx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}

        {activity.type === 'gap' && activity.texto && (
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 leading-loose">
            {activity.texto.split(/(\[\d+\])/g).map((part, partIdx) => {
              const match = part.match(/\[(\d+)\]/);
              if (match) {
                const gapNum = parseInt(match[1], 10) - 1;
                return (
                  <input
                    key={partIdx}
                    type="text"
                    placeholder={`[${match[1]}]`}
                    value={gapAnswers[gapNum] || ''}
                    onChange={(e) =>
                      setGapAnswers({
                        ...gapAnswers,
                        [gapNum]: e.target.value
                      })
                    }
                    className="inline-block mx-1.5 px-2.5 py-1 w-36 text-center border-b-2 border-teal-600 bg-white text-slate-800 rounded font-medium focus:outline-none focus:bg-teal-50 text-xs sm:text-sm shadow-2xs"
                  />
                );
              }
              return <span key={partIdx}>{part}</span>;
            })}
          </div>
        )}

        {activity.type === 'order' && activity.items && (
          <div className="space-y-2">
            <p className="text-xs text-slate-500 font-medium mb-1">
              Asigna el orden correlativo a cada paso (1 = primer paso):
            </p>
            {activity.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm"
              >
                <select
                  value={orderSelections[i] || ''}
                  onChange={(e) =>
                    setOrderSelections({
                      ...orderSelections,
                      [i]: parseInt(e.target.value, 10)
                    })
                  }
                  className="w-14 p-1.5 rounded-md border border-slate-300 bg-white font-bold text-teal-800 text-center focus:ring-2 focus:ring-teal-600"
                >
                  <option value="">—</option>
                  {activity.items?.map((_, numIdx) => (
                    <option key={numIdx} value={numIdx + 1}>
                      {numIdx + 1}º
                    </option>
                  ))}
                </select>
                <span className="flex-1 text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        )}

        {activity.type === 'caso' && (
          <div>
            <textarea
              rows={3}
              value={caseResponse}
              onChange={(e) => setCaseResponse(e.target.value)}
              placeholder="Escribe brevemente tu respuesta o protocolo de actuación..."
              className="w-full p-3 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
            />
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
        <button
          type="button"
          onClick={handleValidate}
          className="px-3.5 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-2xs hover:shadow-sm"
        >
          Comprobar respuesta
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-600 text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Restablecer
        </button>
      </div>

      {/* Feedback Alert */}
      {feedback?.submitted && (
        <div
          className={`mt-3.5 p-3 rounded-lg border text-xs sm:text-sm leading-relaxed flex items-start gap-2.5 transition-all animate-in fade-in duration-200 ${
            feedback.isCorrect
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-rose-50 border-rose-200 text-rose-950'
          }`}
        >
          <div className="shrink-0 mt-0.5">
            {feedback.isCorrect ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            ) : (
              <HelpCircle className="w-4 h-4 text-rose-600" />
            )}
          </div>
          <div className="flex-1">
            <span className="font-bold mr-1">
              {feedback.isCorrect ? '¡Correcto!' : 'Respuesta a revisar:'}
            </span>
            <span dangerouslySetInnerHTML={{ __html: feedback.message }} />
          </div>
        </div>
      )}
    </div>
  );
};
