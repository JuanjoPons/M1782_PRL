import { SafetySign } from '../types';

export const SIGN_CATEGORIES = [
  { id: 'all', label: 'Todas las señales', count: 28 },
  { id: 'advertencia', label: 'Advertencia', color: 'amber', shape: 'Triángulo amarillo', count: 6 },
  { id: 'prohibicion', label: 'Prohibición', color: 'rose', shape: 'Círculo rojo', count: 6 },
  { id: 'obligacion', label: 'Obligación', color: 'blue', shape: 'Círculo azul', count: 6 },
  { id: 'salvamento', label: 'Salvamento y Socorro', color: 'emerald', shape: 'Rectángulo verde', count: 5 },
  { id: 'incendios', label: 'Lucha contra incendios', color: 'red', shape: 'Rectángulo rojo', count: 3 },
  { id: 'adr', label: 'Mercancías ADR', color: 'orange', shape: 'Rombo ADR', count: 6 }
] as const;

export const SAFETY_SIGNS: SafetySign[] = [
  // --- ADVERTENCIA (Triángulo amarillo, borde negro, pictograma negro) ---
  {
    id: 'w-012',
    code: 'W012',
    name: 'Peligro: Riesgo eléctrico',
    category: 'advertencia',
    categoryLabel: 'Señal de Advertencia',
    shape: 'triangulo',
    description: 'Avisa de la presencia de alta tensión o componentes energizados susceptibles de provocar choque eléctrico.',
    workplaceAction: 'No manipular cuadros ni cables sin autorización. Cortar el suministro antes de intervenir y respetar las 5 reglas de oro.',
    normative: 'RD 485/1997 · UNE-EN ISO 7010: W012',
    iconName: 'Zap',
    colorScheme: {
      bg: 'bg-amber-500/10 text-amber-600',
      border: 'border-amber-400',
      text: 'text-amber-950',
      badge: 'bg-amber-100 text-amber-800'
    }
  },
  {
    id: 'w-021',
    code: 'W021',
    name: 'Peligro: Materias inflamables',
    category: 'advertencia',
    categoryLabel: 'Señal de Advertencia',
    shape: 'triangulo',
    description: 'Indica la presencia de sustancias líquidas, gaseosas o sólidas con bajo punto de ignición propensas al fuego.',
    workplaceAction: 'Prohibido generar chispas, llamas desnudas o fumar en el entorno. Mantener en recipientes cerrados y ventilados.',
    normative: 'RD 485/1997 · UNE-EN ISO 7010: W021',
    iconName: 'Flame',
    colorScheme: {
      bg: 'bg-amber-500/10 text-amber-600',
      border: 'border-amber-400',
      text: 'text-amber-950',
      badge: 'bg-amber-100 text-amber-800'
    }
  },
  {
    id: 'w-007',
    code: 'W007',
    name: 'Peligro: Suelo resbaladizo',
    category: 'advertencia',
    categoryLabel: 'Señal de Advertencia',
    shape: 'triangulo',
    description: 'Advierte de superficies húmedas, grasientas o pulidas que incrementan sustancialmente el riesgo de caída al mismo nivel.',
    workplaceAction: 'Caminar con precaución a paso firme, sin correr. Utilizar calzado de trabajo antideslizante certificado (SRC).',
    normative: 'RD 485/1997 · UNE-EN ISO 7010: W007',
    iconName: 'Footprints',
    colorScheme: {
      bg: 'bg-amber-500/10 text-amber-600',
      border: 'border-amber-400',
      text: 'text-amber-950',
      badge: 'bg-amber-100 text-amber-800'
    }
  },
  {
    id: 'w-009',
    code: 'W009',
    name: 'Peligro: Riesgo biológico',
    category: 'advertencia',
    categoryLabel: 'Señal de Advertencia',
    shape: 'triangulo',
    description: 'Presencia de virus, bacterias, hongos o cultivos celulares con potencial infeccioso o transmisible.',
    workplaceAction: 'Restringir el acceso a personal cualificado. Emplear guantes impermeables, mascarilla adecuada y desechar residuos en contenedores homologados.',
    normative: 'RD 485/1997 · RD 664/1997 · ISO 7010: W009',
    iconName: 'Biohazard',
    colorScheme: {
      bg: 'bg-amber-500/10 text-amber-600',
      border: 'border-amber-400',
      text: 'text-amber-950',
      badge: 'bg-amber-100 text-amber-800'
    }
  },
  {
    id: 'w-016',
    code: 'W016',
    name: 'Peligro: Sustancias tóxicas',
    category: 'advertencia',
    categoryLabel: 'Señal de Advertencia',
    shape: 'triangulo',
    description: 'Materias o preparados que por inhalación, ingestión o penetración cutánea pueden entrañar riesgos graves o mortales.',
    workplaceAction: 'Manipular exclusivamente bajo campana de extracción o con ventilación forzada. Utilizar mascarilla con filtro específico para vapores/polvo.',
    normative: 'RD 485/1997 · RD 374/2001 · ISO 7010: W016',
    iconName: 'Skull',
    colorScheme: {
      bg: 'bg-amber-500/10 text-amber-600',
      border: 'border-amber-400',
      text: 'text-amber-950',
      badge: 'bg-amber-100 text-amber-800'
    }
  },
  {
    id: 'w-001',
    code: 'W001',
    name: 'Peligro en general / Atención',
    category: 'advertencia',
    categoryLabel: 'Señal de Advertencia',
    shape: 'triangulo',
    description: 'Indica una situación de riesgo no cubierta por un pictograma específico, requiriendo atención prioritaria.',
    workplaceAction: 'Consultar el panel complementario de texto adjunto para identificar la naturaleza exacta del riesgo y extremar la atención.',
    normative: 'RD 485/1997 · ISO 7010: W001',
    iconName: 'AlertTriangle',
    colorScheme: {
      bg: 'bg-amber-500/10 text-amber-600',
      border: 'border-amber-400',
      text: 'text-amber-950',
      badge: 'bg-amber-100 text-amber-800'
    }
  },

  // --- PROHIBICIÓN (Círculo rojo con banda transversal diagonal) ---
  {
    id: 'p-002',
    code: 'P002',
    name: 'Prohibido fumar',
    category: 'prohibicion',
    categoryLabel: 'Señal de Prohibición',
    shape: 'circulo',
    description: 'Prohíbe encender cigarrillos o artefactos que generen brasas o combustión en el recinto.',
    workplaceAction: 'Extinguir cualquier fuente de ignición antes de ingresar. Conforme a la Ley 28/2005 y por seguridad laboral.',
    normative: 'RD 485/1997 · UNE-EN ISO 7010: P002',
    iconName: 'CigaretteOff',
    colorScheme: {
      bg: 'bg-rose-500/10 text-rose-600',
      border: 'border-rose-300',
      text: 'text-rose-950',
      badge: 'bg-rose-100 text-rose-800'
    }
  },
  {
    id: 'p-004',
    code: 'P004',
    name: 'Entrada prohibida a peatones / personal',
    category: 'prohibicion',
    categoryLabel: 'Señal de Prohibición',
    shape: 'circulo',
    description: 'Restringe el acceso físico a zonas con maniobras de maquinaria pesada, áreas de riesgo o instalaciones técnicas reservadas.',
    workplaceAction: 'No rebasar la delimitación. Utilizar exclusivamente los pasillos peatonales señalizados o solicitar autorización previa.',
    normative: 'RD 485/1997 · UNE-EN ISO 7010: P004',
    iconName: 'UserX',
    colorScheme: {
      bg: 'bg-rose-500/10 text-rose-600',
      border: 'border-rose-300',
      text: 'text-rose-950',
      badge: 'bg-rose-100 text-rose-800'
    }
  },
  {
    id: 'p-010',
    code: 'P010',
    name: 'No tocar / Superficie peligrosa',
    category: 'prohibicion',
    categoryLabel: 'Señal de Prohibición',
    shape: 'circulo',
    description: 'Prohíbe el contacto manual directo con partes calientes, elementos móviles cortantes o componentes bajo tensión.',
    workplaceAction: 'Mantener distancia prudencial. No manipular protecciones mecánicas ni retirar carcasas mientras la máquina esté conectada.',
    normative: 'RD 485/1997 · UNE-EN ISO 7010: P010',
    iconName: 'Hand',
    colorScheme: {
      bg: 'bg-rose-500/10 text-rose-600',
      border: 'border-rose-300',
      text: 'text-rose-950',
      badge: 'bg-rose-100 text-rose-800'
    }
  },
  {
    id: 'p-011',
    code: 'P011',
    name: 'Prohibido apagar con agua',
    category: 'prohibicion',
    categoryLabel: 'Señal de Prohibición',
    shape: 'circulo',
    description: 'Presencia de fuegos de metales o cuadros eléctricos donde el agua genera descargas letales o reacciones exotérmicas violentas.',
    workplaceAction: 'Utilizar exclusivamente extintores de CO2 (nieve carbónica) o polvo químico seco ABC según el tipo de fuego.',
    normative: 'RD 485/1997 · ISO 7010: P011',
    iconName: 'Droplets',
    colorScheme: {
      bg: 'bg-rose-500/10 text-rose-600',
      border: 'border-rose-300',
      text: 'text-rose-950',
      badge: 'bg-rose-100 text-rose-800'
    }
  },
  {
    id: 'p-005',
    code: 'P005',
    name: 'Agua no potable',
    category: 'prohibicion',
    categoryLabel: 'Señal de Prohibición',
    shape: 'circulo',
    description: 'Fuentes, mangueras o tomas cuyo líquido procede de circuitos industriales, pozos sin depurar o sistemas contraincendios.',
    workplaceAction: 'No ingerir bajo ninguna circunstancia ni utilizar para lavado bucal o higienización de alimentos.',
    normative: 'RD 485/1997 · ISO 7010: P005',
    iconName: 'GlassWater',
    colorScheme: {
      bg: 'bg-rose-500/10 text-rose-600',
      border: 'border-rose-300',
      text: 'text-rose-950',
      badge: 'bg-rose-100 text-rose-800'
    }
  },
  {
    id: 'p-006',
    code: 'P006',
    name: 'Prohibido a vehículos de manutención',
    category: 'prohibicion',
    categoryLabel: 'Señal de Prohibición',
    shape: 'circulo',
    description: 'Vía o pasillo exclusivo para peatones donde no está permitido el paso de carretillas elevadoras o transpaletas.',
    workplaceAction: 'Los operadores de carretillas deben buscar vías alternativas debidamente balizadas para tráfico rodado.',
    normative: 'RD 485/1997 · ISO 7010: P006',
    iconName: 'Truck',
    colorScheme: {
      bg: 'bg-rose-500/10 text-rose-600',
      border: 'border-rose-300',
      text: 'text-rose-950',
      badge: 'bg-rose-100 text-rose-800'
    }
  },

  // --- OBLIGACIÓN (Círculo azul con pictograma blanco) ---
  {
    id: 'm-014',
    code: 'M014',
    name: 'Uso obligatorio de casco de seguridad',
    category: 'obligacion',
    categoryLabel: 'Señal de Obligación',
    shape: 'circulo',
    description: 'Prescribe la protección craneal ante posibles caídas de objetos desde altura, cargas suspendidas o golpes en techos bajos.',
    workplaceAction: 'Colocarse casco homologado EN 397 con el barboquejo ajustado antes de cruzar la línea de demarcación.',
    normative: 'RD 485/1997 · RD 773/1997 · ISO 7010: M014',
    iconName: 'HardHat',
    colorScheme: {
      bg: 'bg-sky-500/10 text-sky-600',
      border: 'border-sky-300',
      text: 'text-sky-950',
      badge: 'bg-sky-100 text-sky-800'
    }
  },
  {
    id: 'm-009',
    code: 'M009',
    name: 'Uso obligatorio de guantes de protección',
    category: 'obligacion',
    categoryLabel: 'Señal de Obligación',
    shape: 'circulo',
    description: 'Protege las extremidades superiores contra abrasiones, cortes mecánicos, calor, frío o contacto químico.',
    workplaceAction: 'Elegir el tipo específico (nitrilo para químicos, malla anticorte para cuchillos, cuero para abrasión) y comprobar que no tengan roturas.',
    normative: 'RD 485/1997 · RD 773/1997 · ISO 7010: M009',
    iconName: 'HandMetal',
    colorScheme: {
      bg: 'bg-sky-500/10 text-sky-600',
      border: 'border-sky-300',
      text: 'text-sky-950',
      badge: 'bg-sky-100 text-sky-800'
    }
  },
  {
    id: 'm-008',
    code: 'M008',
    name: 'Uso obligatorio de calzado de seguridad',
    category: 'obligacion',
    categoryLabel: 'Señal de Obligación',
    shape: 'circulo',
    description: 'Previene aplastamientos por caída de piezas pesadas, perforación plantar por clavos y resbalones en suelo húmedo.',
    workplaceAction: 'Utilizar calzado S1P / S3 con puntera reforzada y suela antiperforación en almacenes, obras y talleres.',
    normative: 'RD 485/1997 · UNE-EN ISO 20345 · ISO 7010: M008',
    iconName: 'Footprints',
    colorScheme: {
      bg: 'bg-sky-500/10 text-sky-600',
      border: 'border-sky-300',
      text: 'text-sky-950',
      badge: 'bg-sky-100 text-sky-800'
    }
  },
  {
    id: 'm-003',
    code: 'M003',
    name: 'Uso obligatorio de protección auditiva',
    category: 'obligacion',
    categoryLabel: 'Señal de Obligación',
    shape: 'circulo',
    description: 'Prescripción legal en áreas donde el nivel de ruido continuo equivalente supera los 85 dB(A).',
    workplaceAction: 'Colocarse tapones o protectores de orejera antes de ingresar. Evita la sordera profesional (hipoacusia irreversible).',
    normative: 'RD 286/2006 · RD 485/1997 · ISO 7010: M003',
    iconName: 'Headphones',
    colorScheme: {
      bg: 'bg-sky-500/10 text-sky-600',
      border: 'border-sky-300',
      text: 'text-sky-950',
      badge: 'bg-sky-100 text-sky-800'
    }
  },
  {
    id: 'm-004',
    code: 'M004',
    name: 'Uso obligatorio de protección ocular',
    category: 'obligacion',
    categoryLabel: 'Señal de Obligación',
    shape: 'circulo',
    description: 'Protege contra la proyección de virutas, esquirlas, chispas de soldadura o salpicaduras químicas.',
    workplaceAction: 'Utilizar gafas de montura integral o pantallas faciales homologadas EN 166. Nunca retirárselas durante la tarea.',
    normative: 'RD 485/1997 · ISO 7010: M004',
    iconName: 'Glasses',
    colorScheme: {
      bg: 'bg-sky-500/10 text-sky-600',
      border: 'border-sky-300',
      text: 'text-sky-950',
      badge: 'bg-sky-100 text-sky-800'
    }
  },
  {
    id: 'm-002',
    code: 'M002',
    name: 'Protección de vías respiratorias',
    category: 'obligacion',
    categoryLabel: 'Señal de Obligación',
    shape: 'circulo',
    description: 'Obliga a filtrar aire con partículas en suspensión, polvo fino, humos de soldadura o neblinas tóxicas.',
    workplaceAction: 'Ajustar mascarilla autofiltrante FFP2/FFP3 o media máscara con filtros ABEK según el contaminante identificado.',
    normative: 'RD 773/1997 · ISO 7010: M002',
    iconName: 'Wind',
    colorScheme: {
      bg: 'bg-sky-500/10 text-sky-600',
      border: 'border-sky-300',
      text: 'text-sky-950',
      badge: 'bg-sky-100 text-sky-800'
    }
  },

  // --- SALVAMENTO Y SOCORRO (Rectángulo verde con pictograma blanco) ---
  {
    id: 'e-001',
    code: 'E001',
    name: 'Salida de emergencia / Dirección de evacuación',
    category: 'salvamento',
    categoryLabel: 'Señal de Salvamento',
    shape: 'rectangulo',
    description: 'Indica la trayectoria expedita y la puerta de escape hacia el exterior seguro en caso de contingencia o incendio.',
    workplaceAction: 'Mantener siempre libre de obstáculos. En evacuación, seguir las flechas caminando a paso ligero sin correr.',
    normative: 'RD 485/1997 · CTE DB-SI · ISO 7010: E001/E002',
    iconName: 'DoorOpen',
    colorScheme: {
      bg: 'bg-emerald-500/10 text-emerald-600',
      border: 'border-emerald-300',
      text: 'text-emerald-950',
      badge: 'bg-emerald-100 text-emerald-800'
    }
  },
  {
    id: 'e-007',
    code: 'E007',
    name: 'Punto de encuentro de evacuación',
    category: 'salvamento',
    categoryLabel: 'Señal de Salvamento',
    shape: 'rectangulo',
    description: 'Espacio exterior acotado y seguro donde debe congregarse la totalidad del personal evacuado.',
    workplaceAction: 'Permanecer en el punto de encuentro hasta que los coordinadores realicen el recuento y autoricen el reingreso.',
    normative: 'RD 485/1997 · ISO 7010: E007',
    iconName: 'Users',
    colorScheme: {
      bg: 'bg-emerald-500/10 text-emerald-600',
      border: 'border-emerald-300',
      text: 'text-emerald-950',
      badge: 'bg-emerald-100 text-emerald-800'
    }
  },
  {
    id: 'e-003',
    code: 'E003',
    name: 'Botiquín de primeros auxilios',
    category: 'salvamento',
    categoryLabel: 'Señal de Salvamento',
    shape: 'rectangulo',
    description: 'Localización del material básico sanitario para curas de urgencia, vendas, desinfectantes y apósitos estériles.',
    workplaceAction: 'Utilizar en caso de herida leve. Avisar al responsable de seguridad si se agota algún insumo para su inmediata reposición.',
    normative: 'RD 485/1997 · RD 486/1997 · ISO 7010: E003',
    iconName: 'Cross',
    colorScheme: {
      bg: 'bg-emerald-500/10 text-emerald-600',
      border: 'border-emerald-300',
      text: 'text-emerald-950',
      badge: 'bg-emerald-100 text-emerald-800'
    }
  },
  {
    id: 'e-004',
    code: 'E004',
    name: 'Teléfono de emergencia / Socorro',
    category: 'salvamento',
    categoryLabel: 'Señal de Salvamento',
    shape: 'rectangulo',
    description: 'Ubicación de un terminal de comunicación directa con los servicios de emergencia interiores o externos (112).',
    workplaceAction: 'Descolgar y aportar con calma: lugar exacto, tipo de emergencia y número estimado de afectados.',
    normative: 'RD 485/1997 · ISO 7010: E004',
    iconName: 'PhoneCall',
    colorScheme: {
      bg: 'bg-emerald-500/10 text-emerald-600',
      border: 'border-emerald-300',
      text: 'text-emerald-950',
      badge: 'bg-emerald-100 text-emerald-800'
    }
  },
  {
    id: 'e-011',
    code: 'E011',
    name: 'Lavaojos de emergencia',
    category: 'salvamento',
    categoryLabel: 'Señal de Salvamento',
    shape: 'rectangulo',
    description: 'Dispositivo hidráulico para el enjuague ocular continuo ante salpicaduras de reactivos corrosivos o cáusticos.',
    workplaceAction: 'Accionar de inmediato el pedal o palanca y lavar con los párpados abiertos durante un mínimo de 15 minutos continuados.',
    normative: 'RD 485/1997 · ISO 7010: E011',
    iconName: 'Eye',
    colorScheme: {
      bg: 'bg-emerald-500/10 text-emerald-600',
      border: 'border-emerald-300',
      text: 'text-emerald-950',
      badge: 'bg-emerald-100 text-emerald-800'
    }
  },

  // --- LUCHA CONTRA INCENDIOS (Rectángulo o cuadrado rojo, pictograma blanco) ---
  {
    id: 'f-001',
    code: 'F001',
    name: 'Extintor de incendios portátil',
    category: 'incendios',
    categoryLabel: 'Lucha contra Incendios',
    shape: 'rectangulo',
    description: 'Indica la ubicación de extintores manuales (polvo polivalente ABC, CO2 o agua nebulizada).',
    workplaceAction: 'Descolgar, retirar pasador de seguridad, situarse a favor del viento a 2-3 metros y barrer en zig-zag a la base de las llamas.',
    normative: 'RD 485/1997 · RIPCI (RD 513/2017) · ISO 7010: F001',
    iconName: 'FlameKindling',
    colorScheme: {
      bg: 'bg-rose-600/10 text-rose-700',
      border: 'border-rose-400',
      text: 'text-rose-950',
      badge: 'bg-rose-100 text-rose-800'
    }
  },
  {
    id: 'f-002',
    code: 'F002',
    name: 'Boca de incendio equipada (BIE)',
    category: 'incendios',
    categoryLabel: 'Lucha contra Incendios',
    shape: 'rectangulo',
    description: 'Manguera contraincendios semirrígida de 25 o 45 mm conectada permanentemente a la red de abastecimiento de agua a presión.',
    workplaceAction: 'Operar solo por personal adiestrado. Comprobar que no haya riesgo eléctrico antes de aplicar agua.',
    normative: 'RD 485/1997 · RIPCI · ISO 7010: F002',
    iconName: 'Disc3',
    colorScheme: {
      bg: 'bg-rose-600/10 text-rose-700',
      border: 'border-rose-400',
      text: 'text-rose-950',
      badge: 'bg-rose-100 text-rose-800'
    }
  },
  {
    id: 'f-005',
    code: 'F005',
    name: 'Pulsador de alarma de incendio',
    category: 'incendios',
    categoryLabel: 'Lucha contra Incendios',
    shape: 'rectangulo',
    description: 'Pulsador de rotura de cristal para activación manual instantánea de la alarma y del plan de evacuación.',
    workplaceAction: 'Presionar en cuanto se detecte un conato de incendio no controlable. No dudar en dar la alarma.',
    normative: 'RD 485/1997 · ISO 7010: F005',
    iconName: 'BellRing',
    colorScheme: {
      bg: 'bg-rose-600/10 text-rose-700',
      border: 'border-rose-400',
      text: 'text-rose-950',
      badge: 'bg-rose-100 text-rose-800'
    }
  },

  // --- ETIQUETAS ADR / MERCANCÍAS PELIGROSAS ---
  {
    id: 'adr-3',
    code: 'ADR Clase 3',
    name: 'Líquidos inflamables (ADR 3)',
    category: 'adr',
    categoryLabel: 'Mercancías Peligrosas ADR',
    shape: 'rombo',
    description: 'Líquidos con punto de inflamación inferior o igual a 60ºC (gasolina, alcoholes, disolventes de pintura).',
    workplaceAction: 'Exigir carta de porte ADR, transporte con panel naranja 33/1203 y extintores reglamentarios a bordo.',
    normative: 'Acuerdo ADR · Código IMDG · OACI/IATA',
    iconName: 'Fuel',
    colorScheme: {
      bg: 'bg-orange-500/10 text-orange-600',
      border: 'border-orange-400',
      text: 'text-orange-950',
      badge: 'bg-orange-100 text-orange-800'
    }
  },
  {
    id: 'adr-8',
    code: 'ADR Clase 8',
    name: 'Materias corrosivas (ADR 8)',
    category: 'adr',
    categoryLabel: 'Mercancías Peligrosas ADR',
    shape: 'rombo',
    description: 'Sustancias que por su acción química atacan el tejido epitelial o dañan gravemente metales (ácido sulfúrico, lejía industrial).',
    workplaceAction: 'Emplear recipientes homologados anticorrosivos. En caso de derrame, neutralizar con absorbente inerte y usar guantes estancos.',
    normative: 'Acuerdo ADR · RD 97/2014',
    iconName: 'Pipette',
    colorScheme: {
      bg: 'bg-slate-500/10 text-slate-700',
      border: 'border-slate-400',
      text: 'text-slate-900',
      badge: 'bg-slate-200 text-slate-800'
    }
  },
  {
    id: 'adr-2-1',
    code: 'ADR Clase 2.1',
    name: 'Gases inflamables (ADR 2.1)',
    category: 'adr',
    categoryLabel: 'Mercancías Peligrosas ADR',
    shape: 'rombo',
    description: 'Gases que a 20ºC y presión estándar son inflamables en mezcla con aire (butano, propano, acetileno, hidrógeno).',
    workplaceAction: 'Almacenar botellas en posición vertical sujetas con cadenas. Controlar con detector de fugas y ventilación a ras de suelo.',
    normative: 'Acuerdo ADR · ITC-MIE APQ',
    iconName: 'Gauge',
    colorScheme: {
      bg: 'bg-orange-500/10 text-orange-600',
      border: 'border-orange-400',
      text: 'text-orange-950',
      badge: 'bg-orange-100 text-orange-800'
    }
  },
  {
    id: 'adr-6-1',
    code: 'ADR Clase 6.1',
    name: 'Materias tóxicas (ADR 6.1)',
    category: 'adr',
    categoryLabel: 'Mercancías Peligrosas ADR',
    shape: 'rombo',
    description: 'Sustancias que en cantidades reducidas pueden dañar gravemente la salud o causar la muerte (plaguicidas, cianuros).',
    workplaceAction: 'Acceso solo a personal autorizado con EPI específico. Almacenar bajo llave y disponer de ficha de datos de seguridad (FDS).',
    normative: 'Acuerdo ADR · Reglamento REACH/CLP',
    iconName: 'Skull',
    colorScheme: {
      bg: 'bg-slate-500/10 text-slate-700',
      border: 'border-slate-400',
      text: 'text-slate-900',
      badge: 'bg-slate-200 text-slate-800'
    }
  },
  {
    id: 'adr-5-1',
    code: 'ADR Clase 5.1',
    name: 'Materias comburentes (ADR 5.1)',
    category: 'adr',
    categoryLabel: 'Mercancías Peligrosas ADR',
    shape: 'rombo',
    description: 'Sustancias ricas en oxígeno que avivan y aceleran la combustión de otros materiales inflamables (nitratos, peróxidos).',
    workplaceAction: 'Separar taxativamente de materias orgánicas y combustibles. Almacenar en locales secos, frescos y ventilados.',
    normative: 'Acuerdo ADR · Clase 5.1',
    iconName: 'Sparkles',
    colorScheme: {
      bg: 'bg-amber-500/10 text-amber-600',
      border: 'border-amber-400',
      text: 'text-amber-950',
      badge: 'bg-amber-100 text-amber-800'
    }
  },
  {
    id: 'adr-env',
    code: 'ADR Ambiental',
    name: 'Peligroso para el medio ambiente',
    category: 'adr',
    categoryLabel: 'Mercancías Peligrosas ADR',
    shape: 'rombo',
    description: 'Materias contaminantes acuáticas o terrestres que pueden causar efectos nocivos duraderos en la flora y fauna.',
    workplaceAction: 'Impedir a toda costa vertidos a la red de alcantarillado. Disponer de cubeto de retención y kits absorbentes para contención.',
    normative: 'Acuerdo ADR · Directiva marco del agua',
    iconName: 'TreePine',
    colorScheme: {
      bg: 'bg-emerald-500/10 text-emerald-700',
      border: 'border-emerald-400',
      text: 'text-emerald-950',
      badge: 'bg-emerald-100 text-emerald-800'
    }
  }
];
