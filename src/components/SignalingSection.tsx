import React, { useState, useMemo } from 'react';
import { SafetySign } from '../types';
import { SAFETY_SIGNS, SIGN_CATEGORIES } from '../data/signalsData';
import {
  Zap,
  Flame,
  Footprints,
  Biohazard,
  Skull,
  AlertTriangle,
  CigaretteOff,
  UserX,
  Hand,
  Droplets,
  GlassWater,
  Truck,
  HardHat,
  Headphones,
  Glasses,
  Wind,
  DoorOpen,
  Users,
  Cross,
  PhoneCall,
  Eye,
  FlameKindling,
  Disc3,
  BellRing,
  Fuel,
  Pipette,
  Gauge,
  Sparkles,
  TreePine,
  Search,
  Copy,
  Check,
  Info,
  ShieldCheck,
  X,
  Sparkle,
  BookOpen,
  ExternalLink,
  Gamepad2
} from 'lucide-react';

// Icon mapper for minimalist representation
const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Zap,
  Flame,
  Footprints,
  Biohazard,
  Skull,
  AlertTriangle,
  CigaretteOff,
  UserX,
  Hand,
  Droplets,
  GlassWater,
  Truck,
  HardHat,
  HandMetal: Hand,
  Headphones,
  Glasses,
  Wind,
  DoorOpen,
  Users,
  Cross,
  PhoneCall,
  Eye,
  FlameKindling,
  Disc3,
  BellRing,
  Fuel,
  Pipette,
  Gauge,
  Sparkles,
  TreePine
};

