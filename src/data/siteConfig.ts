export interface EditableDoctorProfile {
  doctorName: string;
  fullName: string;
  professionalTitle: string;
  teot: string;
  birthplaceAndLocation: string;
  experienceYears: string;
  academicFormation: string;
  residencyAndTraining: string;
  societyMemberships: string;
  additionalBioNotes: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  institution: string;
  description: string;
  badge?: string;
}

export interface TechnologyItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
}

export interface SpecialtyItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  heroSubtitle: string;
  overviewParagraphs: string[];
  clinicalFocusAreas: string[];
  whenToSeekCare: string[];
  diagnosticAndTherapeuticApproach: string;
  image: string;
  imageAlt: string;
  keywords: string[];
}

export interface ConditionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  informativeNote: string;
}

export interface DifferentialItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface EducationalTopic {
  id: string;
  category: string;
  title: string;
  summary: string;
  readingTime: string;
  status: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  city: string;
  specialtyTag: string;
  rating: number;
  comment: string;
  treatmentHighlight: string;
}

/**
 * DADOS OFICIAIS EXTRAÍDOS DO RECEITUÁRIO E REGISTROS DO DR. SERGIO LEOPOLSKI
 */
export const DEFAULT_DOCTOR_PROFILE: EditableDoctorProfile = {
  doctorName: 'Dr. Sergio Leopolski',
  fullName: 'Sérgio Ricardo Chemin Leopolski',
  professionalTitle: 'Ortopedia, Medicina Esportiva e Cirurgia da Mão',
  teot: 'TEOT 9708',
  birthplaceAndLocation: 'Nascido em Guarapuava (PR) • Atendimento em Santo Antônio da Platina (PR)',
  experienceYears: 'Mais de 25 anos de dedicação médica',
  academicFormation: 'Graduação em Medicina pela Universidade Federal de Pelotas (UFPel - RS) em 2001',
  residencyAndTraining: 'Ortopedia e Traumatologia na Santa Casa de Marília (SP) e Cirurgia da Mão e Microcirurgia na UFPR',
  societyMemberships: 'Membro Titular SBOT (2005), ABCM (2007) e Membro Internacional AAOS (2012)',
  additionalBioNotes: 'Pós-graduado em Medicina Esportiva (Cruzeiro do Sul / Instituto Vita) e pós-graduando em Medicina Regenerativa e Reparativa (CETRUS - SP).'
};

export const CLINIC_INFO = {
  clinicName: 'Clínica Dr. Bardal',
  doctorName: 'Dr. Sergio Leopolski',
  doctorFullName: 'Sérgio Ricardo Chemin Leopolski',
  crm: '18945',
  crmState: 'CRM-PR 18945',
  rqeList: ['14512', '37663'],
  rqeFormatted: 'RQE 14512 e 37663',
  teot: 'TEOT 9708',
  fullCredentials: 'CRM-PR 18945 • TEOT 9708 • RQE 14512 e 37663',
  city: 'Santo Antônio da Platina',
  state: 'PR',
  cityState: 'Santo Antônio da Platina – PR',
  address: {
    street: 'Rua Coronel Capucho, 703 – Sala 1 – Centro',
    city: 'Santo Antônio da Platina – PR',
    cep: '86430-000',
    full: 'Rua Coronel Capucho, 703 – Sala 1 – Centro, Santo Antônio da Platina – PR, CEP: 86430-000'
  },
  phoneDisplay: '(43) 3534-4717',
  phoneHref: 'tel:+554335344717',
  whatsappDisplay: '(43) 98830-7469',
  whatsappNumberClean: '5543988307469',
  instagram: '@leopolski_ortopedista',
  instagramUrl: 'https://instagram.com/leopolski_ortopedista',
  email: 'sleopolski@hotmail.com',
  emailHref: 'mailto:sleopolski@hotmail.com',
  whatsappDefaultMessage:
    'Olá! Gostaria de agendar uma consulta com o Dr. Sergio Leopolski na Clínica Dr. Bardal.',
  hours: [
    { days: 'Segunda a sexta-feira', time: '09h às 18h30' },
    { days: 'Sábado', time: '09h às 12h' },
    { days: 'Domingo', time: 'Fechado' }
  ],
  agreements: [
    { name: 'Unimed', type: 'Convênio' },
    { name: 'Sanepar', type: 'Convênio' },
    { name: 'Particular', type: 'Atendimento' }
  ],
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=Rua+Coronel+Capucho,+703,+Centro,+Santo+Antonio+da+Platina+-+PR,+86430-000&output=embed',
  googleMapsRouteUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Rua+Coronel+Capucho,+703+-+Centro,+Santo+Ant%C3%B4nio+da+Platina+-+PR,+86430-000'
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || CLINIC_INFO.whatsappDefaultMessage;
  return `https://wa.me/${CLINIC_INFO.whatsappNumberClean}?text=${encodeURIComponent(message)}`;
}

