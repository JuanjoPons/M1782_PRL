import { Activity } from '../types';

export const ACTIVITIES_BY_SECTION: Record<string, Activity[]> = {
  sec1: [
    {
      id: 'act-sec1-0',
      type: 'choice',
      q: '¿Qué norma es la <strong>base legal fundamental</strong> de la Prevención de Riesgos Laborales en España?',
      opts: [
        'La Ley 31/1995 de Prevención de Riesgos Laborales (LPRL)',
        'El Real Decreto 485/1997 sobre señalización de seguridad',
        'La Ley General de la Seguridad Social',
        'El Real Decreto 773/1997 sobre equipos de protección'
      ],
      correct: 0,
      expl: 'La <strong>Ley 31/1995 (LPRL)</strong> es la norma marco estatal que establece los principios generales relativos a la prevención de riesgos y la tutela de la seguridad y la salud de los trabajadores. Los Reales Decretos posteriores la desarrollan.'
    },
    {
      id: 'act-sec1-1',
      type: 'vf',
      q: 'El empresario puede descontar de la nómina del trabajador el importe correspondiente a los equipos de protección individual (EPI).',
      correct: false,
      expl: 'Los EPI deben ser facilitados <strong>gratuitamente</strong> por el empresario (art. 17 LPRL). Repercutir su coste económico en la plantilla constituye una infracción laboral grave.'
    },
    {
      id: 'act-sec1-2',
      type: 'match',
      q: 'Relaciona cada situación con su naturaleza jurídica: <strong>Derecho</strong> del trabajador o <strong>Deber</strong> preventivo.',
      pares: [
        ['Recibir formación teórica y práctica suficiente y adecuada', 'Derecho'],
        ['Utilizar correctamente los medios y equipos de protección', 'Deber'],
        ['Vigilancia periódica de la salud (reconocimientos médicos)', 'Derecho'],
        ['Informar de inmediato de cualquier situación con riesgo', 'Deber']
      ],
      expl: 'Son derechos del trabajador: información, formación, gratuidad de EPIs y vigilancia médica. Son deberes: acatar instrucciones, usar los EPIs reglamentarios y alertar de anomalías.'
    },
    {
      id: 'act-sec1-3',
      type: 'gap',
      q: 'Completa la definición básica según los principios rectores de la Ley 31/1995:',
      texto: 'La protección de la seguridad y la salud en el trabajo es un derecho [1] de la persona trabajadora y una obligación [2] para la empresa.',
      answers: ['fundamental', 'irrenunciable'],
      expl: 'Se trata de un derecho <strong>fundamental</strong> y de una obligación <strong>irrenunciable</strong> del empresario (artículo 4 de la Ley 31/1995).'
    },
    {
      id: 'act-sec1-4',
      type: 'caso',
      q: 'Durante la jornada laboral, un operario detecta un cable de alimentación con el aislamiento roto y conductores expuestos. ¿Cómo debe proceder según sus obligaciones legales?',
      keywords: ['informar|comunicar|avisar', 'superior|encargado|responsable'],
      expl: 'El trabajador debe <strong>interrumpir su manipulación e informar de inmediato</strong> a su superior jerárquico y delegados de prevención, señalizando provisionalmente la zona para impedir accidentes.'
    }
  ],

  sec2: [
    {
      id: 'act-sec2-0',
      type: 'multi',
      q: 'Selecciona <strong>todos</strong> los factores que pertenecen a la categoría de <strong>riesgos físicos</strong>:',
      opts: [
        'Ruido ambiental por maquinaria pesada',
        'Vapores de disolventes y pintura',
        'Temperaturas ambientales extremas (estrés térmico)',
        'Vibraciones mecánicas de herramientas manuales',
        'Hongos y esporas en sistemas de climatización'
      ],
      correct: [0, 2, 3],
      expl: 'El ruido, las temperaturas extremas y las vibraciones son riesgos <strong>físicos</strong>. Los vapores químicos son agentes <strong>químicos</strong> y los hongos son agentes <strong>biológicos</strong>.'
    },
    {
      id: 'act-sec2-1',
      type: 'vf',
      q: 'La hipoacusia (sordera profesional) se considera un accidente de trabajo debido a la intensidad del impacto acústico.',
      correct: false,
      expl: 'Falso. Salvo un estallido súbito (trauma acústico agudo), la hipoacusia por ruido habitual es una <strong>enfermedad profesional</strong> provocada por exposición continuada y paulatina al ruido excesivo.'
    },
    {
      id: 'act-sec2-2',
      type: 'match',
      q: 'Relaciona cada clase de riesgo con su manifestación más habitual:',
      pares: [
        ['Químico', 'Inhalación de nieblas de decapantes'],
        ['Biológico', 'Contacto con fluidos o material infeccioso'],
        ['Ergonómico', 'Sobrecarga lumbar por levantamiento de cargas'],
        ['Psicosocial', 'Síndrome de agotamiento o burnout por sobrecarga']
      ],
      expl: 'Comprender la raíz de cada riesgo permite aplicar la técnica preventiva adecuada: higiene industrial, ergonomía o psicosociología.'
    },
    {
      id: 'act-sec2-3',
      type: 'order',
      q: 'Ordena las siguientes acciones según la <strong>jerarquía de los principios de acción preventiva</strong> (Art. 15 LPRL), de mayor a menor prioridad:',
      items: [
        'Evitar los riesgos en su totalidad',
        'Evaluar los riesgos que no se hayan podido evitar',
        'Combatir los riesgos en su origen',
        'Adoptar medidas de protección colectiva preferente',
        'Facilitar equipos de protección individual (EPI)'
      ],
      expl: 'La jerarquía legal exige siempre: 1º Evitar el riesgo → 2º Evaluar lo inevitable → 3º Combatir en origen → 4º Protección colectiva → 5º EPI como última barrera.'
    },
    {
      id: 'act-sec2-4',
      type: 'choice',
      q: '¿Qué contingencia profesional se define por contraerse a consecuencia del trabajo por cuenta ajena mediante exposición prolongada y paulatina a factores nocivos?',
      opts: [
        'Accidente de trabajo in itinere',
        'Enfermedad profesional catalogada',
        'Accidente laboral con baja médica',
        'Enfermedad común sobrevenida'
      ],
      correct: 1,
      expl: 'La <strong>enfermedad profesional</strong> surge por el desgaste o asimilación continuada de un contaminante o esfuerzo lesivo recogido en el cuadro oficial de enfermedades profesionales.'
    }
  ],

  sec3: [
    {
      id: 'act-sec3-0',
      type: 'choice',
      q: 'Una señal con <strong>forma triangular, fondo amarillo y pictograma negro</strong> corresponde a una señal de...',
      opts: [
        'Prohibición de una acción',
        'Obligación de usar un equipo',
        'Advertencia de un peligro o riesgo',
        'Salvamento o socorro'
      ],
      correct: 2,
      expl: 'Las señales <strong>triangulares amarillas con borde y símbolo negros</strong> indican <strong>advertencia</strong> (peligro latente que exige extremar la precaución según el RD 485/1997 e ISO 7010).'
    },
    {
      id: 'act-sec3-1',
      type: 'match',
      q: 'Empareja cada combinación cromática y geométrica con su significado reglamentario:',
      pares: [
        ['Círculo blanco con borde y banda roja', 'Prohibición de conducta'],
        ['Círculo azul con pictograma blanco', 'Obligación específica'],
        ['Rectángulo o cuadrado verde con símbolo blanco', 'Salvamento, socorro y salidas'],
        ['Triángulo amarillo con símbolo negro', 'Advertencia de riesgo']
      ],
      expl: 'Este código semafórico universal garantiza comprensión instantánea sin barreras de idioma: amarillo = precaución, rojo = prohibido, azul = obligatorio, verde = seguridad.'
    },
    {
      id: 'act-sec3-2',
      type: 'vf',
      q: 'Las señales de obligación siempre tienen forma circular con fondo azul y el pictograma representativo en color blanco.',
      correct: true,
      expl: 'Verdadero. Indican una conducta preceptiva ineludible (como el uso de cascos, gafas, calzado o guantes).'
    },
    {
      id: 'act-sec3-3',
      type: 'gap',
      q: 'Completa la referencia sobre señalización de emergencia:',
      texto: 'Las señales de [1] de emergencia y recorridos de evacuación presentan formato rectangular y fondo de color [2].',
      answers: ['salida', 'verde'],
      expl: 'Las señales de <strong>salida</strong> y auxilio médico poseen fondo <strong>verde</strong> fosforescente con gráficos blancos.'
    },
    {
      id: 'act-sec3-4',
      type: 'caso',
      q: 'En el acceso a un almacén de materias primas observas una señal circular roja con la silueta de una persona y una banda diagonal. ¿Qué mensaje transmite y qué debes hacer?',
      keywords: ['prohibido|prohibe|acceso|paso', 'peatones|entrar|personal'],
      expl: 'Es la señal P004: <strong>Prohibido el paso a peatones o personal no autorizado</strong>. No se debe franquear el paso, debiendo utilizar las vías de tránsito peatonal segregadas.'
    }
  ],

  sec4: [
    {
      id: 'act-sec4-0',
      type: 'multi',
      q: '¿Cuáles de los siguientes elementos constituyen estrictamente <strong>Equipos de Protección Individual (EPI)</strong> según el RD 773/1997?',
      opts: [
        'Casco de seguridad para obras',
        'Campana extractora de gases en laboratorio',
        'Tapones auditivos de espuma amoldable',
        'Arnés anticaídas con absorbedor de energía',
        'Extintor móvil de polvo polivalente'
      ],
      correct: [0, 2, 3],
      expl: 'Un EPI debe ser <strong>llevado o sujetado por el trabajador</strong>. Las campanas extractoras y los extintores son medios de protección colectiva o instalaciones de seguridad.'
    },
    {
      id: 'act-sec4-1',
      type: 'vf',
      q: 'El marcado CE en un EPI certifica que este cumple los requisitos esenciales de salud y seguridad estipulados por la normativa europea.',
      correct: true,
      expl: 'Verdadero. Ningún EPI puede comercializarse ni utilizarse en centros de trabajo comunitarios sin su correspondiente marcado CE y ficha de especificaciones técnicas.'
    },
    {
      id: 'act-sec4-2',
      type: 'match',
      q: 'Relaciona cada zona corporal con el EPI específicamente diseñado para su resguardo:',
      pares: [
        ['Cabeza', 'Casco con barboquejo homologado'],
        ['Ojos y rostro', 'Gafas de montura integral antipartículas'],
        ['Aparato auditivo', 'Orejeras con índice de atenuación SNR'],
        ['Pies y extremidades inferiores', 'Calzado de seguridad con puntera antiaplastamiento']
      ],
      expl: 'Cada protección responde a una normativa armonizada específica (EN 397 para cascos, EN 166 para gafas, EN 352 para orejeras, EN ISO 20345 para calzado).'
    },
    {
      id: 'act-sec4-3',
      type: 'choice',
      q: '¿Cuál es la regla fundamental respecto a la jerarquía de aplicación de los EPIs en la empresa?',
      opts: [
        'Es la primera solución a implantar por su bajo coste',
        'Es la última barrera de protección, subsidiaria a la protección colectiva',
        'Solo es obligatoria si el trabajador la solicita por escrito',
        'Sustituye la necesidad de formar al trabajador'
      ],
      correct: 1,
      expl: 'El EPI es siempre la <strong>última barrera</strong>. Primero se debe eliminar el peligro o implantar protecciones colectivas que amparen a todo el equipo humano simultáneamente.'
    },
    {
      id: 'act-sec4-4',
      type: 'caso',
      q: 'Al comenzar el turno, descubres que tus gafas de seguridad presentan una fisura profunda en la lente protectora. ¿Cuál es el protocolo de actuación correcto?',
      keywords: ['sustituir|cambiar|reemplazar', 'desechar|informar|retirar'],
      expl: 'Se debe <strong>sustituir inmediatamente</strong> el EPI dañado y retirarlo de servicio. Un elemento agrietado pierde su resistencia al impacto y no garantiza la protección ocular requerida.'
    }
  ],

  sec5: [
    {
      id: 'act-sec5-0',
      type: 'choice',
      q: '¿A partir de qué número de personas trabajadoras en plantilla es <strong>legalmente obligatorio</strong> constituir un Comité de Seguridad y Salud?',
      opts: [
        'A partir de 10 trabajadores',
        'A partir de 30 trabajadores',
        'A partir de 50 trabajadores',
        'A partir de 100 trabajadores'
      ],
      correct: 2,
      expl: 'El <strong>Comité de Seguridad y Salud</strong> es preceptivo en empresas o centros de trabajo con <strong>50 o más trabajadores</strong> (art. 38 LPRL), siendo un órgano paritario y colegiado.'
    },
    {
      id: 'act-sec5-1',
      type: 'vf',
      q: 'En una pyme de 25 trabajadores, corresponde la designación de dos delegados de prevención.',
      correct: false,
      expl: 'Falso. En empresas de hasta 30 trabajadores corresponde <strong>1 único Delegado de Prevención</strong> (designado por y entre los delegados de personal).'
    },
    {
      id: 'act-sec5-2',
      type: 'match',
      q: 'Asocia cada modalidad organizativa de la prevención con su rasgo característico:',
      pares: [
        ['Servicio de Prevención Ajeno (SPA)', 'Entidad externa acreditada contratada por la empresa'],
        ['Servicio de Prevención Propio (SPP)', 'Unidad preventiva interna con recursos propios de la plantilla'],
        ['Servicio Mancomunado', 'Recursos compartidos entre empresas de un mismo sector o polígono'],
        ['Asunción por el empresario', 'Válido en microempresas de hasta 10 trabajadores no de alto riesgo']
      ],
      expl: 'La normativa contempla estas cuatro fórmulas para adaptarse a las distintas dimensiones y complejidades de cada tejido productivo.'
    },
    {
      id: 'act-sec5-3',
      type: 'gap',
      q: 'Completa los tipos de reconocimientos médicos en la vigilancia de la salud laboral:',
      texto: 'Los reconocimientos médicos de vigilancia de la salud se efectúan de forma [1], periódica y con ocasión del [2] de la relación laboral.',
      answers: ['inicial', 'cese'],
      expl: 'La vigilancia incluye reconocimientos <strong>iniciales</strong> (al incorporarse), <strong>periódicos</strong> (recurrentes) y tras bajas prolongadas o al <strong>cese</strong> de la relación.'
    },
    {
      id: 'act-sec5-4',
      type: 'order',
      q: 'Ordena de manera lógica las fases nucleares de la <strong>gestión preventiva empresarial</strong>:',
      items: [
        'Identificación y detección de peligros en el centro',
        'Evaluación técnica de la magnitud de los riesgos',
        'Planificación de actividades e inversiones preventivas',
        'Ejecución y puesta en marcha de las medidas',
        'Seguimiento, control y revisión continua periódica'
      ],
      expl: 'La gestión de la PRL es un ciclo de mejora continua (PDCA): detectar → evaluar → planificar → ejecutar → controlar y revisar.'
    }
  ],

  sec6: [
    {
      id: 'act-sec6-0',
      type: 'vf',
      q: 'Ante un accidentado que ha sufrido una caída desde altura, lo primero que se debe hacer es levantarlo e incorporarlo para que respire mejor.',
      correct: false,
      expl: 'Falso y muy peligroso. Salvo riesgo inminente de explosión o fuego, <strong>nunca se debe mover a un herido</strong> ante la sospecha de daño en la columna o fracturas graves.'
    },
    {
      id: 'act-sec6-1',
      type: 'order',
      q: 'Establece el orden cronológico estricto del protocolo de emergencias sanitarias <strong>conducta PAS</strong>:',
      items: [
        'Proteger (P): asegurar la zona y al accidentado sin generar nuevos riesgos',
        'Avisar (A): alertar a los servicios de socorro al teléfono 112 facilitando datos precisos',
        'Socorrer (S): atender a la víctima según pautas de soporte vital sin moverla'
      ],
      expl: 'La regla PAS es inquebrantable: 1º Proteger para evitar más víctimas → 2º Avisar a profesionales → 3º Socorrer con primeros auxilios básicos.'
    },
    {
      id: 'act-sec6-2',
      type: 'choice',
      q: '¿Cuál es el <strong>número telefónico único de emergencias</strong> vigente en toda la Unión Europea?',
      opts: ['091', '061', '112', '911'],
      correct: 2,
      expl: 'El <strong>112</strong> es el teléfono de emergencias gratuito universal en la UE, operativo las 24 horas y con atención multilingüe para bomberos, sanitarios y rescate.'
    },
    {
      id: 'act-sec6-3',
      type: 'match',
      q: 'Relaciona la situación de urgencia con la primera medida asistencial inmediata recomendada:',
      pares: [
        ['Víctima inconsciente que respira con normalidad', 'Colocar en Posición Lateral de Seguridad (PLS)'],
        ['Hemorragia externa copiosa', 'Compresión firme directa sobre la herida con apósito limpio'],
        ['Quemadura dérmica térmica', 'Enfriar con agua corriente templada 10-15 minutos'],
        ['Parada cardiorrespiratoria (no respira)', 'Compresiones torácicas RCP y desfibrilador (DEA)']
      ],
      expl: 'La rápida aplicación de estas pautas elementales antes de la llegada del equipo de soporte vital avanzado salva vidas y minimiza secuelas permanentes.'
    },
    {
      id: 'act-sec6-4',
      type: 'caso',
      q: 'Al activarse la sirena acústica de evacuación del edificio, describe los dos pasos esenciales que debes ejecutar de inmediato.',
      keywords: ['calma|orden', 'salida|evacuar|encuentro'],
      expl: 'Mantener la calma, cesar la actividad, evacuar a pie por la salida de emergencia señalizada más próxima (sin ascensores) y congregarse en el punto de encuentro exterior para el recuento.'
    }
  ]
};

