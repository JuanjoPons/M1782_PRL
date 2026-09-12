import React, { useState } from 'react';
import { FINAL_EVALUATION_ACTIVITIES } from '../data/activitiesData';
import { InteractiveActivity } from './InteractiveActivity';
import confetti from 'canvas-confetti';
import {
  GraduationCap,
  Send,
  Mail,
  Printer,
  CheckCircle2,
  XCircle,
  AlertCircle,
  FileText,
  Clock
} from 'lucide-react';

const TEACHER_EMAIL = 'jpons@centredelamar.com';

export const FinalEvaluation: React.FC = () => {
  const [studentName, setStudentName] = useState<string>('');
  const [studentGroup, setStudentGroup] = useState<string>('');
  const [evalResults, setEvalResults] = useState<Record<string, boolean>>({});
  const [evaluationSubmitted, setEvaluationSubmitted] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleResultChange = (activityId: string, isCorrect: boolean) => {
    setEvalResults((prev) => ({
      ...prev,
      [activityId]: isCorrect
    }));
  };

  const correctCount = Object.values(evalResults).filter(Boolean).length;
  const totalCount = FINAL_EVALUATION_ACTIVITIES.length;
  const finalGrade = ((correctCount * 10) / totalCount).toFixed(1);
  const isPassed = parseFloat(finalGrade) >= 5.0;

  const handleSubmitEvaluation = () => {
    if (!studentName.trim() || !studentGroup.trim()) {
      setValidationError('Por favor, indica tu Nombre completo y Grupo antes de corregir la evaluación.');
      return;
    }
    setValidationError(null);
    setEvaluationSubmitted(true);

    if (parseFloat(finalGrade) >= 5.0) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }
  };

  const generateReportText = () => {
    const dateStr = new Date().toLocaleString('es-ES');
    const lines = FINAL_EVALUATION_ACTIVITIES.map((act, i) => {
      const ok = evalResults[act.id] ?? false;
      const cleanQ = act.q.replace(/<[^>]*>/g, '').slice(0, 80);
      return `${ok ? '✅' : '❌'} Actividad ${i + 1}: ${cleanQ}...`;
    });

    return (
      `INFORME DE EVALUACIÓN FINAL · MÓDULO 1782 PRL\n` +
      `--------------------------------------------------\n` +
      `Módulo profesional: Grados A, B y C (Nivel 3 FP)\n` +
      `Alumno/a: ${studentName}\n` +
      `Grupo/Clase: ${studentGroup}\n` +
      `Nota obtenida: ${finalGrade} / 10 (${isPassed ? 'APROBADO' : 'SUSPENSO'})\n` +
      `Aciertos: ${correctCount} de ${totalCount}\n` +
      `Fecha de entrega: ${dateStr}\n\n` +
      `Desglose pormenorizado:\n` +
      lines.join('\n')
    );
  };

  const handleSendMailto = () => {
    const report = generateReportText();
    const subject = `Evaluación Final PRL · ${studentName} (${studentGroup}) · Nota: ${finalGrade}/10`;
    const mailtoUrl = `mailto:${TEACHER_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(report)}`;

    window.location.href = mailtoUrl;
    setSubmissionStatus(
      `Se ha abierto tu cliente de correo con el informe precargado. Revisa y pulsa "Enviar" para remitirlo a ${TEACHER_EMAIL}.`
    );
  };

  return (
    <div className="space-y-6">
      {/* Student Identity Form */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-3 pb-3 mb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center font-bold text-sm shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Identificación del Alumno/a
            </h3>
            <p className="text-xs text-slate-500">
              Datos requeridos para la emisión y registro del informe oficial de calificación.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="student-name"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1"
            >
              Nombre y Apellidos *
            </label>
            <input
              id="student-name"
              type="text"
              placeholder="Ej.: Aina Pons Ferrer"
              value={studentName}
              onChange={(e) => {
                setStudentName(e.target.value);
                if (validationError) setValidationError(null);
              }}
              className="w-full p-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-700 font-medium"
            />
          </div>

          <div>
            <label
              htmlFor="student-group"
              className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1"
            >
              Grupo / Clase *
            </label>
            <input
              id="student-group"
              type="text"
              placeholder="Ej.: 1º Nivel 3 FP (Grupo A)"
              value={studentGroup}
              onChange={(e) => {
                setStudentGroup(e.target.value);
                if (validationError) setValidationError(null);
              }}
              className="w-full p-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-700 font-medium"
            />
          </div>
        </div>

        {validationError && (
          <div className="mt-3 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}
      </div>

      {/* 10 Assessment Activities */}
      <div className="space-y-4">
        {FINAL_EVALUATION_ACTIVITIES.map((act, idx) => (
          <InteractiveActivity
            key={act.id}
            activity={act}
            index={idx}
            onResultChange={handleResultChange}
          />
        ))}
      </div>

      {/* Evaluation Trigger Button */}
      <div className="text-center pt-2">
        <button
          type="button"
          onClick={handleSubmitEvaluation}
          className="px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>Calcular Nota Final y Generar Informe</span>
        </button>
      </div>

      {/* Result Card Modal / Section */}
      {evaluationSubmitted && (
        <div className="p-6 rounded-2xl bg-white border-2 border-teal-600 shadow-md animate-in fade-in duration-200">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Calificación Obtenida en el Módulo 1782
            </span>
            <div
              className={`text-5xl font-black my-2 tracking-tight ${
                isPassed ? 'text-teal-700' : 'text-rose-600'
              }`}
            >
              {finalGrade} <span className="text-xl font-bold text-slate-400">/ 10</span>
            </div>
            <p className="text-sm font-semibold text-slate-700">
              {isPassed ? (
                <span className="text-emerald-700">
                  ¡Enhorabuena, has superado la evaluación con {correctCount} aciertos de {totalCount}!
                </span>
              ) : (
                <span className="text-rose-700">
                  Has obtenido {correctCount} de {totalCount} aciertos. Te recomendamos repasar los apartados señalados.
                </span>
              )}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Alumno/a: <strong>{studentName}</strong> · Grupo: <strong>{studentGroup}</strong>
            </p>
          </div>

          {/* Actions: Send Email or Print */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-slate-700">
              <Mail className="w-4 h-4 text-teal-700" />
              <span>
                Destino docente registrado: <strong>{TEACHER_EMAIL}</strong>
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleSendMailto}
                className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enviar al Docente (Email)</span>
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="px-3.5 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimir / PDF</span>
              </button>
            </div>
          </div>

          {submissionStatus && (
            <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold">
              {submissionStatus}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