/**
 * LINHA DO TEMPO DA TRAJETÓRIA E FORMAÇÃO MÉDICA
 */
export const DOCTOR_TIMELINE: TimelineEvent[] = [
  {
    year: '2001',
    title: 'Graduação em Medicina',
    institution: 'Universidade Federal de Pelotas (UFPel), Rio Grande do Sul',
    description: 'Início da trajetória médica sólida fundamentada no rigor científico e humanizado.'
  },
  {
    year: '2002–2005',
    title: 'Residência em Ortopedia e Traumatologia',
    institution: 'Santa Casa de Misericórdia de Marília (SP)',
    description: 'Formação cirúrgica especializada e treinamento intensivo no atendimento ao trauma e afecções ortopédicas.'
  },
  {
    year: '2005',
    title: 'Membro Titular SBOT',
    institution: 'Sociedade Brasileira de Ortopedia e Traumatologia (SBOT)',
    description: 'Titulação oficial conferida após aprovação em rigoroso exame nacional de especialista.',
    badge: 'TEOT nº 9708'
  },
  {
    year: '2005–2006',
    title: 'Residência em Cirurgia da Mão e Microcirurgia',
    institution: 'Universidade Federal do Paraná (UFPR)',
    description: 'Aprofundamento na anatomia complexa, microcirurgia reconstrutiva e biomecânica de mãos e punhos.'
  },
  {
    year: '2007',
    title: 'Membro Titular ABCM',
    institution: 'Associação Brasileira de Cirurgia da Mão (ABCM)',
    description: 'Titulação oficial conferida após aprovação em rigoroso exame na subespecialidade cirúrgica da mão.',
    badge: 'Membro Titular'
  },
  {
    year: '2012',
    title: 'Membro Titular Internacional AAOS',
    institution: 'American Academy of Orthopaedic Surgeons (EUA)',
    description: 'Filiação internacional com participação ativa na maior comunidade global de cirurgiões ortopédicos.'
  },
  {
    year: '2025',
    title: 'Pós-graduação lato sensu em Medicina Esportiva',
    institution: 'Universidade Cruzeiro do Sul e Instituto Vita',
    description: 'Especialização voltada ao cuidado de atletas, prevenção de lesões e retorno qualificado ao esporte.'
  },
  {
    year: '2026',
    title: 'Pós-graduação em Medicina Regenerativa e Reparativa',
    institution: 'CETRUS, São Paulo (SP) — Em andamento',
    description: 'Abordagens biológicas de ponta para cicatrização, modulação da inflamação e regeneração articular.'
  }
];

export const ADVANCED_COURSES = [
  {
    title: 'Artroscopia do Punho',
    institution: 'CETRUS — Centro de Ensino em Tomografia e Ultrassonografia'
  },
  {
    title: 'Artroscopia do Cotovelo',
    institution: 'IRCAD — Instituto de Treinamento em Cirurgia Minimamente Invasiva'
  },
  {
    title: 'Ultrassonografia Musculoesquelética',
    institution: 'FATESA — Ribeirão Preto (SP)'
  }
];

/**
 * ESTRUTURA TECNOLÓGICA E RECURSOS DO CONSULTÓRIO
 */
