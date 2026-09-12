import React, { useState } from 'react';
import { Header } from './components/Header';
import { SectionHeader } from './components/SectionHeader';
import { PedagogicCallout } from './components/PedagogicCallout';
import { ActivitiesBlock } from './components/ActivitiesBlock';
import { SignalingSection } from './components/SignalingSection';
import { EpiInteractiveGrid } from './components/EpiInteractiveGrid';
import { FinalEvaluation } from './components/FinalEvaluation';
import { ResourcesSection } from './components/ResourcesSection';
import { Footer } from './components/Footer';
import { ACTIVITIES_BY_SECTION } from './data/activitiesData';
import { RISK_CLASSIFICATION, SECTOR_PRACTICAL_CASES } from './data/courseData';
import {
  ArrowUp,
  Shield,
  FileCheck2,
  Users,
  AlertTriangle,
  Flame,
  CheckCircle2,
  PhoneCall,
  Activity as ActivityIcon,
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [sectionScores, setSectionScores] = useState<Record<string, { score: number; total: number }>>({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for back to top button
  React.useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionScoreUpdate = (sectionId: string, score: number, total: number) => {
    setSectionScores((prev) => ({
      ...prev,
      [sectionId]: { score, total }
    }));
  };

  // Calculate total completed activities across the 6 sections
  const totalCompleted = Object.values(sectionScores).reduce<number>(
    (acc: number, curr: { score: number; total: number }) =>
      acc + (curr.score > 0 ? Math.round((curr.score / 10) * curr.total) : 0),
    0
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Top Header with Hero and Sticky Nav */}
      <Header
        completedActivitiesCount={totalCompleted}
        totalActivitiesCount={30}
      />

      {/* Main Learning Canvas */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-12 sm:space-y-16">
        {/* =====================================================================
             APARTADO 1 · FUNDAMENTOS Y MARCO LEGAL DE LA PRL
        ===================================================================== */}
        <section
          id="sec1"
          className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-8 shadow-2xs transition-all"
        >
          <SectionHeader
            number="1"
            title="Fundamentos y marco legal de la Prevención de Riesgos Laborales"
            subtitle="Ley 31/1995 (LPRL) · Derechos y deberes preventivos · Principios de la acción preventiva"
          />

          <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4 text-slate-700">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                1.1 ¿Qué es la Prevención de Riesgos Laborales?
              </h3>
              <p>
                La <strong>Prevención de Riesgos Laborales (PRL)</strong> es el conjunto de actividades o medidas adoptadas o previstas en todas las fases de actividad de la empresa con el fin de <strong>evitar o disminuir los riesgos derivados del trabajo</strong>. Su meta primordial es garantizar que cualquier persona trabajadora desarrolle su profesión salvaguardando su integridad física, psíquica y social.
              </p>
              <p>Para abordar la materia con rigor técnico, es imprescindible distinguir tres conceptos básicos:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Peligro</span>
                  <span className="text-xs text-slate-600">
                    Propiedad intrínseca de una sustancia, equipo o tarea con potencial de causar daño (ej.: cable sin aislamiento).
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Riesgo laboral</span>
                  <span className="text-xs text-slate-600">
                    Probabilidad de que el daño se materialice en las condiciones de trabajo, junto a su gravedad (ej.: riesgo de electrocución).
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Daño derivado</span>
                  <span className="text-xs text-slate-600">
                    La enfermedad, patología o lesión corporal sufrida con motivo u ocasión del trabajo ejecutado.
                  </span>
                </div>
              </div>
            </div>

            <PedagogicCallout type="idea">
              Prevenir siempre resulta <strong>técnicamente más eficaz y económicamente más rentable que reparar</strong>. La anticipación proactiva (evaluar riesgos antes de iniciar tareas, formar al personal y dotar de protecciones colectivas) es la esencia misma de la cultura preventiva.
            </PedagogicCallout>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                1.2 Marco legal: la Ley 31/1995 de Prevención de Riesgos Laborales
              </h3>
              <p>
                La <strong>Ley 31/1995, de 8 de noviembre</strong> es la norma de cabecera en España. Establece que la protección de la seguridad y salud es un <strong>derecho fundamental</strong> de la persona trabajadora y una <strong>obligación irrenunciable</strong> del empresario.
              </p>
              <p>Se desarrolla mediante diversos reglamentos esenciales:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-700">
                <li><strong>RD 486/1997:</strong> Disposiciones mínimas de seguridad y salud en los lugares de trabajo.</li>
                <li><strong>RD 485/1997:</strong> Disposiciones mínimas sobre señalización de seguridad y salud (Apartado 3).</li>
                <li><strong>RD 773/1997:</strong> Utilización de equipos de protección individual (EPI) (Apartado 4).</li>
                <li><strong>RD 374/2001:</strong> Protección contra agentes químicos peligrosos.</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-200/80">
                <h4 className="text-sm font-bold text-teal-900 mb-2 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-teal-700" /> Derechos de las Personas Trabajadoras
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                  <li>A una protección eficaz frente a los riesgos del puesto.</li>
                  <li>A recibir información y formación teórica y práctica adecuada.</li>
                  <li>A la entrega gratuita de los equipos de protección necesarios.</li>
                  <li>A la vigilancia periódica de su salud mediante reconocimientos médicos.</li>
                  <li>Al cese de la actividad ante un riesgo grave e inminente comprobado.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-slate-700" /> Deberes de las Personas Trabajadoras
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                  <li>Cumplir las órdenes e instrucciones del empresario en prevención.</li>
                  <li>Usar correctamente máquinas, herramientas, sustancias y EPIs.</li>
                  <li>No anular ni desconectar dispositivos de seguridad ni resguardos.</li>
                  <li>Informar de inmediato de cualquier anomalía que entrañe peligro.</li>
                  <li>Cooperar con el empresario para garantizar un entorno seguro.</li>
                </ul>
              </div>
            </div>

            <PedagogicCallout type="caso" title="Caso Práctico: Negativa injustificada al uso de EPI">
              <strong>Marta, camarera de sala:</strong> La empresa le entrega calzado de trabajo antideslizante con suela certificada SRC. Si Marta decide acudir con calzado convencional "porque le gusta más su diseño" y sufre una caída por pavimento resbaladizo, comete un incumplimiento de sus deberes laborales (art. 29 LPRL). La prevención es corresponsabilidad de todos.
            </PedagogicCallout>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                1.3 Principios de la acción preventiva (Art. 15 LPRL)
              </h3>
              <p>El empresario está obligado por ley a aplicar las medidas preventivas siguiendo este riguroso orden jerárquico:</p>
              <ol className="list-decimal list-inside space-y-1.5 pl-2 text-slate-700">
                <li><strong>Evitar los riesgos:</strong> Eliminar el peligro desde el origen.</li>
                <li><strong>Evaluar los riesgos inevitables:</strong> Medir su magnitud objetiva.</li>
                <li><strong>Combatir los riesgos en su origen:</strong> Atacar la causa motriz, no el síntoma.</li>
                <li><strong>Adaptar el trabajo a la persona:</strong> Puestos ergonómicos y herramientas regulables.</li>
                <li><strong>Tener en cuenta la evolución de la técnica:</strong> Modernizar sistemas de protección.</li>
                <li><strong>Sustituir lo peligroso por lo inocuo:</strong> Cambiar disolventes nocivos por acuosos.</li>
                <li><strong>Planificar la prevención integrada:</strong> Cohesionar técnica, organización y ambiente.</li>
                <li><strong>Anteponer la protección colectiva a la individual:</strong> Una barandilla protege a todos; un arnés solo a quien lo porta.</li>
                <li><strong>Dar las debidas instrucciones a los trabajadores:</strong> Procedimientos claros.</li>
              </ol>
            </div>
          </div>

          <ActivitiesBlock
            sectionId="sec1"
            sectionNumber={1}
            activities={ACTIVITIES_BY_SECTION.sec1}
            onSectionScoreUpdate={handleSectionScoreUpdate}
          />
        </section>

        {/* =====================================================================
             APARTADO 2 · RIESGOS LABORALES Y SUS EFECTOS
        ===================================================================== */}
        <section
          id="sec2"
          className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-8 shadow-2xs transition-all"
        >
          <SectionHeader
            number="2"
            title="Los riesgos laborales y sus efectos sobre la salud"
            subtitle="Clasificación técnica · Contingencias profesionales · Ejemplos prácticos por sector"
          />

          <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4 text-slate-700">
            <p>
              Un riesgo laboral es la <strong>posibilidad contingente de que un trabajador sufra un daño físico o psíquico</strong> con motivo del trabajo. Los daños pueden manifestarse súbitamente como <strong>accidentes de trabajo</strong> o desarrollarse de manera progresiva e insidiosa como <strong>enfermedades profesionales</strong>.
            </p>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4 mb-2">
              2.1 Clasificación sistemática de riesgos laborales
            </h3>

            {/* Risk interactive grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-4">
              {RISK_CLASSIFICATION.map((risk) => (
                <div
                  key={risk.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-teal-300 transition-all shadow-2xs"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-sm text-slate-900">
                      Riesgos {risk.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-100/70 text-teal-800">
                      Factor Ocupacional
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-600">
                    <p>
                      <strong className="text-slate-800">Agentes causales:</strong> {risk.agents}
                    </p>
                    <p>
                      <strong className="text-slate-800">Efectos sobre la salud:</strong> {risk.effects}
                    </p>
                    <p className="text-teal-900 bg-teal-50/70 p-2 rounded-lg border border-teal-100">
                      <strong>Prevención:</strong> {risk.prevention}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <PedagogicCallout type="idea">
              El <strong>ruido continuo excesivo</strong> es la causa primaria de la <strong>hipoacusia laboral</strong> (una de las enfermedades profesionales con mayor incidencia reconocida). Del mismo modo, los <strong>sobreesfuerzos musculares</strong> provocan más del 30% de las bajas laborales anuales en España.
            </PedagogicCallout>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                2.2 Contingencias profesionales: Accidente de trabajo vs Enfermedad profesional
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    Accidente de Trabajo (AT)
                  </h4>
                  <p className="text-xs text-slate-600 mb-2">
                    Toda lesión corporal que el trabajador sufre con ocasión o por consecuencia del trabajo ejecutado por cuenta ajena (incluido el trayecto de ida y vuelta: <em>in itinere</em>).
                  </p>
                  <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                    Efecto inmediato y repentino (corte, fractura, caída).
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    Enfermedad Profesional (EP)
                  </h4>
                  <p className="text-xs text-slate-600 mb-2">
                    La contraída a consecuencia del trabajo por cuenta ajena provocada por la exposición continuada a elementos o sustancias tipificados en el cuadro legal del RD 1299/2006.
                  </p>
                  <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                    Efecto paulatino por acumulación prolongada (silicosis, tendinitis, asma).
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4 mb-2">
                2.3 Casos prácticos representativos por sector productivo
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
                {SECTOR_PRACTICAL_CASES.map((sec, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                        {sec.sector}
                      </h4>
                      <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                        {sec.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mb-2">
                      <strong className="text-slate-800">Riesgos típicos:</strong> {sec.risks}
                    </p>
                    <p className="text-xs text-teal-900 bg-teal-50/60 p-2 rounded-lg">
                      <strong>Medidas clave:</strong> {sec.measures}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ActivitiesBlock
            sectionId="sec2"
            sectionNumber={2}
            activities={ACTIVITIES_BY_SECTION.sec2}
            onSectionScoreUpdate={handleSectionScoreUpdate}
          />
        </section>

        {/* =====================================================================
             APARTADO 3 · SEÑALIZACIÓN DE SEGURIDAD (CON ICONOS MINIMALISTAS Y CTAs)
        ===================================================================== */}
        <section
          id="sec3"
          className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-8 shadow-2xs transition-all ring-1 ring-teal-100"
        >
          <SectionHeader
            number="3"
            title="Señalización de seguridad y salud en el trabajo"
            subtitle="RD 485/1997 · UNE-EN ISO 7010 · Catálogo interactivo con iconografía minimalista y llamadas a la acción"
          />

          {/* Minimalist modern signaling module replacing crude illustrations */}
          <SignalingSection />

          <ActivitiesBlock
            sectionId="sec3"
            sectionNumber={3}
            activities={ACTIVITIES_BY_SECTION.sec3}
            onSectionScoreUpdate={handleSectionScoreUpdate}
          />
        </section>

        {/* =====================================================================
             APARTADO 4 · EQUIPOS DE PROTECCIÓN INDIVIDUAL (EPI)
        ===================================================================== */}
        <section
          id="sec4"
          className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-8 shadow-2xs transition-all"
        >
          <SectionHeader
            number="4"
            title="Equipos de Protección Individual (EPI)"
            subtitle="RD 773/1997 · Marcado de conformidad CE · Catálogo anatómico y conservación"
          />

          <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4 text-slate-700">
            <p>
              Según el <strong>Real Decreto 773/1997</strong>, un <strong>Equipo de Protección Individual (EPI)</strong> es cualquier dispositivo o medio destinado a ser <strong>llevado o sujetado por el trabajador</strong> para que le proteja de uno o varios riesgos susceptibles de amenazar su seguridad o su salud.
            </p>

            <PedagogicCallout type="idea">
              El EPI constituye la <strong>última barrera defensiva</strong>: solo debe implantarse con carácter complementario cuando no resulte técnicamente viable eliminar el peligro o cuando las medidas de protección colectiva resulten insuficientes. El empresario tiene el deber inexcusable de facilitarlo de manera <strong>gratuita</strong>.
            </PedagogicCallout>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                4.1 Marcado CE y Requisitos de Calidad
              </h3>
              <p>
                Todo EPI debe exhibir obligatoriamente el <strong>marcado CE</strong> acreditando la conformidad con el Reglamento (UE) 2016/425, acompañándose de folleto informativo redactado en lengua española con las instrucciones de uso, nivel de protección y caducidad.
              </p>
            </div>

            {/* Interactive Anatomical Grid of PPE */}
            <EpiInteractiveGrid />

            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4 mb-2">
                4.2 Pautas de Mantenimiento y Sustitución
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span><strong>Inspección previa:</strong> Comprobar antes de cada postura ausencia de desgarros, fisuras o deformaciones.</span>
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span><strong>Limpieza adecuada:</strong> Seguir escrupulosamente las especificaciones del fabricante sin usar disolventes abrasivos.</span>
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span><strong>Sustitución inmediata:</strong> Desechar cualquier casco o arnés que haya amortiguado un impacto o caída previa.</span>
                </li>
                <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span><strong>Almacenamiento higiénico:</strong> Guardar en taquillas o bolsas resguardadas de la radiación solar y humedad.</span>
                </li>
              </ul>
            </div>
          </div>

          <ActivitiesBlock
            sectionId="sec4"
            sectionNumber={4}
            activities={ACTIVITIES_BY_SECTION.sec4}
            onSectionScoreUpdate={handleSectionScoreUpdate}
          />
        </section>

        {/* =====================================================================
             APARTADO 5 · ORGANIZACIÓN DE LA PREVENCIÓN EN LA EMPRESA
        ===================================================================== */}
        <section
          id="sec5"
          className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-8 shadow-2xs transition-all"
        >
          <SectionHeader
            number="5"
            title="Organización de la prevención en la empresa"
            subtitle="Servicios de prevención · Delegados de prevención · Comité de Seguridad y Salud"
          />

          <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4 text-slate-700">
            <p>
              La gestión de la prevención de riesgos es una <strong>responsabilidad originaria del empresario</strong>, quien debe estructurar los recursos humanos y materiales necesarios para garantizar la seguridad en todos los niveles jerárquicos de la empresa.
            </p>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-3 mb-2">
              5.1 Las 4 modalidades de organización de la prevención
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block text-xs sm:text-sm">
                  1. Servicio de Prevención Propio (SPP)
                </span>
                <p className="text-xs text-slate-600 mt-1">
                  Unidad integrada en la plantilla de la empresa con dedicación exclusiva. Obligatorio en centros de más de 500 trabajadores (o más de 250 en actividades de especial peligrosidad).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block text-xs sm:text-sm">
                  2. Servicio de Prevención Ajeno (SPA)
                </span>
                <p className="text-xs text-slate-600 mt-1">
                  Entidad especializada externa autorizada por la autoridad laboral contratada por la empresa para concertar las disciplinas preventivas. Muy común en pymes.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block text-xs sm:text-sm">
                  3. Servicio de Prevención Mancomunado
                </span>
                <p className="text-xs text-slate-600 mt-1">
                  Varias empresas pertenecientes a un mismo sector industrial, polígono o grupo societario comparten un equipo técnico multidisciplinar conjunto.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block text-xs sm:text-sm">
                  4. Asunción personal por el Empresario
                </span>
                <p className="text-xs text-slate-600 mt-1">
                  Permitido en microempresas de hasta 10 trabajadores (o hasta 25 si es un único centro) que no ejerzan actividades de alto riesgo, siempre que el empresario cuente con formación básica.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                5.2 Participación de los trabajadores: Órganos de representación
              </h3>
              <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200/80 space-y-2 text-xs sm:text-sm">
                <p>
                  <strong>Delegados de Prevención:</strong> Representantes electos por los trabajadores con competencias de control sobre las condiciones de seguridad. Su número escala según el volumen de plantilla:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold text-teal-950">
                  <div className="bg-white p-2 rounded-lg border border-teal-200 text-center">Hasta 30 trab.: <strong>1 delegado</strong></div>
                  <div className="bg-white p-2 rounded-lg border border-teal-200 text-center">31 a 49 trab.: <strong>2 delegados</strong></div>
                  <div className="bg-white p-2 rounded-lg border border-teal-200 text-center">50 a 99 trab.: <strong>3 delegados</strong></div>
                  <div className="bg-white p-2 rounded-lg border border-teal-200 text-center">100 a 199 trab.: <strong>4 delegados</strong></div>
                </div>
                <p className="mt-2 pt-2 border-t border-teal-200 text-xs">
                  <strong>Comité de Seguridad y Salud:</strong> Órgano colegiado y paritario (50% representación empresarial y 50% delegados de prevención) de constitución obligatoria en todas las empresas o centros que alcancen <strong>50 o más trabajadores</strong>.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                5.3 Los 3 Documentos Instrumentales de la Prevención
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <strong className="text-slate-900 block mb-1">Plan de Prevención</strong>
                  <span>Documento de gestión que integra la prevención en el organigrama funcional y jerárquico de la empresa.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <strong className="text-slate-900 block mb-1">Evaluación de Riesgos</strong>
                  <span>Diagnóstico técnico inicial y periódico que analiza cada puesto de trabajo identificando riesgos y estimando su severidad.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <strong className="text-slate-900 block mb-1">Planificación Preventiva</strong>
                  <span>Cronograma operativo de medidas correctoras, inversiones presupuestarias, plazos y responsables asignados.</span>
                </div>
              </div>
            </div>
          </div>

          <ActivitiesBlock
            sectionId="sec5"
            sectionNumber={5}
            activities={ACTIVITIES_BY_SECTION.sec5}
            onSectionScoreUpdate={handleSectionScoreUpdate}
          />
        </section>

        {/* =====================================================================
             APARTADO 6 · EMERGENCIAS, EVACUACIÓN Y PRIMEROS AUXILIOS
        ===================================================================== */}
        <section
          id="sec6"
          className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-8 shadow-2xs transition-all"
        >
          <SectionHeader
            number="6"
            title="Emergencias, evacuación y primeros auxilios"
            subtitle="Plan de autoprotección · Conducta PAS · Evacuación ordenada y simulacros"
          />

          <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4 text-slate-700">
            <p>
              Una emergencia laboral es cualquier contingencia anómala imprevista (incendio, fuga química, explosión o amenaza) que pone en peligro inminente la integridad de las personas e instalaciones. Toda empresa debe disponer de un <strong>Plan de Autoprotección o Medidas de Emergencia</strong> estructurado.
            </p>

            {/* Protocol PAS Interactive Visual */}
            <div className="my-5 p-5 rounded-2xl bg-teal-900 text-white shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-teal-200 mb-1 flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-teal-400" />
                La Regla de Oro en Emergencias: Conducta PAS
              </h3>
              <p className="text-xs text-teal-100/90 mb-4">
                Ante cualquier siniestro o persona accidentada, el orden de actuación inquebrantable es siempre Proteger → Avisar → Socorrer.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-teal-700/50">
                  <div className="w-8 h-8 rounded-lg bg-teal-600 text-white font-extrabold flex items-center justify-center text-sm mb-2">
                    1. P
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">Proteger</h4>
                  <p className="text-xs text-slate-300">
                    Asegurar el escenario y neutralizar el peligro antes de intervenir (cortar suministro eléctrico, ventilar, señalizar) para no sumar más víctimas.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-teal-700/50">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-extrabold flex items-center justify-center text-sm mb-2">
                    2. A
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">Avisar (112)</h4>
                  <p className="text-xs text-slate-300">
                    Llamar de inmediato al 112 indicando con calma: ubicación precisa, tipo de suceso, número de víctimas y estado aparente. Nunca colgar primero.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-teal-700/50">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 font-extrabold flex items-center justify-center text-sm mb-2">
                    3. S
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">Socorrer</h4>
                  <p className="text-xs text-slate-300">
                    Prestar auxilio elemental manteniendo a la víctima abrigada y sin moverla ante sospecha de fractura de columna, aplicando soporte vital básico.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                6.1 Pautas Esenciales de Evacuación del Edificio
              </h3>
              <ol className="list-decimal list-inside space-y-1.5 pl-2 text-slate-700">
                <li><strong>Compostura y serenidad:</strong> No gritar, no correr ni empujar a los compañeros.</li>
                <li><strong>Salidas de socorro:</strong> Seguir las señales fotoluminiscentes verdes hacia la salida más próxima.</li>
                <li><strong>Prohibición terminante de ascensores:</strong> Utilizar siempre las escaleras de emergencia contra incendios.</li>
                <li><strong>No retroceder:</strong> Jamás regresar a recuperar objetos personales o herramientas.</li>
                <li><strong>Punto de encuentro exterior:</strong> Permanecer en la zona delimitada hasta que se verifique el recuento de personal.</li>
              </ol>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4 mb-2">
                6.2 Primeros Auxilios: Protocolos Frecuentes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Hemorragias externas:</strong>
                  <span>Compresión directa continua sobre la herida con gasas estériles durante 10 minutos y elevación del miembro afectado.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Quemaduras térmicas:</strong>
                  <span>Irrigar de inmediato con abundante agua corriente fresca (15-20 min). Jamás pinchar ampollas ni aplicar pomadas caseras.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Persona inconsciente que respira:</strong>
                  <span>Colocar cuidadosamente en Posición Lateral de Seguridad (PLS) para prevenir atragantamientos por vómito o lengua.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Parada cardiorrespiratoria (no respira):</strong>
                  <span>Iniciar compresiones torácicas rítmicas a 100-120 lpm en el centro del pecho y solicitar un desfibrilador (DEA).</span>
                </div>
              </div>
            </div>
          </div>

          <ActivitiesBlock
            sectionId="sec6"
            sectionNumber={6}
            activities={ACTIVITIES_BY_SECTION.sec6}
            onSectionScoreUpdate={handleSectionScoreUpdate}
          />
        </section>

        {/* =====================================================================
             RECURSOS MULTIMEDIA Y ENLACES OFICIALES
        ===================================================================== */}
        <section
          id="recursos"
          className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-8 shadow-2xs transition-all"
        >
          <SectionHeader
            number="🎥"
            title="Recursos audiovisuales y sedes oficiales"
            subtitle="Vídeos didácticos curados · Organismos de tutela de la prevención en España"
          />

          <ResourcesSection />
        </section>

        {/* =====================================================================
             EVALUACIÓN FINAL DE LA UNIDAD
        ===================================================================== */}
        <section
          id="evaluacion"
          className="bg-white rounded-2xl border-2 border-teal-700/80 p-5 sm:p-8 shadow-sm transition-all"
        >
          <SectionHeader
            number="🏆"
            title="Evaluación final de la unidad didáctica"
            subtitle="Batería de 10 ejercicios · Corrección inmediata · Generación de informe y envío al docente"
          />

          <FinalEvaluation />
        </section>
      </main>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          id="volverArriba"
          title="Volver arriba"
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-teal-800 text-white shadow-lg hover:bg-teal-900 hover:scale-105 transition-all flex items-center justify-center"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Modern Educational Footer */}
      <Footer />
    </div>
  );
}
