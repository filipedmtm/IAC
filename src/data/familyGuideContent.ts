import type { Locale } from "@/i18n/LanguageProvider";

export type GuideSection = {
  title: string;
  text?: string;
  items?: string[];
};

export type FamilyGuide = {
  title: string;
  subtitle: string;
  intro: string[];
  note: string;
  sections: GuideSection[];
  download: string;
};

const pt: FamilyGuide = {
  title: "Guia da Família — A Jornada do Cuidado",
  subtitle:
    "Informação, orientação e apoio para pessoas com doenças raras e suas famílias.",
  intro: [
    "Receber uma suspeita diagnóstica, enfrentar um diagnóstico ou conviver com uma condição de saúde complexa pode transformar a rotina de uma pessoa e de toda a sua família. Em muitos casos, a jornada envolve consultas, exames, profissionais de diferentes áreas, tratamentos, reabilitação, decisões difíceis e a necessidade de compreender como acessar os serviços disponíveis.",
    "Este guia foi elaborado pelo Instituto Amor e Carinho para ajudar pacientes e familiares a compreender melhor essa jornada e a identificar caminhos para buscar informação, cuidado e apoio. O conteúdo foi construído a partir de informações públicas e materiais institucionais de referência, especialmente do Ministério da Saúde, SUS, CONITEC e outras fontes oficiais.",
    "O objetivo não é substituir médicos, psicólogos, assistentes sociais, advogados ou outros profissionais. É oferecer uma base de informação para que a família se sinta mais preparada para participar das decisões, organizar documentos, fazer perguntas e buscar os recursos disponíveis. A jornada de cada paciente é única.",
  ],
  note: "Importante: este guia tem caráter exclusivamente educativo e informativo. Não constitui diagnóstico, prescrição médica, indicação de tratamento ou orientação jurídica individualizada. Em situações de urgência ou emergência, procure imediatamente um serviço de saúde.",
  download: "Baixar o guia completo em PDF",
  sections: [
    {
      title: "Mapa da jornada do cuidado",
      text: "Cada família pode entrar na jornada em um ponto diferente e avançar, retornar ou percorrer várias etapas ao mesmo tempo. O cuidado é contínuo e deve ser adaptado às necessidades individuais.",
      items: [
        "1. Suspeita e investigação",
        "2. Diagnóstico",
        "3. Plano de cuidado",
        "4. Acesso a serviços e tratamento",
        "5. Acompanhamento e reabilitação",
        "6. Qualidade de vida e participação social",
        "7. Apoio à família e ao cuidador",
      ],
    },
    {
      title: "1. Quando existe uma suspeita",
      text: "Uma suspeita de doença rara pode surgir quando uma pessoa apresenta sinais ou sintomas não explicados por diagnósticos mais comuns, quando há manifestações em diferentes órgãos ou sistemas, ou quando existe histórico familiar sugestivo. Um sinal isolado não confirma uma doença rara.",
      items: [
        "Anote os principais sintomas, quando começaram e como evoluíram.",
        "Guarde exames, laudos, receitas e relatórios, mesmo com resultados normais.",
        "Registre internações, cirurgias, atendimentos de urgência e tratamentos anteriores.",
        "Organize informações sobre doenças relevantes na família.",
        "Pergunte qual é a hipótese diagnóstica e quais são os próximos passos.",
        "Procure saber quem coordena o cuidado e como será feito o encaminhamento.",
      ],
    },
    {
      title: "2. A busca pelo diagnóstico",
      text: "A variedade de condições, a sobreposição de sintomas com doenças mais frequentes e a necessidade de avaliação especializada podem tornar o percurso mais complexo. Muitas doenças raras têm origem genética: o aconselhamento genético ajuda a compreender diagnóstico, hereditariedade, risco de recorrência e opções disponíveis. Um resultado genético precisa sempre ser interpretado no contexto clínico.",
      items: [
        "Leve uma lista atualizada de medicamentos, suplementos e tratamentos em uso.",
        "Leve exames anteriores organizados por data.",
        "Anote perguntas antes da consulta.",
        "Se possível, leve um acompanhante para ajudar a registrar orientações.",
        "Peça explicações em linguagem que você compreenda.",
        "Confirme os próximos passos e quando deverá retornar.",
      ],
    },
    {
      title: "3. Quando o diagnóstico chega",
      text: "O diagnóstico pode trazer alívio por explicar uma trajetória de incertezas, mas também pode gerar medo, tristeza e insegurança. Não existe uma reação única ou correta. Quando possível, peça que a equipe explique o plano de cuidado de forma clara: objetivos, próximos passos, responsáveis, prazos e sinais que exigem atendimento imediato.",
      items: [
        "Qual é o nome da condição e quais são suas principais características.",
        "Quais manifestações podem ocorrer e quais sinais exigem atenção.",
        "Quais profissionais devem acompanhar o paciente.",
        "Quais tratamentos e cuidados estão disponíveis.",
        "Quais exames precisam ser realizados e com que frequência.",
        "Quais serviços de referência existem na região ou no SUS.",
        "Como será feito o acompanhamento de longo prazo.",
      ],
    },
    {
      title: "4. Entendendo o SUS e a rede de cuidado",
      text: "No Brasil, o cuidado das pessoas com doenças raras no SUS está organizado em uma rede que articula diferentes pontos de atenção. A Atenção Primária é porta de entrada prioritária e coordena o cuidado; a Atenção Especializada complementa com serviços ambulatoriais e hospitalares. O Meu SUS Digital, acessado com conta Gov.br, reúne informações e serviços de saúde integrados ao SUS.",
      items: [
        "O paciente pode precisar de mais de um serviço ao longo da jornada.",
        "O cuidado não deve se limitar a uma única especialidade.",
        "A comunicação entre profissionais evita perda de informações.",
        "A família pode perguntar qual é o serviço de referência e como ocorre o encaminhamento.",
        "A organização da rede pode variar conforme o município e o estado.",
      ],
    },
    {
      title: "5. Tratamento, reabilitação e cuidados contínuos",
      text: "Nem toda doença rara possui tratamento específico. Em muitas condições, o cuidado busca reduzir sintomas e complicações, preservar funções e melhorar a qualidade de vida, com abordagens multidisciplinares. Em vez de perguntar apenas “qual é o tratamento?”, pode ser útil perguntar: “Qual é o objetivo de cada cuidado e como saberemos se está funcionando?”",
      items: [
        "Medicamentos e outras terapias, quando indicados.",
        "Fisioterapia, terapia ocupacional e fonoaudiologia.",
        "Nutrição e acompanhamento odontológico.",
        "Psicologia e assistência social.",
        "Enfermagem e acompanhamento médico especializado.",
        "Reabilitação e tecnologias assistivas, quando necessárias.",
        "Cuidados paliativos, quando indicados, com foco na qualidade de vida.",
      ],
    },
    {
      title: "6. Medicamentos e acesso a tecnologias em saúde",
      text: "A incorporação de uma tecnologia ao SUS passa por avaliação da CONITEC, considerando evidências de segurança e eficácia, custo-efetividade, necessidade e impacto orçamentário. O registro sanitário e a incorporação ao SUS são processos distintos.",
      items: [
        "Mantenha uma lista atualizada de todos os medicamentos.",
        "Registre dose, horário e frequência conforme orientação profissional.",
        "Anote efeitos adversos ou mudanças percebidas.",
        "Não interrompa ou altere medicamentos sem conversar com a equipe.",
        "Guarde prescrições, relatórios e documentos necessários para solicitações.",
        "Pergunte quais são as alternativas caso um medicamento não esteja disponível.",
      ],
    },
    {
      title: "7. Direitos e participação no cuidado",
      text: "A Carta dos Direitos e Deveres da Pessoa Usuária da Saúde apresenta princípios que orientam o acesso aos serviços: acesso organizado, tratamento adequado e efetivo, atendimento humanizado e respeito à pessoa, seus valores e direitos.",
      items: [
        "Pedir informações claras sobre o diagnóstico e o tratamento.",
        "Perguntar quais serviços estão disponíveis e como acessá-los.",
        "Solicitar explicações quando não compreender uma orientação.",
        "Registrar protocolos, nomes de serviços e datas de solicitações.",
        "Guardar documentos e comprovantes de atendimento.",
        "Buscar os canais de ouvidoria quando não conseguir resolver uma demanda.",
      ],
    },
    {
      title: "8. Quando o tratamento acontece fora da cidade",
      text: "No SUS existe o Tratamento Fora do Domicílio (TFD), para situações em que o paciente necessita de atendimento fora do município de residência. As regras podem variar conforme a gestão local: consulte a Secretaria Municipal ou Estadual de Saúde.",
      items: [
        "Confirme a data, o local e o serviço onde será atendido.",
        "Verifique quais documentos e exames devem ser levados.",
        "Pergunte sobre transporte e acompanhante, quando aplicável.",
        "Confirme previamente os procedimentos administrativos necessários.",
        "Guarde comprovantes e protocolos relacionados à solicitação.",
      ],
    },
    {
      title: "9. Organizando a jornada do paciente",
      text: "Criar um arquivo pessoal de saúde — físico, digital ou híbrido — reduz a perda de informações. Uma linha do tempo simples com os principais acontecimentos ajuda novos profissionais a compreender rapidamente a trajetória do paciente.",
      items: [
        "Documento de identificação e Cartão Nacional de Saúde (CNS).",
        "Lista atualizada de medicamentos.",
        "Diagnósticos e hipóteses diagnósticas.",
        "Laudos e relatórios médicos.",
        "Exames laboratoriais e de imagem.",
        "Resultados de testes genéticos, quando houver.",
        "Histórico de internações e cirurgias.",
        "Lista de profissionais e contatos dos serviços de saúde.",
        "Registro de alergias e reações adversas.",
      ],
    },
    {
      title: "10. A família e o cuidador também precisam de cuidado",
      text: "Cuidar do cuidador não é egoísmo, é parte do cuidado. Quando necessário, procure apoio psicológico, social ou de outros profissionais. Dividir responsabilidades e construir uma rede de apoio ajuda a reduzir a sobrecarga.",
      items: [
        "Cansaço constante e dificuldade para descansar.",
        "Sensação de estar sozinho ou sem recursos para lidar com a situação.",
        "Ansiedade, tristeza ou irritabilidade persistentes.",
        "Dificuldade para manter atividades pessoais ou profissionais.",
        "Conflitos familiares frequentes.",
        "Sensação de culpa ou incapacidade.",
      ],
    },
    {
      title: "11. Crianças, adolescentes e transições de cuidado",
      text: "A transição do cuidado pediátrico para o adulto deve ser gradual e planejada, fortalecendo a autonomia e garantindo continuidade do acompanhamento.",
      items: [
        "Mantenha comunicação com a escola, respeitando a privacidade da criança ou adolescente.",
        "Converse com profissionais sobre adaptações necessárias.",
        "Registre orientações relevantes para professores e cuidadores.",
        "Estimule a participação da criança nas decisões, conforme sua idade.",
        "Planeje com antecedência a transição para o cuidado adulto.",
      ],
    },
    {
      title: "12. Pesquisa, inovação e participação do paciente",
      text: "A pesquisa é fundamental para ampliar o conhecimento sobre doenças raras. A participação deve ser voluntária, consciente e de acordo com as normas éticas aplicáveis.",
      items: [
        "Qual é o objetivo do estudo?",
        "O que será solicitado ao participante?",
        "Quais são os possíveis benefícios e riscos?",
        "Quais informações e amostras serão coletadas?",
        "Como os dados serão protegidos?",
        "É possível sair do estudo a qualquer momento?",
        "Quem pode ser contatado em caso de dúvidas?",
      ],
    },
    {
      title: "13. Advocacy: a voz de pacientes e famílias",
      text: "Advocacy é a atuação organizada para defender direitos, ampliar o acesso ao cuidado e contribuir para mudanças em políticas públicas.",
      items: [
        "Compartilhar experiências de forma responsável, protegendo a privacidade.",
        "Participar de consultas e audiências públicas.",
        "Acompanhar discussões sobre políticas de saúde.",
        "Buscar fontes oficiais antes de compartilhar conteúdos.",
        "Participar de organizações e iniciativas legítimas de defesa de direitos.",
      ],
    },
    {
      title: "14. Checklist: prepare-se para a próxima consulta",
      items: [
        "Antes: separe exames recentes, atualize a lista de medicamentos, anote mudanças nos sintomas e dúvidas, confirme local, data e horário.",
        "Durante: entenda o próximo passo, quais exames realizar, como usar os medicamentos, quando retornar e quais sinais exigem atendimento imediato.",
        "Depois: organize os novos documentos, atualize a linha do tempo, registre as orientações e agende os próximos procedimentos.",
      ],
    },
    {
      title: "15. Onde buscar informações confiáveis",
      text: "Antes de seguir uma orientação encontrada na internet, verifique a fonte, a data da publicação e se há evidências ou referência institucional. Canais e regras podem mudar: consulte sempre as páginas oficiais.",
      items: [
        "Ministério da Saúde — doenças raras, linha de cuidado, tratamentos e políticas públicas.",
        "CONITEC — avaliação e incorporação de tecnologias e PCDT.",
        "ANVISA — informações regulatórias sobre medicamentos e produtos para saúde.",
        "Meu SUS Digital — acesso digital a informações e serviços do SUS.",
        "Secretarias de Saúde — serviços locais, regulação e fluxos de atendimento.",
      ],
    },
    {
      title: "16. Perguntas frequentes",
      items: [
        "Uma doença rara sempre é genética? Não. Existem também causas infecciosas, imunológicas, ambientais e outras.",
        "Toda pessoa com doença rara precisa de um centro especializado? Nem sempre; depende da condição e das necessidades individuais.",
        "Existe tratamento para todas as doenças raras? Não, mas a ausência de tratamento específico não significa ausência de cuidado.",
        "Um medicamento aprovado no Brasil é automaticamente fornecido pelo SUS? Não. Registro sanitário e incorporação ao SUS são processos distintos.",
        "O que fazer quando não sei por onde começar? Comece pelo serviço de saúde que acompanha o paciente e peça orientação sobre o próximo passo.",
      ],
    },
    {
      title: "17. Mensagem do Instituto Amor e Carinho",
      text: "Nenhuma família deveria precisar enfrentar sozinha uma jornada de cuidado complexa. Acreditamos que informação, acolhimento, orientação e acesso são partes fundamentais do cuidado. Este guia é um ponto de partida: a jornada continua em cada consulta, cada decisão e cada passo em direção a um cuidado mais integral e humanizado.",
    },
  ],
};