export const CLINIC_TECHNOLOGY: TechnologyItem[] = [
  {
    id: 'ultrassom',
    title: 'Ultrassom musculoesquelético para avaliação e orientação de procedimentos',
    badge: 'Precisão em Tempo Real',
    description:
      'Utilizado diretamente no consultório para diagnóstico musculoesquelético dinâmico e orientação em tempo real de infiltrações e bloqueios, garantindo assertividade, conforto e segurança ao paciente.',
    features: [
      'Visualização da anatomia dinâmica em tempo real',
      'Infiltrações e bloqueios articulares guiados com alta precisão',
      'Minimização do desconforto e otimização do resultado terapêutico',
      'Realização ágil no próprio consultório durante a consulta'
    ]
  },
  {
    id: 'ondas-choque',
    title: 'Equipamento de ondas de choque radiais da BTL',
    badge: 'Terapia Biológica Não Invasiva',
    description:
      'Tecnologia padrão-ouro da BTL de ondas acústicas de alta energia que favorece a resposta biológica de reparo tecidual, estimula a regeneração e promove alívio efetivo da dor em tendinopatias e lesões crônicas.',
    features: [
      'Tratamento padrão-ouro para esporão de calcâneo e fascite plantar',
      'Eficácia comprovada em tendinopatias crônicas (ombro, cotovelo, joelho)',
      'Estímulo biológico para regeneração tecidual sem cortes ou internação',
      'Retorno imediato às atividades habituais'
    ]
  },
  {
    id: 'btl-sis',
    title: 'Sistema BTL SIS Elite de estimulação eletromagnética de alta intensidade',
    badge: 'Super Inductive System (SIS)',
    description:
      'O Sistema BTL SIS Elite utiliza campo eletromagnético de alta intensidade para atuar profundamente nos tecidos, proporcionando alívio analgésico potente, modulação neuromuscular, relaxamento de contraturas e reabilitação funcional.',
    features: [
      'Alívio rápido de dores articulares, musculares e neuropáticas',
      'Aceleração da regeneração neuromuscular e cicatrização',
      'Fortalecimento muscular e restauração de amplitude articular',
      'Tratamento confortável, seguro e não invasivo'
    ]
  },
  {
    id: 'terapias-regenerativas',
    title: 'Terapias Biológicas e Regenerativas',
    badge: 'Terapias Biológicas',
    description:
      'Tratamentos modernos que utilizam componentes do próprio paciente para auxiliar na recuperação de lesões articulares, artrose, tendinites e lesões musculares.',
    features: [
      'PRP: plasma rico em plaquetas, com fatores de crescimento que auxiliam na reparação dos tecidos.',
      'iPRF: fibrina injetável que libera fatores de crescimento gradualmente, auxiliando na cicatrização e reparação cutânea.',
      'BMA: aspirado de medula óssea, com células progenitoras e componentes bioativos que podem auxiliar no tratamento de lesões osteoarticulares.'
    ]
  },
  {
    id: 'terapias-regenerativas',
    title: 'Terapias Biológicas e Regenerativas',
    badge: 'Terapias Biológicas',
    description:
      'Tratamentos modernos que utilizam componentes do próprio paciente para auxiliar na recuperação de lesões articulares, artrose, tendinites e lesões musculares.',
    features: [
      'PRP: plasma rico em plaquetas, com fatores de crescimento que auxiliam na reparação dos tecidos.',
      'iPRF: fibrina injetável que libera fatores de crescimento gradualmente, auxiliando na cicatrização e reparação cutânea.',
      'BMA: aspirado de medula óssea, com células progenitoras e componentes bioativos que podem auxiliar no tratamento de lesões osteoarticulares.'
    ]
  }
];

