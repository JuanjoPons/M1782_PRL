import { RiskItem, EpiItem, VideoResource, OfficialLink } from '../types';

export const RISK_CLASSIFICATION: RiskItem[] = [
  {
    id: 'risk-fisicos',
    category: 'Físicos',
    agents: 'Ruido elevado, vibraciones mecánicas, temperaturas extremas (calor/frío), radiaciones, iluminación insuficiente.',
    effects: 'Hipoacusia o sordera profesional, estrés térmico, fatiga visual, cefaleas, síndrome de dedos blancos.',
    prevention: 'Insonorización de fuentes, rotación de puestos, protectores auditivos (SNR), climatización adecuada y pausas.',
    icon: 'Activity'
  },
  {
    id: 'risk-quimicos',
    category: 'Químicos',
    agents: 'Polvos, humos de combustión, vapores de disolventes, gases tóxicos, productos de limpieza industrial, reactivos.',
    effects: 'Irritación de vías respiratorias y piel, intoxicaciones agudas o crónicas, quemaduras químicas, sensibilizaciones y alergias.',
    prevention: 'Sustitución por sustancias inocuas, campanas de extracción localizada, lectura de fichas FDS, guantes y mascarillas con filtro.',
    icon: 'FlaskConical'
  },
  {
    id: 'risk-biologicos',
    category: 'Biológicos',
    agents: 'Virus, bacterias, hongos patógenos, parásitos, restos orgánicos de alimentos, aguas residuales.',
    effects: 'Infecciones, tétanos, hepatitis, micosis cutáneas, enfermedades zoonóticas y cuadros alérgicos.',
    prevention: 'Protocolos de higiene y lavado de manos, vacunación laboral recomendada, recipientes herméticos y EPI impermeable.',
    icon: 'Biohazard'
  },
  {
    id: 'risk-ergonomicos',
    category: 'Ergonomía y carga física',
    agents: 'Levantamiento de cargas pesadas, posturas forzadas o estáticas prolongadas, movimientos repetitivos en cadena.',
    effects: 'Trastornos musculoesqueléticos (TME), lumbalgias agudas, hernias discales, tendinitis y síndrome del túnel carpiano.',
    prevention: 'Uso de medios mecánicos auxiliares (carros, transpaletas), técnica correcta de flexión de rodillas, rotación de tareas.',
    icon: 'UserCheck'
  },
  {
    id: 'risk-psicosociales',
    category: 'Psicosociales',
    agents: 'Sobrecarga de trabajo, ritmos frenéticos, turnos rotativos nocturnos, ambigüedad de rol, trato conflictivo con público.',
    effects: 'Estrés laboral crónico, ansiedad, depresión, insomnio, hipertensión arterial, síndrome de desgaste profesional (burnout).',
    prevention: 'Planificación equilibrada de tiempos, pausas programadas, fomento del apoyo entre compañeros y desconexión digital.',
    icon: 'Brain'
  },
  {
    id: 'risk-mecanicos',
    category: 'Mecánicos y caídas',
    agents: 'Máquinas con partes móviles descubiertas, herramientas de corte, desniveles, escaleras, suelos resbaladizos.',
    effects: 'Cortes, amputaciones, atrapamientos de miembros, fracturas óseas por caída a distinto nivel o resbalones.',
    prevention: 'Instalación de resguardos y dobles mandos en máquinas, orden y limpieza (metodología 5S), calzado antideslizante.',
    icon: 'Wrench'
  },
  {
    id: 'risk-electricos',
    category: 'Eléctricos',
    agents: 'Contactos directos con cables pelados, contactos indirectos con carcasas de maquinaria en tensión, sobrecargas.',
    effects: 'Tetanización muscular, quemaduras internas o externas graves, fibrilación ventricular y muerte por electrocución.',
    prevention: 'Mantenimiento preventivo, aislamiento eléctrico, puesta a tierra y diferenciales de alta sensibilidad, 5 reglas de oro.',
    icon: 'Zap'
  },
  {
    id: 'risk-incendios',
    category: 'Incendios y explosiones',
    agents: 'Almacenamiento indebido de inflamables, focos de ignición cerca de vapores, sobrecalentamiento de instalaciones.',
    effects: 'Quemaduras de 2º y 3er grado, intoxicación por inhalación de monóxido de carbono y humos densos, politraumatismos.',
    prevention: 'Segregación de comburentes e inflamables, extintores revisados y accesibles, pulsadores de alarma y simulacros periódicos.',
    icon: 'Flame'
  }
];

