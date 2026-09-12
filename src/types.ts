export type ActivityType = 'choice' | 'multi' | 'vf' | 'match' | 'gap' | 'order' | 'caso';

export interface Activity {
  id: string;
  type: ActivityType;
  q: string;
  expl: string;
  opts?: string[];
  correct?: number | number[] | boolean;
  pares?: [string, string][];
  texto?: string;
  answers?: string[];
  items?: string[];
  keywords?: string[];
}

export type SignCategory = 'advertencia' | 'prohibicion' | 'obligacion' | 'salvamento' | 'incendios' | 'adr';

export interface SafetySign {
  id: string;
  code: string;
  name: string;
  category: SignCategory;
  categoryLabel: string;
  shape: 'triangulo' | 'circulo' | 'rectangulo' | 'rombo';
  description: string;
  workplaceAction: string;
  normative: string;
  iconName: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    badge: string;
  };
}

export interface RiskItem {
  id: string;
  category: string;
  agents: string;
  effects: string;
  prevention: string;
  icon: string;
}

export interface EpiItem {
  id: string;
  zone: string;
  name: string;
  examples: string[];
  protectsFrom: string;
  iconName: string;
  standards: string;
  tip: string;
}

export interface VideoResource {
  id: string;
  title: string;
  desc: string;
  query?: string;
  youtubeId?: string;
  directUrl?: string;
  duration?: string;
  source?: string;
}

export interface OfficialLink {
  title: string;
  entity: string;
  desc: string;
  url: string;
  badge: string;
}

export interface UserEvaluationSubmission {
  nombre: string;
  grupo: string;
  fecha: string;
  nota: number;
  aciertos: number;
  total: number;
  detalles: {
    actividad: number;
    enunciado: string;
    esCorrecto: boolean;
  }[];
}