export const SPECIALTIES_DATA: SpecialtyItem[] = [
  {
    id: 'lesoes-esportivas',
    slug: 'medicina-esportiva-e-regenerativa',
    number: '01',
    title: 'Medicina Esportiva e Regenerativa',
    shortDescription:
      'Avaliação e tratamento de lesões musculoesqueléticas relacionadas ao esporte e à atividade física, com orientação para o retorno seguro à prática.',
    seoTitle: 'Medicina Esportiva e Regenerativa em Santo Antônio da Platina – PR | Dr. Sergio Leopolski',
    seoDescription:
      'Especialista em Lesões Esportivas e Medicina Regenerativa em Santo Antônio da Platina – PR. Dr. Sergio Leopolski (CRM-PR 18945 | TEOT 9708). Avaliação biomecânica, procedimentos guiados por ultrassom e tecnologias avançadas.',
    heroSubtitle:
      'Avaliação médica criteriosa de atletas amadores e praticantes de esportes para retorno seguro aos treinos com preservação biomecânica e longevidade muscular.',
    overviewParagraphs: [
      'A atuação em Lesões Esportivas e Medicina Regenerativa atende tanto desportistas competitivos quanto praticantes recreativos de corrida, ciclismo, musculação e esportes de quadra em Santo Antônio da Platina e região.',
      'O Dr. Sergio Leopolski alia sua sólida formação em Ortopedia, pós-graduação pelo Instituto Vita / Cruzeiro do Sul e especialização em Medicina Regenerativa no CETRUS-SP com tecnologia avançada no consultório (ultrassom musculoesquelético, ondas de choque e estimulação eletromagnética SIS Elite), definindo planos terapêuticos personalizados para alívio da dor e regeneração tecidual.'
    ],
    clinicalFocusAreas: [
      'Diagnóstico e reabilitação de entorses, estiramentos e roturas musculares',
      'Tendinopatias e sobrecargas no joelho, ombro, tornozelo e tendão de Aquiles',
      'Procedimentos guiados por ultrassom para reparo tecidual e alívio da dor',
      'Tratamento por Ondas de Choque Radiais e Sistema SIS Elite',
      'Planejamento estruturado para Return to Play (retorno seguro ao esporte)'
    ],
    whenToSeekCare: [
      'Dor persistente que surge durante ou logo após treinos ou competições',
      'Lesões musculares recidivantes ou sensação de instabilidade articular',
      'Fascite plantar, canelite ou tendinite crônica que não respondem ao repouso simples',
      'Orientação médica especializada antes de intensificar a rotina esportiva'
    ],
    diagnosticAndTherapeuticApproach:
      'Integração entre exame clínico detalhado, ultrassom em tempo real no consultório e tecnologias avançadas de bioestimulação e modulação de carga.',
    image: '/images/medico-esporte-card.jpg',
    imageAlt: 'Dr. Sergio Leopolski — Especialista em Medicina Esportiva e Lesões no Esporte',
    keywords: [
      'Lesões esportivas em Santo Antônio da Platina',
      'Médico do esporte Santo Antônio da Platina',
      'Dr Sergio Leopolski medicina esportiva',
      'Medicina regenerativa Paraná ortopedia'
    ]
  },
  {
    id: 'ortopedia',
    slug: 'ortopedia',
    number: '02',
    title: 'Ortopedia e Traumatologia',
    shortDescription:
      'Atendimento especializado a dores e lesões do joelho, quadril, coluna, ombro e cotovelo, com mais de 25 anos de dedicação médica.',
    seoTitle: 'Ortopedista em Santo Antônio da Platina – PR | Dr. Sergio Leopolski (CRM 18945 | TEOT 9708)',
    seoDescription:
      'Atendimento ortopédico com Dr. Sergio Leopolski em Santo Antônio da Platina – PR. Tratamento de dores no joelho, quadril, coluna, ombro e cotovelo. TEOT 9708 • RQE 14512.',
    heroSubtitle:
      'Cuidado ortopédico estruturado com diagnóstico preciso, bloqueios guiados e tecnologia para alívio da dor e restauração da mobilidade articular.',
    overviewParagraphs: [
      'Com mais de 25 anos de atuação médica e título TEOT nº 9708, o Dr. Sergio Leopolski conduz o atendimento a queixas ortopédicas crônicas e agudas na Clínica Dr. Bardal, em Santo Antônio da Platina.',
      'O foco é investigar a etiologia biomecânica do desconforto nas principais articulações (joelho, quadril, ombro, coluna e cotovelo), priorizando alternativas modernas e minimamente invasivas de reabilitação articular.'
    ],
    clinicalFocusAreas: [
      'Dores articulares degenerativas (artrose e desgaste de cartilagem)',
      'Bursites, capsulite adesiva e tendinopatias do manguito rotador no ombro',
      'Epicondilite lateral e medial (cotovelo de tenista / golfista)',
      'Lesões meniscais, ligamentares e síndromes patelofemorais do joelho',
      'Infiltrações e bloqueios articulares guiados por ultrassom'
    ],
    whenToSeekCare: [
      'Dores articulares limitantes ao caminhar, sentar ou levantar',
      'Rigidez nas articulações ou inchaço frequente',
      'Dor lombar ou cervical associada a esforço físico',
      'Desconforto que impede noites tranquilas de sono'
    ],
    diagnosticAndTherapeuticApproach:
      'Exame ortopédico minucioso, correlação anatômica com imagens e abordagem terapêutica que associa intervenções guiadas e fisioterapia direcionada.',
    image: '/images/medico-ortopedia-cirurgia.jpg',
    imageAlt: 'Dr. Sergio Leopolski realizando cirurgia ortopédica no centro cirúrgico sob iluminação cirúrgica',
    keywords: [
      'Ortopedista em Santo Antônio da Platina',
      'Dr Sergio Leopolski ortopedia',
      'Tratamento de dor no joelho e ombro Santo Antônio da Platina',
      'Clínica Dr Bardal ortopedista'
    ]
  },
  {
    id: 'cirurgia-da-mao',
    slug: 'cirurgia-da-mao',
    number: '03',
    title: 'Cirurgia da Mão e do Punho',
    shortDescription:
      'Tratamento especializado de lesões da mão e do punho com abordagem clínica ou cirúrgica, incluindo cirurgias por vídeo (artroscopia e procedimentos minimamente invasivos) para recuperação rápida e funcional.',
    seoTitle: 'Cirurgião da Mão em Santo Antônio da Platina – PR | Dr. Sergio Leopolski (RQE 37663)',
    seoDescription:
      'Especialista em Cirurgia da Mão, Punho e Cirurgias por Vídeo (Artroscopia) no Paraná. Membro titular da Associação Brasileira de Cirurgia da Mão (ABCM). Dr. Sergio Leopolski em Santo Antônio da Platina.',
    heroSubtitle:
      'Tratamento de lesões da mão e do punho com abordagem clínica ou cirúrgica, incluindo cirurgias por vídeo (artroscopia) para máxima precisão anatômica e rápida reabilitação.',
    overviewParagraphs: [
      'A mão e o punho exigem precisão anatômica absoluta. Formado em Cirurgia da Mão e Microcirurgia pela Universidade Federal do Paraná (UFPR) e Membro Titular da Associação Brasileira de Cirurgia da Mão (ABCM), o Dr. Sergio Leopolski realiza cirurgias por vídeo (artroscopia de punho e técnicas minimamente invasivas), permitindo incisões reduzidas, menor agressão tecidual e retorno mais rápido às atividades diárias e profissionais.',
      'A atuação contempla o tratamento de lesões na mão tanto na esfera clínica (bloqueios, infiltrações guiadas e imobilizações direcionadas) quanto na cirúrgica, abrangendo fraturas, lesões de tendões e ligamentos, cistos, artrose e síndromes compressivas nervosas.'
    ],
    clinicalFocusAreas: [
      'Cirurgias por vídeo (artroscopia de punho e procedimentos minimamente invasivos)',
      'Tratamento de lesões na mão e punho (abordagem clínica ou cirúrgica)',
      'Síndrome do túnel do carpo (dormência e formigamento nos dedos)',
      'Dedo em gatilho e Tenossinovite de De Quervain',
      'Cistos sinoviais, fraturas e lesões ligamentares do punho e dedos',
      'Rizartrose (artrose na base do polegar) e reconstruções funcionais'
    ],
    whenToSeekCare: [
      'Acordar com os dedos das mãos formigando ou dormentes',
      'Dificuldade para segurar copos, abrir portas ou manusear utensílios',
      'Estalidos e travamentos ao dobrar os dedos',
      'Dor no punho após quedas ou movimentos repetitivos de digitação'
    ],
    diagnosticAndTherapeuticApproach:
      'Testes neurofuncionais específicos, ultrassonografia do punho em tempo real no consultório e indicação precisa entre abordagem clínica ou cirurgia por vídeo.',
    image: '/images/medico-cirurgia.jpg',
    imageAlt: 'Dr. Sergio Leopolski realizando cirurgia da mão e punho no centro cirúrgico com equipe',
    keywords: [
      'Cirurgia da mão por vídeo Santo Antônio da Platina',
      'Artroscopia de punho Paraná',
      'Cirurgião da mão em Santo Antônio da Platina',
      'Dr Sergio Leopolski cirurgia da mão',
      'Tratamento de lesões na mão clínica ou cirúrgica'
    ]
  }
];