export const SECTOR_PRACTICAL_CASES = [
  {
    sector: 'Hostelería, Cocina y Restauración',
    icon: 'Utensils',
    badge: 'Sector Servicios',
    risks: 'Cortes profundos con cuchillos, quemaduras con aceite de freidoras, resbalones por grasa o agua en suelos de cocina, estrés en horas punta de servicio.',
    measures: 'Uso ineludible de guantes de malla metálica en operaciones de deshuese y corte, calzado con suela antideslizante certificada, drenaje y secado inmediato de derrames, formación continua en manipulación de alimentos.'
  },
  {
    sector: 'Logística, Almacén y Automoción',
    icon: 'Package',
    badge: 'Sector Industrial',
    risks: 'Sobrecargas dorsolumbares al estibar bultos, atropellos o atrapamientos en cruces de carretillas elevadoras, caída de objetos desde estanterías industriales altas.',
    measures: 'Priorización obligatoria de transpaletas eléctricas y polipastos, calzado de seguridad S3 con puntera de acero y suela antiperforación, chalecos de alta visibilidad clase 2 y delimitación pintada de sendas peatonales.'
  },
  {
    sector: 'Jardinería, Mantenimiento y Campo',
    icon: 'Trees',
    badge: 'Sector Agrario',
    risks: 'Cortes por sierras mecánicas y desbrozadoras, proyección de piedras a los ojos, exposición a radiación solar intensa, contacto con fitosanitarios y pesticidas.',
    measures: 'Pantalones de seguridad con fibras anticorte, pantalla facial combinada con gafas, protectores auditivos de atenuación, aplicación de crema solar con filtro UV50, lectura rigurosa de las etiquetas FDS antes de mezclar caldos.'
  },
  {
    sector: 'Oficinas, Comercio y Administración',
    icon: 'Monitor',
    badge: 'Sector Terciario',
    risks: 'Fatiga visual por reflejos en pantallas de visualización de datos (PVD), dolores cervicales por sedentarismo continuado, estrés organizativo y síndrome de túnel carpiano.',
    measures: 'Ajuste ergonómico del puesto (borde superior de la pantalla a nivel de ojos, pies apoyados en suelo o reposapiés), pausas activas de estiramiento de 5 minutos cada dos horas, iluminación indirecta antideslumbrante.'
  }
];