export const SignalingSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSignModal, setActiveSignModal] = useState<SafetySign | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [educaplayOpen, setEducaplayOpen] = useState<boolean>(false);
  const [quizMode, setQuizMode] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);

  // Filtered signals
  const filteredSigns = useMemo(() => {
    return SAFETY_SIGNS.filter((sign) => {
      const matchCategory =
        selectedCategory === 'all' || sign.category === selectedCategory;
      const matchSearch =
        sign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sign.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sign.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sign.workplaceAction.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Handle copy code
  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Mini quiz pool (5 random signals)
  const quizPool = useMemo(() => {
    return [...SAFETY_SIGNS].sort(() => 0.5 - Math.random()).slice(0, 5);
  }, [quizMode]);

  const handleQuizAnswer = (chosenName: string) => {
    const current = quizPool[currentQuizIndex];
    if (chosenName === current.name) {
      setQuizScore((prev) => prev + 1);
      setQuizFeedback('¡Correcto! Has identificado la señal con precisión.');
    } else {
      setQuizFeedback(`No es correcto. Se trataba de: ${current.name}`);
    }

    setTimeout(() => {
      setQuizFeedback(null);
      if (currentQuizIndex < quizPool.length - 1) {
        setCurrentQuizIndex((prev) => prev + 1);
      } else {
        // finished
      }
    }, 1800);
  };

  const renderMinimalistIcon = (sign: SafetySign) => {
    const IconComponent = ICON_MAP[sign.iconName] || AlertTriangle;

    switch (sign.shape) {
      case 'triangulo':
        // Advertencia: fondo amarillo, borde negro
        return (
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="w-14 h-14 bg-amber-400 border-2 border-slate-900 rounded-lg rotate-45 flex items-center justify-center shadow-xs">
              <div className="-rotate-45 text-slate-950">
                <IconComponent className="w-7 h-7 stroke-[2.2]" />
              </div>
            </div>
          </div>
        );
      case 'circulo':
        if (sign.category === 'prohibicion') {
          // Prohibición: círculo blanco con borde rojo y línea diagonal
          return (
            <div className="relative w-16 h-16 rounded-full border-4 border-rose-600 bg-white flex items-center justify-center shadow-xs">
              <div className="text-slate-800">
                <IconComponent className="w-7 h-7 stroke-[2.2]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-1 bg-rose-600 rounded-full rotate-45" />
              </div>
            </div>
          );
        }
        // Obligación: círculo azul con pictograma blanco
        return (
          <div className="w-16 h-16 rounded-full bg-sky-600 border-2 border-sky-700 flex items-center justify-center text-white shadow-xs">
            <IconComponent className="w-7 h-7 stroke-[2.2]" />
          </div>
        );
      case 'rectangulo':
        if (sign.category === 'incendios') {
          return (
            <div className="w-16 h-14 rounded-lg bg-rose-600 border-2 border-rose-700 flex items-center justify-center text-white shadow-xs">
              <IconComponent className="w-7 h-7 stroke-[2.2]" />
            </div>
          );
        }
        // Salvamento: verde
        return (
          <div className="w-16 h-14 rounded-lg bg-emerald-600 border-2 border-emerald-700 flex items-center justify-center text-white shadow-xs">
            <IconComponent className="w-7 h-7 stroke-[2.2]" />
          </div>
        );
      case 'rombo':
        // ADR rombo
        return (
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="w-13 h-13 bg-orange-500 border-2 border-slate-900 rounded-sm rotate-45 flex items-center justify-center shadow-xs">
              <div className="-rotate-45 text-white">
                <IconComponent className="w-6 h-6 stroke-[2.2]" />
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
            <IconComponent className="w-7 h-7" />
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Normative Context & Universal Shape/Color Code */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/70">
              RD 485/1997 · UNE-EN ISO 7010
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2 tracking-tight">
              Catálogo Técnico de Señalización con Iconos Minimalistas
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setEducaplayOpen(!educaplayOpen);
                if (quizMode) setQuizMode(false);
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                educaplayOpen
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-teal-700 hover:bg-teal-800 text-white shadow-2xs'
              }`}
            >
              <Gamepad2 className="w-4 h-4 text-teal-300" />
              <span>{educaplayOpen ? 'Ocultar Juego de Señalización' : 'Test Rápido de Reconocimiento'}</span>
            </button>

            <a
              href="https://es.educaplay.com/recursos-educativos/30565597-senalizacion_fol.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200/80 transition-colors"
              title="Abrir juego interactivo de Educaplay en pestaña nueva"
            >
              <span>Educaplay</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* EDUCAPLAY INTERACTIVE GAME PANEL */}
        {educaplayOpen && (
          <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-slate-900 text-white shadow-lg border border-slate-800 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-teal-500 text-slate-950 flex items-center gap-1.5">
                  <Gamepad2 className="w-3.5 h-3.5" />
                  Juego Educaplay · Señalización FOL
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  Test interactivo para identificar colores y pictogramas
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://es.educaplay.com/recursos-educativos/30565597-senalizacion_fol.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors"
                >
                  <span>Pantalla completa</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setEducaplayOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Cerrar juego"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="w-full flex justify-center bg-slate-950 rounded-xl overflow-hidden border border-slate-800 p-1">
              <iframe
                allow="fullscreen; autoplay; allow-top-navigation-by-user-activation"
                allowFullScreen
                width="795"
                height="690"
                title="Juego Educaplay: Señalización FOL"
                className="w-full max-w-[795px] h-[600px] sm:h-[690px] border-0 rounded-lg"
                src="https://es.educaplay.com/juego/30565597-senalizacion_fol.html"
              />
            </div>
          </div>
        )}

        {/* Universal Color & Shape Semantic Table */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4 pt-1">
          <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/70 flex items-center gap-3">
            <div className="w-6 h-6 bg-amber-400 border-2 border-slate-900 rotate-45 rounded-xs shrink-0" />
            <div className="text-xs leading-tight">
              <span className="font-bold text-amber-950 block">Advertencia</span>
              <span className="text-slate-600">Triángulo amarillo (Peligro)</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-rose-50/60 border border-rose-200/70 flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-3 border-rose-600 bg-white shrink-0 relative flex items-center justify-center">
              <div className="w-5 h-0.5 bg-rose-600 rotate-45" />
            </div>
            <div className="text-xs leading-tight">
              <span className="font-bold text-rose-950 block">Prohibición</span>
              <span className="text-slate-600">Círculo rojo tachado</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-200/70 flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-sky-600 border border-sky-700 shrink-0" />
            <div className="text-xs leading-tight">
              <span className="font-bold text-sky-950 block">Obligación</span>
              <span className="text-slate-600">Círculo azul (Uso de EPI)</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200/70 flex items-center gap-3">
            <div className="w-6 h-5 rounded-xs bg-emerald-600 border border-emerald-700 shrink-0" />
            <div className="text-xs leading-tight">
              <span className="font-bold text-emerald-950 block">Salvamento</span>
              <span className="text-slate-600">Rectángulo verde (Salidas)</span>
            </div>
          </div>
        </div>
      </div>

      {/* QUIZ FLASH MODE IF ACTIVE */}
      {quizMode && (
        <div className="p-5 rounded-2xl bg-slate-900 text-white shadow-md animate-in fade-in duration-200">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-500 text-slate-950">
                Pregunta {currentQuizIndex + 1} de {quizPool.length}
              </span>
              <span className="text-xs text-slate-400">
                Puntuación: {quizScore} aciertos
              </span>
            </div>
            <button
              type="button"
              onClick={() => setQuizMode(false)}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
            >
              <X className="w-4 h-4" /> Cerrar test
            </button>
          </div>

          {currentQuizIndex < quizPool.length ? (
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 shrink-0 flex flex-col items-center">
                {renderMinimalistIcon(quizPool[currentQuizIndex])}
                <span className="text-xs text-slate-400 mt-2 font-mono">
                  Código: {quizPool[currentQuizIndex].code}
                </span>
              </div>

              <div className="flex-1 w-full space-y-2">
                <p className="text-sm font-semibold text-slate-200 mb-2">
                  ¿Qué significa exactamente esta señal reglamentaria?
                </p>

                {/* Generate 3 candidate options */}
                {useMemo(() => {
                  const current = quizPool[currentQuizIndex];
                  const distractors = SAFETY_SIGNS.filter(
                    (s) => s.id !== current.id
                  )
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 2);
                  return [current, ...distractors].sort(() => 0.5 - Math.random());
                }, [currentQuizIndex, quizPool]).map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleQuizAnswer(opt.name)}
                    className="w-full text-left p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-medium border border-slate-700 transition-all flex items-center justify-between"
                  >
                    <span>{opt.name}</span>
                    <span className="text-xs text-slate-400 font-mono">
                      {opt.categoryLabel}
                    </span>
                  </button>
                ))}

                {quizFeedback && (
                  <div
                    className={`mt-2 p-2.5 rounded-lg text-xs font-semibold ${
                      quizFeedback.includes('¡Correcto!')
                        ? 'bg-emerald-900/80 text-emerald-200 border border-emerald-700'
                        : 'bg-rose-900/80 text-rose-200 border border-rose-700'
                    }`}
                  >
                    {quizFeedback}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <h4 className="text-lg font-bold text-teal-400">
                ¡Test completado!
              </h4>
              <p className="text-sm text-slate-300 mt-1">
                Has acertado {quizScore} de {quizPool.length} señales.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCurrentQuizIndex(0);
                  setQuizScore(0);
                }}
                className="mt-3 px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold"
              >
                Volver a intentar
              </button>
            </div>
          )}
        </div>
      )}

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none">
          {SIGN_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-teal-800 text-white shadow-2xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100/70 hover:text-slate-900'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? 'bg-teal-950/40 text-teal-100'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {cat.id === 'all'
                    ? SAFETY_SIGNS.length
                    : SAFETY_SIGNS.filter((s) => s.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72 shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por código, nombre o acción..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-1.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
        </div>
      </div>

      {/* Signals Grid with Minimalist Vector Icons and Clear CTA Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSigns.map((sign) => {
          return (
            <div
              key={sign.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Code and Category Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md ${sign.colorScheme.badge}`}
                  >
                    {sign.code}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {sign.categoryLabel}
                  </span>
                </div>

                {/* Minimalist Icon Stage */}
                <div className="py-4 flex items-center justify-center bg-slate-50/70 rounded-xl mb-3 border border-slate-100">
                  {renderMinimalistIcon(sign)}
                </div>

                {/* Sign Name and Description */}
                <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug mb-1">
                  {sign.name}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                  {sign.description}
                </p>

                {/* Quick Workplace Action Preview */}
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 text-[11px] text-slate-700 leading-snug mb-4">
                  <span className="font-bold text-slate-900 block mb-0.5">
                    Acción obligatoria:
                  </span>
                  {sign.workplaceAction}
                </div>
              </div>

              {/* Clear Call-To-Action (CTA) Buttons as requested by User */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveSignModal(sign)}
                  className="flex-1 py-2 px-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition-all shadow-2xs hover:shadow-xs flex items-center justify-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Ficha Técnica y Protocolo</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleCopyCode(sign.code, sign.id)}
                  title="Copiar código normativo ISO"
                  className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs transition-all shrink-0"
                >
                  {copiedId === sign.id ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredSigns.length === 0 && (
        <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
          <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
          <p className="text-sm font-bold text-slate-800">No se encontraron señales coincidentes</p>
          <p className="text-xs text-slate-500 mt-1">
            Prueba a seleccionar "Todas las señales" o borra el término de búsqueda.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 px-3 py-1.5 rounded-lg bg-teal-700 text-white text-xs font-bold"
          >
            Restablecer filtros
          </button>
        </div>
      )}

      {/* DETAILED TECHNICAL MODAL / DRAWER */}
      {activeSignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-xl border border-slate-200 animate-in zoom-in-95 duration-150 relative">
            <button
              type="button"
              onClick={() => setActiveSignModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 shrink-0">
                {renderMinimalistIcon(activeSignModal)}
              </div>
              <div>
                <span
                  className={`text-[11px] font-mono font-extrabold px-2 py-0.5 rounded ${activeSignModal.colorScheme.badge}`}
                >
                  {activeSignModal.code}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                  {activeSignModal.name}
                </h3>
                <span className="text-xs font-medium text-slate-500">
                  {activeSignModal.categoryLabel}
                </span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="font-bold text-slate-900 block mb-1">
                  Significado y Riesgo Identificado:
                </span>
                <p className="text-slate-700 leading-relaxed">
                  {activeSignModal.description}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-200/80">
                <span className="font-bold text-teal-950 flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-teal-700" /> Protocolo de Actuación para el Trabajador:
                </span>
                <p className="text-teal-900 leading-relaxed">
                  {activeSignModal.workplaceAction}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                <span className="font-bold text-slate-800 block mb-0.5">
                  Marco Normativo Aplicable:
                </span>
                <span className="font-mono text-slate-600">
                  {activeSignModal.normative}
                </span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  handleCopyCode(
                    `${activeSignModal.code} - ${activeSignModal.name} (${activeSignModal.normative})`,
                    'modal'
                  );
                }}
                className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5"
              >
                {copiedId === 'modal' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Copiado
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copiar Ficha
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveSignModal(null)}
                className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition-all"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