export const CONDITIONS_DATA: ConditionItem[] = [
  {
    id: 'lesoes-esportivas',
    title: 'Lesões Esportivas & Sobrecargas',
    category: 'Medicina Esportiva',
    description:
      'Avaliação de entorses, distensões, contraturas e lesões causadas por práticas esportivas ou atividade física, com plano para retorno seguro.',
    informativeNote: 'Abordagem combinada com ondas de choque e sistema SIS Elite.'
  },
  {
    id: 'dores-joelho-quadril',
    title: 'Dores no Joelho e Quadril',
    category: 'Ortopedia e Traumatologia',
    description:
      'Diagnóstico de bursites trocantéricas, lesões meniscais, artrose precoce e condropatias com condutas focadas na preservação articular.',
    informativeNote: 'Avaliação clínica minuciosa com possibilidade de infiltração guiada.'
  },
  {
    id: 'dores-ombro-cotovelo',
    title: 'Dores no Ombro e Cotovelo',
    category: 'Ortopedia & Artroscopia',
    description:
      'Tratamento de tendinites do manguito rotador, bursite subacromial, capsulite adesiva e epicondilites medial/lateral no cotovelo.',
    informativeNote: 'Treinamento em artroscopia do cotovelo pelo conceituado IRCAD.'
  },
  {
    id: 'dores-coluna',
    title: 'Dores na Coluna Vertebral',
    category: 'Ortopedia Geral',
    description:
      'Acompanhamento de lombalgias, cervicalgias e contraturas musculares profundas que limitam a mobilidade na rotina diária.',
    informativeNote: 'Alívio sintomático através de neuromodulação magnética SIS Elite.'
  },
  {
    id: 'sindrome-tunel-carpo',
    title: 'Síndrome do Túnel do Carpo',
    category: 'Cirurgia da Mão e Punho',
    description:
      'Compressão do nervo mediano manifestada por formigamento noturno, perda de sensibilidade nas pontas dos dedos e diminuição da força manual.',
    informativeNote: 'Membro Titular da Associação Brasileira de Cirurgia da Mão (ABCM).'
  },
  {
    id: 'dores-maos-punhos',
    title: 'Dores nas Mãos, Dedos e Punhos',
    category: 'Cirurgia da Mão',
    description:
      'Investigação de dedo em gatilho, tendinite de De Quervain, cistos sinoviais e artrose da base do polegar (rizartrose).',
    informativeNote: 'Avaliação anatômica com ultrassom em tempo real.'
  },
  {
    id: 'tendinites-fascite',
    title: 'Tendinopatias e Fascite Plantar',
    category: 'Medicina Regenerativa',
    description:
      'Tratamento de dores crônicas na sola do pé (esporão de calcâneo), tendinite patelar e tendão de Aquiles.',
    informativeNote: 'Excelente resposta com terapia por ondas de choque radiais.'
  },
  {
    id: 'limitacoes-movimento',
    title: 'Limitações Articulares e Desgastes',
    category: 'Reabilitação Funcional',
    description:
      'Rigidez pós-traumática, osteoartrose e recuperação de amplitude motora para preservação da independência do paciente.',
    informativeNote: 'Cuidado individualizado com mais de 25 anos de experiência.'
  }
];

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    id: 'experiencia',
    number: '01',
    title: 'Mais de 25 anos de atuação médica',
    description:
      'Experiência consolidada no atendimento clínico e cirúrgico, com compromisso ético e atualização científica permanente nos maiores centros do país.'
  },
  {
    id: 'titulacoes',
    number: '02',
    title: 'Membro Titular SBOT, ABCM e AAOS',
    description:
      'Reconhecimento oficial pelas principais entidades ortopédicas brasileiras e pela American Academy of Orthopaedic Surgeons (EUA).'
  },
  {
    id: 'tecnologia-ultrassom',
    number: '03',
    title: 'Procedimentos guiados por ultrassom',
    description:
      'Infiltrações e bloqueios realizados com precisão milimétrica no próprio consultório, visualizando agulha e estruturas em tempo real.'
  },
  {
    id: 'tecnologia-avancada',
    number: '04',
    title: 'Tecnologias Avançadas no consultório',
    description:
      'Disponibilidade de Ondas de Choque Radiais e Sistema Super Indutivo SIS Elite para alívio da dor e estímulo regenerativo tecidual.'
  },
  {
    id: 'visao-integrada',
    number: '05',
    title: 'Visão Ortopédica e Esportiva Integrada',
    description:
      'Formação pelo Instituto Vita e CETRUS para atender desde lesões do dia a dia até as demandas complexas de atletas em alta performance.'
  },
  {
    id: 'convenios-facilidades',
    number: '06',
    title: 'Atendimento Unimed, Sanepar e Particular',
    description:
      'Estrutura acolhedora na Clínica Dr. Bardal em Santo Antônio da Platina, com suporte completo para marcação de consultas.'
  }
];