const en: FamilyGuide = {
  title: "Family Guide — The Care Journey",
  subtitle:
    "Information, guidance and support for people living with rare diseases and their families.",
  intro: [
    "Facing a suspected or confirmed diagnosis, or living with a complex health condition, can transform the routine of a person and their whole family. The journey often involves appointments, tests, professionals from different fields, treatments, rehabilitation, difficult decisions and the need to understand how to access available services.",
    "This guide was created by Instituto Amor e Carinho to help patients and families better understand that journey and find paths to information, care and support. The content was built from public information and institutional references, especially Brazil's Ministry of Health, SUS, CONITEC and other official sources.",
    "It does not replace doctors, psychologists, social workers, lawyers or other professionals. It offers a base of information so families feel more prepared to take part in decisions, organise documents, ask questions and seek available resources. Every patient's journey is unique.",
  ],
  note: "Important: this guide is strictly educational and informative. It is not a diagnosis, prescription, treatment recommendation or individual legal advice. In an emergency, seek health care immediately.",
  download: "Download the full guide (PDF)",
  sections: [
    {
      title: "Map of the care journey",
      text: "Each family may enter the journey at a different point and move forward, go back or go through several stages at once. Care is continuous and must be adapted to individual needs.",
      items: [
        "1. Suspicion and investigation",
        "2. Diagnosis",
        "3. Care plan",
        "4. Access to services and treatment",
        "5. Follow-up and rehabilitation",
        "6. Quality of life and social participation",
        "7. Support for the family and caregiver",
      ],
    },
    {
      title: "1. When there is a suspicion",
      text: "A rare disease may be suspected when signs or symptoms are not explained by more common diagnoses, when several organs or systems are affected, or when there is a suggestive family history. An isolated sign does not confirm a rare disease.",
      items: [
        "Write down the main symptoms, when they started and how they progressed.",
        "Keep tests, reports and prescriptions, even when results seem normal.",
        "Record hospital stays, surgeries, emergency visits and previous treatments.",
        "Organise information about relevant conditions in the family.",
        "Ask what the diagnostic hypothesis is and what the next steps are.",
        "Find out who coordinates the care and how referrals are made.",
      ],
    },
    {
      title: "2. The search for a diagnosis",
      text: "The variety of conditions, overlapping symptoms and the need for specialised assessment can make the path complex. Many rare diseases are genetic: genetic counselling helps families understand diagnosis, inheritance, recurrence risk and available options. Genetic results must always be interpreted in a clinical context.",
      items: [
        "Bring an updated list of medications, supplements and treatments in use.",
        "Bring previous test results organised by date.",
        "Write down your questions before the appointment.",
        "If possible, bring someone with you to help record instructions.",
        "Ask for explanations in language you understand.",
        "Confirm the next steps and when you should return.",
      ],
    },
    {
      title: "3. When the diagnosis arrives",
      text: "A diagnosis can bring relief after uncertainty, but also fear, sadness and insecurity. There is no single correct reaction. Whenever possible, ask the team to explain the care plan clearly: goals, next steps, who is responsible, timelines and signs that require immediate care.",
      items: [
        "The name of the condition and its main characteristics.",
        "Which manifestations may occur and which signs require attention.",
        "Which professionals should follow the patient.",
        "Which treatments and care options are available.",
        "Which tests are needed and how often.",
        "Which reference services exist in the region or in the public system.",
        "How long-term follow-up will work.",
      ],
    },
    {
      title: "4. Understanding the health system and care network",
      text: "In Brazil, care for people with rare diseases in SUS is organised in a network. Primary care is the main entry point and coordinates care; specialised care adds outpatient and hospital services. Meu SUS Digital, accessed with a Gov.br account, gathers health information and services integrated with SUS.",
      items: [
        "A patient may need more than one service along the journey.",
        "Care should not be limited to a single speciality.",
        "Communication between professionals prevents loss of information.",
        "Families can ask which service is the reference and how referral works.",
        "Network organisation varies by city and state.",
      ],
    },
    {
      title: "5. Treatment, rehabilitation and continuous care",
      text: "Not every rare disease has a specific treatment. In many conditions, care aims to reduce symptoms and complications, preserve function and improve quality of life through multidisciplinary approaches. Instead of only asking “what is the treatment?”, ask “what is the goal of each intervention and how will we know it is working?”",
      items: [
        "Medication and other therapies, when indicated.",
        "Physiotherapy, occupational therapy and speech therapy.",
        "Nutrition and dental follow-up.",
        "Psychology and social assistance.",
        "Nursing and specialised medical follow-up.",
        "Rehabilitation and assistive technologies, when needed.",
        "Palliative care, when indicated, focused on quality of life.",
      ],
    },
    {
      title: "6. Medicines and access to health technologies",
      text: "Incorporating a technology into the public system requires CONITEC assessment, considering safety and efficacy evidence, cost-effectiveness, need and budget impact. Regulatory approval and public-system incorporation are distinct processes.",
      items: [
        "Keep an updated list of all medications.",
        "Record dose, time and frequency as instructed.",
        "Note adverse effects or perceived changes.",
        "Never stop or change medication without talking to the team.",
        "Keep prescriptions, reports and documents needed for requests.",
        "Ask about alternatives if a medicine is unavailable.",
      ],
    },
    {
      title: "7. Rights and participation in care",
      text: "The Charter of Rights and Duties of Health Service Users sets out principles guiding access: organised access, adequate and effective treatment, humanised care and respect for the person, their values and rights.",
      items: [
        "Ask for clear information about diagnosis and treatment.",
        "Ask which services are available and how to access them.",
        "Request explanations whenever guidance is unclear.",
        "Record protocol numbers, service names and request dates.",
        "Keep documents and proof of care.",
        "Use ombudsman channels when a demand cannot be resolved.",
      ],
    },
    {
      title: "8. When treatment happens in another city",
      text: "Brazil's public system has Treatment Outside the Home Municipality (TFD) for situations where the patient needs care outside their city of residence. Rules vary by local management: check with the municipal or state health department.",
      items: [
        "Confirm the date, place and service.",
        "Check which documents and tests to bring.",
        "Ask about transport and a companion, when applicable.",
        "Confirm the administrative procedures in advance.",
        "Keep receipts and protocols related to the request.",
      ],
    },
    {
      title: "9. Organising the patient journey",
      text: "Creating a personal health file — physical, digital or hybrid — reduces loss of information. A simple timeline of key events helps new professionals quickly understand the patient's history.",
      items: [
        "ID document and national health card.",
        "Updated medication list.",
        "Diagnoses and diagnostic hypotheses.",
        "Medical reports.",
        "Laboratory and imaging results.",
        "Genetic test results, if any.",
        "History of hospitalisations and surgeries.",
        "List of professionals and health service contacts.",
        "Record of allergies and adverse reactions.",
      ],
    },
    {
      title: "10. Families and caregivers also need care",
      text: "Caring for the caregiver is not selfish — it is part of care. When needed, seek psychological, social or other professional support. Sharing responsibilities and building a support network reduces overload.",
      items: [
        "Constant tiredness and difficulty resting.",
        "Feeling alone or without resources to cope.",
        "Persistent anxiety, sadness or irritability.",
        "Difficulty maintaining personal or professional activities.",
        "Frequent family conflict.",
        "Feelings of guilt or inadequacy.",
      ],
    },
    {
      title: "11. Children, adolescents and care transitions",
      text: "The transition from paediatric to adult care should be gradual and planned, strengthening autonomy and ensuring continuity of follow-up.",
      items: [
        "Keep communication with the school, respecting the child's privacy.",
        "Talk with professionals about necessary adaptations.",
        "Record guidance relevant to teachers and caregivers.",
        "Encourage the child's participation in decisions, according to age.",
        "Plan the transition to adult care well in advance.",
      ],
    },
    {
      title: "12. Research, innovation and patient participation",
      text: "Research is essential to expand knowledge about rare diseases. Participation must be voluntary, informed and in line with applicable ethical rules.",
      items: [
        "What is the aim of the study?",
        "What will be asked of the participant?",
        "What are the possible benefits and risks?",
        "What information and samples will be collected?",
        "How will the data be protected?",
        "Can the participant leave the study at any time?",
        "Who can be contacted with questions?",
      ],
    },
    {
      title: "13. Advocacy: the voice of patients and families",
      text: "Advocacy is organised action to defend rights, expand access to care and contribute to changes in public policy.",
      items: [
        "Share experiences responsibly, protecting privacy.",
        "Take part in public consultations and hearings.",
        "Follow discussions about health policy.",
        "Check official sources before sharing content.",
        "Join legitimate organisations and rights initiatives.",
      ],
    },
    {
      title: "14. Checklist: preparing for your next appointment",
      items: [
        "Before: gather recent test results, update the medication list, note symptom changes and questions, confirm place, date and time.",
        "During: understand the next step, which tests are needed, how to use medication, when to return and which signs require immediate care.",
        "After: organise new documents, update the timeline, record guidance and schedule the next procedures.",
      ],
    },
    {
      title: "15. Where to find reliable information",
      text: "Before following guidance found online, check the source, publication date and whether there is evidence or an institutional reference. Channels and rules change: always consult official pages.",
      items: [
        "Ministry of Health — rare diseases, care pathways, treatments and policies.",
        "CONITEC — technology assessment and clinical protocols.",
        "ANVISA — regulatory information on medicines and health products.",
        "Meu SUS Digital — digital access to public health information and services.",
        "Health departments — local services, regulation and care flows.",
      ],
    },
    {
      title: "16. Frequently asked questions",
      items: [
        "Is a rare disease always genetic? No. There are also infectious, immunological, environmental and other causes.",
        "Does everyone with a rare disease need a specialised centre? Not always; it depends on the condition and individual needs.",
        "Is there treatment for every rare disease? No, but the absence of specific treatment does not mean absence of care.",
        "Is an approved medicine automatically provided by the public system? No. Regulatory approval and public incorporation are distinct processes.",
        "What if I don't know where to start? Start with the health service already following the patient and ask for guidance on the next step.",
      ],
    },
    {
      title: "17. A message from Instituto Amor e Carinho",
      text: "No family should have to face a complex care journey alone. We believe information, welcome, guidance and access are fundamental parts of care. This guide is a starting point: the journey continues with every appointment, every decision and every step towards more integral and humane care.",
    },
  ],
};