export const EPI_CATALOG: EpiItem[] = [
  {
    id: 'epi-cabeza',
    zone: 'Cabeza',
    name: 'Casco de protección industrial y gorras antigolpe',
    examples: ['Casco homologado con arnés textil y barboquejo', 'Gorra con casquete interior de protección ante choques'],
    protectsFrom: 'Caída de herramientas y materiales desde planos superiores, impactos contra vigas o salientes bajos, contacto eléctrico accidental.',
    iconName: 'HardHat',
    standards: 'UNE-EN 397 (Cascos de seguridad) · UNE-EN 812 (Cascos antigolpe)',
    tip: 'Reemplazar inmediatamente si recibe un impacto fuerte, aunque exteriormente no muestre grietas; el plástico interno pierde absorción.'
  },
  {
    id: 'epi-ojos',
    zone: 'Ojos y Rostro',
    name: 'Gafas de montura universal / integral y pantallas faciales',
    examples: ['Gafas envolventes antiimpacto', 'Gafas estancas contra salpicaduras químicas líquidas', 'Pantallas de soldador abatibles'],
    protectsFrom: 'Proyección violenta de virutas mecánicas, chispas, salpicaduras de agentes corrosivos cáusticos y radiación ultravioleta.',
    iconName: 'Glasses',
    standards: 'UNE-EN 166 (Especificaciones generales) · Marcado de montura y ocular clase 1B/3',
    tip: 'Limpiar con bayetas de microfibra y jabón neutro; jamás frotar en seco con la ropa para evitar rayaduras que degraden la visibilidad.'
  },
  {
    id: 'epi-oidos',
    zone: 'Aparato Auditivo',
    name: 'Protectores auditivos: tapones y orejeras atenuadoras',
    examples: ['Tapones de espuma conformable desechables', 'Tapones de silicona reutilizables con cordón', 'Orejeras acoplables a casco'],
    protectsFrom: 'Niveles de presión sonora continuos superiores a 80-85 dB(A) y picos de impacto que provocan sordera permanente e hipoacusia.',
    iconName: 'Headphones',
    standards: 'UNE-EN 352-1 (Orejeras) · UNE-EN 352-2 (Tapones)',
    tip: 'Para insertar los tapones de espuma, enrollarlos suavemente entre los dedos, tirar de la oreja hacia arriba y atrás, e introducirlos hasta que expandan.'
  },
  {
    id: 'epi-respiratorio',
    zone: 'Vías Respiratorias',
    name: 'Mascarillas autofiltrantes y semimáscaras con filtros intercambiables',
    examples: ['Mascarillas FFP1 (polvo inocuo)', 'Mascarillas FFP2 (polvo tóxico, humos, aerosoles)', 'Mascarillas FFP3 (altamente tóxico, amianto)', 'Semimáscaras con cartuchos de carbón activo ABEK'],
    protectsFrom: 'Inhalación de polvos finos minerales, humos de soldadura, nieblas de pintura y vapores orgánicos volátiles perjudiciales.',
    iconName: 'Wind',
    standards: 'UNE-EN 149 (Mascarillas autofiltrantes) · UNE-EN 140 (Semimáscaras)',
    tip: 'Comprobar siempre el ajuste facial: una barba de varios días impide el sellado estanco periférico y permite la entrada directa de contaminantes.'
  },
  {
    id: 'epi-manos',
    zone: 'Manos y Brazos',
    name: 'Guantes de seguridad según riesgo mecánico, químico o térmico',
    examples: ['Guantes de nitrilo o neopreno estancos', 'Guantes con refuerzo de cuero descarne', 'Guantes de malla metálica anticorte para cuchillos', 'Guantes dieléctricos para electricistas'],
    protectsFrom: 'Cortes por filos, pinchazos, abrasión abrasiva, quemaduras térmicas y penetración de disolventes a través de los poros cutáneos.',
    iconName: 'HandMetal',
    standards: 'UNE-EN 388 (Riesgos mecánicos) · UNE-EN ISO 374 (Riesgos químicos) · UNE-EN 407 (Calor)',
    tip: 'Verificar los pictogramas grabados en el dorso del guante que indican con números la resistencia exacta a la abrasión, corte, desgarro y perforación.'
  },
  {
    id: 'epi-pies',
    zone: 'Pies y Extremidades',
    name: 'Calzado de seguridad industrial homologado (S1P / S3)',
    examples: ['Zapatos y botas con puntera reforzada de 200J', 'Plantilla antiperforación textil o de acero', 'Suela de poliuretano antideslizante (SRC)'],
    protectsFrom: 'Aplastamiento por caída de objetos pesados, perforación plantar al pisar clavos o puntas, resbalones en pavimentos aceitosos.',
    iconName: 'Footprints',
    standards: 'UNE-EN ISO 20345 (Calzado de seguridad)',
    tip: 'El calzado debe cambiarse periódicamente cuando la suela presente desgaste en el dibujo estriado o cuando la piel exterior se cuartee.'
  },
  {
    id: 'epi-cuerpo',
    zone: 'Cuerpo y Tronco',
    name: 'Ropa de protección, monos y chalecos de alta visibilidad',
    examples: ['Chalecos reflectantes certificados clase 2', 'Monos de protección química tipo 5/6', 'Mandiles de cuero para soldadura'],
    protectsFrom: 'Atropellos por falta de visibilidad en entornos con maquinaria, impregnación por sustancias químicas líquidas y proyecciones de chispas.',
    iconName: 'Shirt',
    standards: 'UNE-EN ISO 20471 (Alta visibilidad) · UNE-EN 13034 (Protección química ligera)',
    tip: 'No lavar la ropa de alta visibilidad con detergentes agresivos que degraden las bandas retrorreflectantes fluorescentes.'
  },
  {
    id: 'epi-caidas',
    zone: 'Trabajos en Altura',
    name: 'Arneses anticaídas, líneas de vida y absorbedores de energía',
    examples: ['Arnés dorsal y esternal de sujeción', 'Elemento de amarre con absorbedor de energía de impacto', 'Dispositivo anticaídas retráctil'],
    protectsFrom: 'Caídas a distinto nivel desde andamios, cubiertas, plataformas elevadoras o escaleras fijas de acceso.',
    iconName: 'LifeBuoy',
    standards: 'UNE-EN 361 (Arneses anticaídas) · UNE-EN 355 (Absorbedores de energía)',
    tip: 'Anclarse siempre por encima del nivel de la cabeza a puntos estructurales certificados (resistencia mínima de 12 kN).'
  }
];