export const EDUCATIONAL_TOPICS: EducationalTopic[] = [
  {
    id: 'edu-1',
    category: 'Cirurgia da Mão',
    title: 'Formigamento nas mãos: quando investigar a Síndrome do Túnel do Carpo?',
    summary:
      'Compreenda os principais sinais de compressão nervosa no punho, fatores associados e a importância da avaliação médica precoce com especialista.',
    readingTime: 'Leitura informativa • 3 min',
    status: 'Conteúdo Educativo'
  },
  {
    id: 'edu-2',
    category: 'Medicina Esportiva & Regenerativa',
    title: 'Terapia por Ondas de Choque e SIS Elite: como a tecnologia acelera a recuperação?',
    summary:
      'Entenda como os recursos de ondas acústicas e estimulação eletromagnética de alta intensidade atuam na dor crônica e cicatrização tecidual.',
    readingTime: 'Leitura informativa • 4 min',
    status: 'Conteúdo Educativo'
  },
  {
    id: 'edu-3',
    category: 'Procedimentos no Consultório',
    title: 'Infiltrações e bloqueios guiados por ultrassom: por que a precisão em tempo real faz a diferença?',
    summary:
      'Saiba como o ultrassom musculoesquelético permite posicionar medicações exatamente na área lesionada com segurança e rapidez.',
    readingTime: 'Leitura informativa • 3 min',
    status: 'Conteúdo Educativo'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Carlos Eduardo S.',
    city: 'Santo Antônio da Platina – PR',
    specialtyTag: 'Cirurgia da Mão & Punho',
    rating: 5,
    comment:
      'Atendimento impecável na Clínica Dr. Bardal. O Dr. Sergio realizou o procedimento guiado por ultrassom e recuperei a força e o movimento da minha mão sem dor. Profissional ético e extremamente atencioso.',
    treatmentHighlight: 'Procedimento Guiado e Recuperação Funcional'
  },
  {
    id: 'test-2',
    author: 'Mariana F. Ribeiro',
    city: 'Santo Antônio da Platina – PR',
    specialtyTag: 'Medicina Esportiva & Regenerativa',
    rating: 5,
    comment:
      'Tive uma lesão no joelho correndo e o Dr. Sergio conduziu meu tratamento com ondas de choque e adaptação de treino. Voltei a correr com segurança e sem desconforto. Recomendo de olhos fechados!',
    treatmentHighlight: 'Retorno Seguro aos Treinos de Corrida'
  },
  {
    id: 'test-3',
    author: 'Roberto M. Antunes',
    city: 'Jacarezinho – PR',
    specialtyTag: 'Ortopedia e Articulações',
    rating: 5,
    comment:
      'Consultório pontual, com estrutura tecnológica impressionante e atendimento muito humano. O Dr. Sergio explica com clareza o diagnóstico e não tem pressa na consulta. Excelente médico!',
    treatmentHighlight: 'Diagnóstico Preciso e Tecnologias Avançadas'
  },
  {
    id: 'test-4',
    author: 'Lúcia Helena P.',
    city: 'Cambará – PR',
    specialtyTag: 'Síndrome do Túnel do Carpo',
    rating: 5,
    comment:
      'Sofria há meses com formigamentos noturnos nas mãos. A avaliação detalhada e o tratamento com o Dr. Sergio resolveram o problema. Minhas noites de sono voltaram a ser tranquilas!',
    treatmentHighlight: 'Alívio dos Formigamentos Noturnos'
  },
  {
    id: 'test-5',
    author: 'Paulo Sérgio Vieira',
    city: 'Santo Antônio da Platina – PR',
    specialtyTag: 'Ortopedia do Ombro',
    rating: 5,
    comment:
      'A comodidade de ter ultrassom e tecnologia de ponta no próprio consultório aqui em Santo Antônio da Platina é um diferencial enorme. O bloqueio guiado aliviou minha dor no ombro de forma imediata.',
    treatmentHighlight: 'Precisão e Alívio da Dor Articular'
  }
];