const es: FamilyGuide = {
  title: "Guía de la Familia — El Camino del Cuidado",
  subtitle:
    "Información, orientación y apoyo para personas con enfermedades raras y sus familias.",
  intro: [
    "Recibir una sospecha diagnóstica, enfrentar un diagnóstico o convivir con una condición de salud compleja puede transformar la rutina de una persona y de toda su familia. El camino suele incluir consultas, exámenes, profesionales de distintas áreas, tratamientos, rehabilitación, decisiones difíciles y la necesidad de entender cómo acceder a los servicios disponibles.",
    "Esta guía fue elaborada por el Instituto Amor e Carinho para ayudar a pacientes y familiares a comprender mejor ese camino y a encontrar vías de información, cuidado y apoyo. El contenido se construyó a partir de información pública y materiales institucionales de referencia, especialmente del Ministerio de Salud de Brasil, del SUS, de CONITEC y de otras fuentes oficiales.",
    "No sustituye a médicos, psicólogos, trabajadores sociales, abogados u otros profesionales. Ofrece una base de información para que la familia se sienta más preparada para participar en las decisiones, organizar documentos, hacer preguntas y buscar los recursos disponibles. El camino de cada paciente es único.",
  ],
  note: "Importante: esta guía tiene carácter exclusivamente educativo e informativo. No constituye diagnóstico, prescripción médica, indicación de tratamiento ni orientación jurídica individual. Ante una urgencia, busque atención de salud de inmediato.",
  download: "Descargar la guía completa (PDF)",
  sections: [
    {
      title: "Mapa del camino del cuidado",
      text: "Cada familia puede entrar en el camino en un punto distinto y avanzar, retroceder o recorrer varias etapas a la vez. El cuidado es continuo y debe adaptarse a las necesidades individuales.",
      items: [
        "1. Sospecha e investigación",
        "2. Diagnóstico",
        "3. Plan de cuidado",
        "4. Acceso a servicios y tratamiento",
        "5. Seguimiento y rehabilitación",
        "6. Calidad de vida y participación social",
        "7. Apoyo a la familia y al cuidador",
      ],
    },
    {
      title: "1. Cuando existe una sospecha",
      text: "Una enfermedad rara puede sospecharse cuando hay signos o síntomas no explicados por diagnósticos más comunes, cuando se afectan distintos órganos o sistemas, o cuando existe historia familiar sugestiva. Un signo aislado no confirma una enfermedad rara.",
      items: [
        "Anote los principales síntomas, cuándo comenzaron y cómo evolucionaron.",
        "Guarde exámenes, informes y recetas, aunque los resultados parezcan normales.",
        "Registre internaciones, cirugías, urgencias y tratamientos anteriores.",
        "Organice información sobre enfermedades relevantes en la familia.",
        "Pregunte cuál es la hipótesis diagnóstica y los próximos pasos.",
        "Averigüe quién coordina el cuidado y cómo se hacen las derivaciones.",
      ],
    },
    {
      title: "2. La búsqueda del diagnóstico",
      text: "La variedad de condiciones, la superposición de síntomas y la necesidad de evaluación especializada pueden hacer el recorrido más complejo. Muchas enfermedades raras son genéticas: el asesoramiento genético ayuda a comprender diagnóstico, herencia, riesgo de recurrencia y opciones. Un resultado genético siempre debe interpretarse en contexto clínico.",
      items: [
        "Lleve una lista actualizada de medicamentos, suplementos y tratamientos.",
        "Lleve exámenes anteriores organizados por fecha.",
        "Anote sus preguntas antes de la consulta.",
        "Si es posible, vaya acompañado para registrar las orientaciones.",
        "Pida explicaciones en un lenguaje que usted comprenda.",
        "Confirme los próximos pasos y cuándo debe volver.",
      ],
    },
    {
      title: "3. Cuando llega el diagnóstico",
      text: "El diagnóstico puede traer alivio tras la incertidumbre, pero también miedo, tristeza e inseguridad. No hay una única reacción correcta. Cuando sea posible, pida que el equipo explique el plan de cuidado con claridad: objetivos, próximos pasos, responsables, plazos y señales que exigen atención inmediata.",
      items: [
        "Cuál es el nombre de la condición y sus principales características.",
        "Qué manifestaciones pueden ocurrir y qué señales exigen atención.",
        "Qué profesionales deben acompañar al paciente.",
        "Qué tratamientos y cuidados están disponibles.",
        "Qué exámenes se necesitan y con qué frecuencia.",
        "Qué servicios de referencia existen en la región.",
        "Cómo será el seguimiento a largo plazo.",
      ],
    },
    {
      title: "4. Entender el sistema y la red de cuidado",
      text: "En Brasil, el cuidado de personas con enfermedades raras en el SUS se organiza en red. La Atención Primaria es puerta de entrada prioritaria y coordina el cuidado; la Atención Especializada lo complementa con servicios ambulatorios y hospitalarios. Meu SUS Digital, con cuenta Gov.br, reúne información y servicios integrados al SUS.",
      items: [
        "El paciente puede necesitar más de un servicio a lo largo del camino.",
        "El cuidado no debe limitarse a una única especialidad.",
        "La comunicación entre profesionales evita la pérdida de información.",
        "La familia puede preguntar cuál es el servicio de referencia y cómo se deriva.",
        "La organización de la red varía según el municipio y el estado.",
      ],
    },
    {
      title: "5. Tratamiento, rehabilitación y cuidados continuos",
      text: "No toda enfermedad rara tiene tratamiento específico. En muchas condiciones el cuidado busca reducir síntomas y complicaciones, preservar funciones y mejorar la calidad de vida, con abordajes multidisciplinarios. En lugar de preguntar solo “¿cuál es el tratamiento?”, pregunte “¿cuál es el objetivo de cada cuidado y cómo sabremos si funciona?”",
      items: [
        "Medicamentos y otras terapias, cuando estén indicados.",
        "Fisioterapia, terapia ocupacional y fonoaudiología.",
        "Nutrición y seguimiento odontológico.",
        "Psicología y asistencia social.",
        "Enfermería y seguimiento médico especializado.",
        "Rehabilitación y tecnologías de apoyo, cuando sean necesarias.",
        "Cuidados paliativos, cuando estén indicados.",
      ],
    },
    {
      title: "6. Medicamentos y acceso a tecnologías en salud",
      text: "La incorporación de una tecnología al sistema público pasa por la evaluación de CONITEC, considerando evidencia de seguridad y eficacia, costo-efectividad, necesidad e impacto presupuestario. El registro sanitario y la incorporación al SUS son procesos distintos.",
      items: [
        "Mantenga una lista actualizada de todos los medicamentos.",
        "Registre dosis, horario y frecuencia según la orientación profesional.",
        "Anote efectos adversos o cambios percibidos.",
        "No interrumpa ni cambie medicamentos sin hablar con el equipo.",
        "Guarde recetas, informes y documentos necesarios para solicitudes.",
        "Pregunte por alternativas si un medicamento no está disponible.",
      ],
    },
    {
      title: "7. Derechos y participación en el cuidado",
      text: "La Carta de Derechos y Deberes de la Persona Usuaria de la Salud presenta principios que orientan el acceso: acceso organizado, tratamiento adecuado y efectivo, atención humanizada y respeto a la persona, sus valores y derechos.",
      items: [
        "Pedir información clara sobre el diagnóstico y el tratamiento.",
        "Preguntar qué servicios están disponibles y cómo acceder.",
        "Solicitar explicaciones cuando algo no se comprenda.",
        "Registrar protocolos, nombres de servicios y fechas de solicitudes.",
        "Guardar documentos y comprobantes de atención.",
        "Recurrir a los canales de defensoría cuando no se resuelva una demanda.",
      ],
    },
    {
      title: "8. Cuando el tratamiento ocurre fuera de la ciudad",
      text: "En el SUS existe el Tratamiento Fuera del Domicilio (TFD) para situaciones en que el paciente necesita atención fuera de su municipio. Las reglas varían según la gestión local: consulte la Secretaría Municipal o Estatal de Salud.",
      items: [
        "Confirme la fecha, el lugar y el servicio de atención.",
        "Verifique qué documentos y exámenes debe llevar.",
        "Pregunte por transporte y acompañante, cuando corresponda.",
        "Confirme previamente los trámites administrativos necesarios.",
        "Guarde comprobantes y protocolos de la solicitud.",
      ],
    },
    {
      title: "9. Organizar el camino del paciente",
      text: "Crear un archivo personal de salud — físico, digital o híbrido — reduce la pérdida de información. Una línea de tiempo simple ayuda a nuevos profesionales a comprender rápidamente la trayectoria del paciente.",
      items: [
        "Documento de identidad y tarjeta nacional de salud.",
        "Lista actualizada de medicamentos.",
        "Diagnósticos e hipótesis diagnósticas.",
        "Informes médicos.",
        "Exámenes de laboratorio e imagen.",
        "Resultados de pruebas genéticas, si las hubiera.",
        "Historial de internaciones y cirugías.",
        "Lista de profesionales y contactos de los servicios.",
        "Registro de alergias y reacciones adversas.",
      ],
    },
    {
      title: "10. La familia y el cuidador también necesitan cuidado",
      text: "Cuidar al cuidador no es egoísmo, es parte del cuidado. Cuando sea necesario, busque apoyo psicológico, social o profesional. Compartir responsabilidades y construir una red de apoyo reduce la sobrecarga.",
      items: [
        "Cansancio constante y dificultad para descansar.",
        "Sensación de soledad o de falta de recursos para afrontar la situación.",
        "Ansiedad, tristeza o irritabilidad persistentes.",
        "Dificultad para mantener actividades personales o profesionales.",
        "Conflictos familiares frecuentes.",
        "Sensación de culpa o incapacidad.",
      ],
    },
    {
      title: "11. Niños, adolescentes y transiciones de cuidado",
      text: "La transición del cuidado pediátrico al adulto debe ser gradual y planificada, fortaleciendo la autonomía y garantizando la continuidad del seguimiento.",
      items: [
        "Mantenga comunicación con la escuela, respetando la privacidad.",
        "Converse con los profesionales sobre las adaptaciones necesarias.",
        "Registre orientaciones relevantes para docentes y cuidadores.",
        "Estimule la participación del niño en las decisiones, según su edad.",
        "Planifique con antelación la transición al cuidado adulto.",
      ],
    },
    {
      title: "12. Investigación, innovación y participación del paciente",
      text: "La investigación es fundamental para ampliar el conocimiento sobre enfermedades raras. La participación debe ser voluntaria, informada y conforme a las normas éticas aplicables.",
      items: [
        "¿Cuál es el objetivo del estudio?",
        "¿Qué se le pedirá al participante?",
        "¿Cuáles son los posibles beneficios y riesgos?",
        "¿Qué información y muestras se recogerán?",
        "¿Cómo se protegerán los datos?",
        "¿Se puede abandonar el estudio en cualquier momento?",
        "¿A quién contactar en caso de dudas?",
      ],
    },
    {
      title: "13. Advocacy: la voz de pacientes y familias",
      text: "Advocacy es la actuación organizada para defender derechos, ampliar el acceso al cuidado y contribuir a cambios en las políticas públicas.",
      items: [
        "Compartir experiencias de forma responsable, protegiendo la privacidad.",
        "Participar en consultas y audiencias públicas.",
        "Acompañar las discusiones sobre políticas de salud.",
        "Consultar fuentes oficiales antes de compartir contenidos.",
        "Participar en organizaciones e iniciativas legítimas de defensa de derechos.",
      ],
    },
    {
      title: "14. Checklist: prepárese para la próxima consulta",
      items: [
        "Antes: reúna los exámenes recientes, actualice la lista de medicamentos, anote cambios y dudas, confirme lugar, fecha y hora.",
        "Durante: comprenda el próximo paso, qué exámenes hacer, cómo usar los medicamentos, cuándo volver y qué señales exigen atención inmediata.",
        "Después: organice los nuevos documentos, actualice la línea de tiempo, registre las orientaciones y agende los próximos procedimientos.",
      ],
    },
    {
      title: "15. Dónde buscar información confiable",
      text: "Antes de seguir una orientación encontrada en internet, verifique la fuente, la fecha y si presenta evidencia o referencia institucional. Los canales y reglas cambian: consulte siempre las páginas oficiales.",
      items: [
        "Ministerio de Salud — enfermedades raras, líneas de cuidado y políticas públicas.",
        "CONITEC — evaluación de tecnologías y protocolos clínicos.",
        "ANVISA — información regulatoria sobre medicamentos y productos de salud.",
        "Meu SUS Digital — acceso digital a información y servicios del SUS.",
        "Secretarías de Salud — servicios locales, regulación y flujos de atención.",
      ],
    },
    {
      title: "16. Preguntas frecuentes",
      items: [
        "¿Una enfermedad rara siempre es genética? No. También hay causas infecciosas, inmunológicas, ambientales y otras.",
        "¿Toda persona con enfermedad rara necesita un centro especializado? No siempre; depende de la condición y de las necesidades individuales.",
        "¿Existe tratamiento para todas las enfermedades raras? No, pero la ausencia de tratamiento específico no significa ausencia de cuidado.",
        "¿Un medicamento aprobado se entrega automáticamente en el sistema público? No. El registro sanitario y la incorporación son procesos distintos.",
        "¿Qué hacer si no sé por dónde empezar? Comience por el servicio de salud que acompaña al paciente y pida orientación sobre el próximo paso.",
      ],
    },
    {
      title: "17. Mensaje del Instituto Amor e Carinho",
      text: "Ninguna familia debería enfrentar sola un camino de cuidado complejo. Creemos que información, acogida, orientación y acceso son partes fundamentales del cuidado. Esta guía es un punto de partida: el camino continúa en cada consulta, cada decisión y cada paso hacia un cuidado más integral y humanizado.",
    },
  ],
};

export const familyGuideContent: Record<Locale, FamilyGuide> = { pt, en, es };