export const VIDEO_RESOURCES: VideoResource[] = [
  {
    id: 'vid-1',
    title: 'El Plan de Prevención de Riesgos Laborales',
    desc: 'Conceptos fundamentales de la PRL, integración preventiva en la empresa, derechos y obligaciones básicas.',
    youtubeId: 'mOF_C0v3Fgo',
    directUrl: 'https://www.youtube.com/watch?v=mOF_C0v3Fgo',
    source: 'IPE Lecciones PRL',
    duration: '6 min'
  },
  {
    id: 'vid-2',
    title: 'Clasificación de Riesgos Laborales en el Trabajo',
    desc: 'Definición, características y desglose de riesgos físicos, químicos, biológicos, ergonómicos y psicosociales.',
    youtubeId: 'G5QQSdOCZQQ',
    directUrl: 'https://www.youtube.com/watch?v=G5QQSdOCZQQ',
    source: 'Formación Preventiva',
    duration: '10 min'
  },
  {
    id: 'vid-3',
    title: 'Código de Señalización de Seguridad en el Trabajo',
    desc: 'Guía visual completa sobre colores de seguridad, formas geométricas y pictogramas normalizados de advertencia, prohibición y salvamento.',
    youtubeId: 'RYNf-xLDppg',
    directUrl: 'https://www.youtube.com/watch?v=RYNf-xLDppg',
    source: 'Serpresur PRL',
    duration: '5 min'
  },
  {
    id: 'vid-4',
    title: 'Buen Uso de los Equipos de Protección Individual (EPI)',
    desc: 'Cómo verificar el marcado CE, ajustar el equipo individual y mantenerlo en óptimas condiciones de protección frente a riesgos.',
    youtubeId: 'G6BZaxUK3K8',
    directUrl: 'https://www.youtube.com/watch?v=G6BZaxUK3K8',
    source: 'Seguridad Laboral',
    duration: '7 min'
  },
  {
    id: 'vid-5',
    title: 'Plan de Emergencia y Evacuación en la Empresa',
    desc: 'Pasos para evacuar con orden, interpretar las salidas de emergencia y coordinarse en el punto de encuentro exterior.',
    youtubeId: 'FJF03a8WU-I',
    directUrl: 'https://www.youtube.com/watch?v=FJF03a8WU-I',
    source: 'Emergencias y Evacuación',
    duration: '8 min'
  },
  {
    id: 'vid-6',
    title: 'Primeros Auxilios: Conducta PAS y Valoración Inicial',
    desc: 'Protocolo de actuación de emergencia explicado por Cruz Roja: Proteger, Avisar al 112 y Socorrer con soporte vital básico.',
    youtubeId: 'fUh1k5SmlxM',
    directUrl: 'https://www.youtube.com/watch?v=fUh1k5SmlxM',
    source: 'Cruz Roja',
    duration: '9 min'
  }
];

export const OFFICIAL_LINKS: OfficialLink[] = [
  {
    title: 'Instituto Nacional de Seguridad y Salud en el Trabajo',
    entity: 'INSST · Ministerio de Trabajo',
    desc: 'Organismo científico y técnico de referencia en España. Dispone de guías técnicas, notas técnicas de prevención (NTP) y campañas formativas.',
    url: 'https://www.insst.es',
    badge: 'Referente Técnico'
  },
  {
    title: 'Ley 31/1995 de Prevención de Riesgos Laborales',
    entity: 'Boletín Oficial del Estado (BOE)',
    desc: 'Texto íntegro, actualizado y consolidado de la legislación fundamental que tutela la seguridad y la salud de los trabajadores en España.',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292',
    badge: 'Legislación Oficial'
  },
  {
    title: 'Seguridad Social: Contingencias Profesionales',
    entity: 'Tesorería General de la Seguridad Social',
    desc: 'Información sobre prestaciones por incapacidad temporal y permanente derivadas de accidentes de trabajo o enfermedades profesionales.',
    url: 'https://www.seg-social.es',
    badge: 'Prestaciones y Salud'
  },
  {
    title: 'Centro de Emergencias 112',
    entity: 'Servicios de Emergencia 112',
    desc: 'Información y protocolos sobre el teléfono de atención a urgencias sanitarias, extinción de incendios, rescate y protección civil.',
    url: 'https://112.es',
    badge: 'Emergencias 24/7'
  },
  {
    title: 'SEPE · Formación y Empleabilidad',
    entity: 'Servicio Público de Empleo Estatal',
    desc: 'Portal de itinerarios formativos para la mejora de la empleabilidad de los jóvenes y alumnos de formación profesional.',
    url: 'https://www.sepe.es',
    badge: 'Empleo y FP'
  },
  {
    title: 'Inspección de Trabajo y Seguridad Social',
    entity: 'ITSS · Ministerio de Trabajo',
    desc: 'Órgano encargado de vigilar el estricto cumplimiento de las normas de seguridad y salud laboral y sancionar infracciones.',
    url: 'https://www.mites.gob.es/itss/web/index.html',
    badge: 'Control y Fiscalización'
  }
];