export const FINAL_EVALUATION_ACTIVITIES: Activity[] = [
  {
    id: 'eval-0',
    type: 'multi',
    q: 'De acuerdo con la Ley 31/1995 (LPRL), ¿cuáles de los siguientes constituyen <strong>derechos reconocidos</strong> de las personas trabajadoras?',
    opts: [
      'Recibir formación e información adecuada sobre los riesgos laborales de su puesto',
      'Disponer de equipos de protección individual facilitados de forma gratuita',
      'Cumplir estrictamente las directrices de seguridad marcadas por la gerencia',
      'Tener garantizada una vigilancia de la salud periódica y ajustada al puesto'
    ],
    correct: [0, 1, 3],
    expl: 'La formación, el suministro gratuito de EPIs y los reconocimientos médicos son derechos inalienables del trabajador; acatar las instrucciones preventivas es un deber legal.'
  },
  {
    id: 'eval-1',
    type: 'choice',
    q: 'Una señal con <strong>forma triangular, fondo amarillo y el símbolo de un rayo negro</strong> señala:',
    opts: [
      'Obligación de desconectar la red antes de salir',
      'Advertencia de peligro por riesgo eléctrico',
      'Prohibición de encender aparatos electrónicos',
      'Ubicación del interruptor general de alumbrado'
    ],
    correct: 1,
    expl: 'Es la señal W012 de <strong>advertencia de riesgo eléctrico</strong> conforme a la norma UNE-EN ISO 7010.'
  },
  {
    id: 'eval-2',
    type: 'vf',
    q: 'El empresario está legalmente obligado a proporcionar los EPIs adecuados y sustituirlos ante cualquier deterioro sin coste alguno para el empleado.',
    correct: true,
    expl: 'Verdadero. Es deber ineludible del empleador costear, reponer y garantizar la idoneidad y buen estado de conservación de todo el equipo protector.'
  },
  {
    id: 'eval-3',
    type: 'gap',
    q: 'Escribe la palabra que falta en la secuencia del protocolo de socorro de emergencias:',
    texto: 'El acrónimo PAS ordena las actuaciones en caso de accidente: [1], avisar al 112 y socorrer.',
    answers: ['proteger'],
    expl: '<strong>P</strong>roteger el entorno y a la víctima, <strong>A</strong>visar a los servicios de emergencias y <strong>S</strong>ocorrer aplicando primeros auxilios.'
  },
  {
    id: 'eval-4',
    type: 'match',
    q: 'Empareja cada señal visual con el significado técnico que comunica al trabajador:',
    pares: [
      ['Círculo azul con casco blanco', 'Obligatorio el uso de casco de seguridad'],
      ['Triángulo amarillo con rayo negro', 'Advertencia de riesgo eléctrico'],
      ['Círculo blanco con cigarrillo tachado en rojo', 'Prohibición de fumar'],
      ['Rectángulo verde con cruz blanca', 'Ubicación de botiquín de socorro']
    ],
    expl: 'El código de colores (azul, amarillo, rojo, verde) define la naturaleza de la señal, mientras que el pictograma concreta la instrucción precisa.'
  },
  {
    id: 'eval-5',
    type: 'order',
    q: 'Organiza cronológicamente las fases de una <strong>evacuación correcta y segura</strong> en caso de siniestro:',
    items: [
      'Percibir la señal de alarma y mantener la compostura',
      'Dirigirse con paso firme y sin correr hacia la salida señalizada en verde',
      'Abandonar el edificio sin utilizar ascensores ni regresar a por pertenencias',
      'Congregarse en el punto de encuentro exterior y aguardar el recuento oficial'
    ],
    expl: 'La secuencia ordenada salva vidas: alarma → salida peatonal → escape al exterior → punto de encuentro sin marcharse antes del recuento.'
  },
  {
    id: 'eval-6',
    type: 'choice',
    q: '¿A partir de qué umbral de trabajadores es obligatorio por ley constituir un <strong>Comité de Seguridad y Salud</strong>?',
    opts: [
      'Empresas con 10 o más trabajadores',
      'Empresas con 25 o más trabajadores',
      'Empresas con 50 o más trabajadores',
      'Empresas con más de 250 trabajadores'
    ],
    correct: 2,
    expl: 'A partir de <strong>50 trabajadores</strong> la empresa debe constituir este comité colegiado y paritario, integrado por delegados de prevención y representantes de la dirección.'
  },
  {
    id: 'eval-7',
    type: 'vf',
    q: 'Según los principios de la acción preventiva (Art. 15 LPRL), los equipos de protección individual (EPI) deben anteponerse siempre a las medidas colectivas.',
    correct: false,
    expl: 'Falso. El principio 8 establece con total claridad la <strong>prioridad de la protección colectiva frente a la individual</strong>. El EPI es la última barrera complementaria.'
  },
  {
    id: 'eval-8',
    type: 'caso',
    q: 'Expón un riesgo laboral común en tu futuro sector profesional (ej. automoción, hostelería, almacén u oficina) y cita una medida preventiva técnica o de protección adecuada.',
    keywords: ['epi|gafas|guantes|calzado|orden|limpieza|formacion|ventilacion|postura|ruido|corte|caida'],
    expl: 'Cualquier ejemplo coherente que vincule riesgo diagnosticado y medida correctiva (ej. cortes con cuchillos protegidos con guante de malla; caídas en suelo mojado con calzado antideslizante y secado) es idóneo.'
  },
  {
    id: 'eval-9',
    type: 'choice',
    q: 'Las señales reglamentarias de <strong>salvamento, evacuación y auxilio</strong> se identifican por:',
    opts: [
      'Triángulos amarillos con orla negra',
      'Círculos rojos con banda transversal inclinada',
      'Rectángulos o cuadrados verdes con gráficos en blanco',
      'Círculos azules con reborde blanco'
    ],
    correct: 2,
    expl: 'El <strong>verde rectangular con pictograma blanco</strong> simboliza seguridad, vías de escape, material de primeros auxilios y puestos de socorro.'
  }
];
