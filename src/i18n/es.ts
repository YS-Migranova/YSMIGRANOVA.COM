// Diccionario principal (español). Define la estructura que deben seguir el resto de idiomas.
const es = {
  meta: {
    siteName: 'YS MIGRANOVA – Soluciones Migratorias Europeas',
    description:
      'Asesoría migratoria europea: visados, residencia, reagrupación familiar, permisos de trabajo y nacionalidad. Consultas virtuales en español, neerlandés, inglés y francés.',
  },
  tagline: 'Tu puente seguro hacia nuevas oportunidades en Europa',
  nav: {
    home: 'Inicio',
    services: 'Servicios',
    consultations: 'Consultas virtuales',
    about: 'Sobre nosotros',
    news: 'Noticias',
    contact: 'Contacto',
    portal: 'Portal de clientes',
    cta: 'Reservar consulta',
    menu: 'Menú',
    close: 'Cerrar',
    language: 'Idioma',
  },
  common: {
    learnMore: 'Saber más',
    readMore: 'Leer artículo',
    backToNews: 'Volver a noticias',
    allServices: 'Ver todos los servicios',
    bookConsultation: 'Reservar consulta virtual',
    contactUs: 'Contáctanos',
    required: 'obligatorio',
    minutes: 'min',
  },
  home: {
    eyebrow: 'Soluciones Migratorias Europeas',
    intro:
      'Acompañamos a personas, familias y empresas en cada paso de su proceso migratorio hacia Europa, con rigor jurídico, cercanía humana y atención en tu idioma.',
    ctaPrimary: 'Reservar consulta virtual',
    ctaSecondary: 'Descubrir servicios',
    stats: [
      { value: '4', label: 'idiomas de atención' },
      { value: '27', label: 'países de la UE cubiertos' },
      { value: '100 %', label: 'consultas en línea' },
      { value: '48 h', label: 'respuesta inicial' },
    ],
    servicesEyebrow: 'Qué hacemos',
    servicesTitle: 'Servicios migratorios a tu medida',
    servicesIntro:
      'Desde la primera consulta hasta la resolución final, preparamos y revisamos cada expediente para que avances con seguridad.',
    whyEyebrow: 'Por qué elegirnos',
    whyTitle: 'Un acompañamiento serio, claro y cercano',
    whyItems: [
      {
        title: 'Rigor jurídico',
        text: 'Analizamos tu caso según la normativa vigente de cada país europeo y te explicamos tus opciones reales.',
      },
      {
        title: 'Atención multilingüe',
        text: 'Te atendemos en español, neerlandés, inglés y francés para que nada se pierda en la traducción.',
      },
      {
        title: 'Transparencia total',
        text: 'Presupuestos cerrados, plazos realistas y seguimiento claro de cada fase de tu expediente.',
      },
      {
        title: 'Desde cualquier lugar',
        text: 'Consultas virtuales seguras y gestión documental en línea, estés donde estés.',
      },
    ],
    processEyebrow: 'Cómo trabajamos',
    processTitle: 'Tu camino hacia Europa en cuatro pasos',
    process: [
      { title: 'Consulta inicial', text: 'Escuchamos tu situación y objetivos en una videollamada.' },
      { title: 'Estudio del caso', text: 'Evaluamos la vía migratoria más adecuada y los requisitos.' },
      { title: 'Preparación', text: 'Reunimos, revisamos y presentamos toda la documentación.' },
      { title: 'Seguimiento', text: 'Te acompañamos hasta la resolución y tu llegada a destino.' },
    ],
    testimonialsEyebrow: 'Testimonios',
    testimonialsTitle: 'Historias que cruzaron el puente',
    testimonials: [
      {
        quote:
          'Gracias a YS MIGRANOVA conseguimos la reagrupación familiar en Bélgica sin estrés. Siempre supimos en qué punto estaba nuestro expediente.',
        name: 'Mariana G.',
        origin: 'Colombia → Bélgica',
      },
      {
        quote:
          'Me orientaron en la solicitud de la Tarjeta Azul UE y en la búsqueda de alojamiento. Profesionales y muy humanos.',
        name: 'Andrés P.',
        origin: 'Perú → Países Bajos',
      },
      {
        quote:
          'La consulta virtual fue clarísima. En una hora entendí todas mis opciones para estudiar en Francia.',
        name: 'Lucía R.',
        origin: 'Venezuela → Francia',
      },
    ],
    ctaBandTitle: '¿Listo para dar el primer paso?',
    ctaBandText:
      'Reserva una consulta virtual con nuestro equipo y recibe una hoja de ruta clara para tu proyecto migratorio.',
  },
  services: {
    eyebrow: 'Servicios migratorios',
    title: 'Soluciones para cada etapa de tu proyecto europeo',
    intro:
      'Trabajamos con procedimientos de los países de la Unión Europea y el espacio Schengen, con especial experiencia en España, Bélgica, Países Bajos y Francia.',
    items: [
      {
        id: 'visados',
        title: 'Visados y residencia',
        summary: 'Visados nacionales, residencia no lucrativa, renovaciones y modificaciones de estatus.',
        points: [
          'Análisis de elegibilidad',
          'Preparación del expediente',
          'Citas y presentación ante consulados',
          'Renovaciones y prórrogas',
        ],
      },
      {
        id: 'familia',
        title: 'Reagrupación familiar',
        summary: 'Reúne a tu familia en Europa con un expediente sólido y bien documentado.',
        points: [
          'Cónyuges y parejas de hecho',
          'Hijos y ascendientes',
          'Familiares de ciudadanos UE',
          'Legalización y traducción de documentos',
        ],
      },
      {
        id: 'trabajo',
        title: 'Permisos de trabajo',
        summary: 'Tarjeta Azul UE, profesionales cualificados, trabajo por cuenta ajena y propia.',
        points: [
          'Tarjeta Azul UE',
          'Trabajadores altamente cualificados',
          'Autorizaciones por cuenta propia',
          'Asesoría a empresas empleadoras',
        ],
      },
      {
        id: 'estudios',
        title: 'Estudios y formación',
        summary: 'Visados de estudiante, prácticas e investigación, y su paso posterior a residencia.',
        points: [
          'Visado de estudios',
          'Prácticas y movilidad',
          'Búsqueda de empleo tras los estudios',
          'Investigadores',
        ],
      },
      {
        id: 'nacionalidad',
        title: 'Nacionalidad',
        summary: 'Te guiamos en la solicitud de nacionalidad por residencia y otras vías.',
        points: [
          'Estudio de requisitos',
          'Preparación de exámenes',
          'Presentación de la solicitud',
          'Seguimiento hasta la jura o ceremonia',
        ],
      },
      {
        id: 'emprendedores',
        title: 'Emprendedores e inversores',
        summary: 'Residencia para emprender, invertir o trabajar en remoto desde Europa.',
        points: [
          'Visado de emprendedor',
          'Nómadas digitales',
          'Planes de negocio para extranjería',
          'Coordinación con asesores fiscales',
        ],
      },
    ],
    extrasTitle: 'Servicios complementarios',
    extras: [
      'Traducciones juradas y apostillas',
      'Empadronamiento y registro',
      'Homologación de títulos',
      'Recursos ante denegaciones',
    ],
    ctaTitle: '¿No sabes qué vía es la tuya?',
    ctaText: 'En una consulta virtual analizamos tu perfil y te recomendamos el camino más seguro.',
  },
  consult: {
    eyebrow: 'Consultas virtuales',
    title: 'Asesoría experta, desde cualquier lugar del mundo',
    intro:
      'Reúnete con nuestro equipo por videollamada segura. Elige el tipo de consulta, propón una fecha y te confirmaremos la cita por correo electrónico.',
    howTitle: 'Cómo funciona',
    steps: [
      { title: 'Solicita tu cita', text: 'Completa el formulario con tu caso y tu disponibilidad.' },
      { title: 'Confirmación', text: 'Te enviamos la confirmación y el enlace a la videollamada.' },
      { title: 'Consulta', text: 'Hablamos de tu situación en tu idioma, con total confidencialidad.' },
      { title: 'Hoja de ruta', text: 'Recibes un resumen escrito con los próximos pasos recomendados.' },
    ],
    plansTitle: 'Tipos de consulta',
    plans: [
      {
        id: 'inicial',
        name: 'Consulta inicial',
        duration: '30',
        price: '49 €',
        features: ['Primera orientación', 'Revisión de opciones', 'Resumen por correo'],
      },
      {
        id: 'completa',
        name: 'Consulta completa',
        duration: '60',
        price: '89 €',
        features: ['Estudio detallado del caso', 'Lista de documentos', 'Hoja de ruta personalizada'],
        featured: true,
      },
      {
        id: 'empresa',
        name: 'Consulta para empresas',
        duration: '60',
        price: '149 €',
        features: ['Contratación internacional', 'Traslado de personal', 'Cumplimiento normativo'],
      },
    ],
    popular: 'Más solicitada',
    choose: 'Elegir',
    formTitle: 'Solicita tu consulta virtual',
    formIntro: 'Los campos marcados con * son obligatorios. Responderemos en un máximo de 48 horas laborables.',
    form: {
      name: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Teléfono / WhatsApp',
      country: 'País de residencia actual',
      destination: 'País de destino',
      destinationPlaceholder: 'Selecciona un país',
      destinationOther: 'Otro país de la UE',
      plan: 'Tipo de consulta',
      service: 'Servicio de interés',
      servicePlaceholder: 'Selecciona un servicio',
      date: 'Fecha preferida',
      time: 'Franja horaria',
      times: { morning: 'Mañana (9:00–13:00)', afternoon: 'Tarde (14:00–18:00)', evening: 'Última hora (18:00–20:00)' },
      platform: 'Plataforma',
      message: 'Describe brevemente tu caso',
      consent: 'Acepto la política de privacidad y el tratamiento de mis datos para gestionar la consulta.',
      submit: 'Solicitar consulta',
      sending: 'Enviando…',
      success: '¡Gracias! Hemos recibido tu solicitud. Te escribiremos pronto para confirmar la cita.',
      error: 'No se ha podido enviar la solicitud. Inténtalo de nuevo o escríbenos por correo electrónico.',
    },
  },
  about: {
    eyebrow: 'Sobre nosotros',
    title: 'Construimos puentes entre personas y oportunidades',
    intro:
      'YS MIGRANOVA nace con una convicción: migrar es un derecho a construir un futuro mejor, y merece un acompañamiento profesional, honesto y humano.',
    missionTitle: 'Nuestra misión',
    mission:
      'Ofrecer soluciones migratorias seguras y transparentes que permitan a cada cliente integrarse con éxito en Europa, respetando la legalidad y la dignidad de cada historia.',
    visionTitle: 'Nuestra visión',
    vision:
      'Ser la referencia de confianza para la comunidad hispanohablante y multicultural que elige Europa como su nuevo hogar.',
    valuesTitle: 'Nuestros valores',
    values: [
      { title: 'Confianza', text: 'Cada expediente se trata con confidencialidad y honestidad.' },
      { title: 'Excelencia', text: 'Formación continua y atención minuciosa al detalle.' },
      { title: 'Cercanía', text: 'Escuchamos y explicamos sin tecnicismos innecesarios.' },
      { title: 'Diversidad', text: 'Un equipo multicultural que entiende tu realidad.' },
    ],
    teamTitle: 'Un equipo multidisciplinar',
    team: [
      { role: 'Asesoría jurídica', text: 'Especialistas en derecho de extranjería y movilidad europea.' },
      { role: 'Gestión documental', text: 'Preparación, traducción y legalización de expedientes.' },
      { role: 'Atención al cliente', text: 'Acompañamiento en cuatro idiomas durante todo el proceso.' },
    ],
  },
  news: {
    eyebrow: 'Noticias',
    title: 'Actualidad migratoria europea',
    intro: 'Novedades normativas y consejos prácticos para preparar tu proyecto migratorio con información fiable.',
    disclaimer:
      'Estos artículos son informativos y no sustituyen el asesoramiento personalizado. Consulta siempre la normativa vigente de cada país.',
    articles: [
      {
        slug: 'pacto-migracion-asilo',
        date: '2026-09-15',
        category: 'Normativa UE',
        image: 'news1',
        title: 'Pacto de Migración y Asilo: qué cambia en la Unión Europea',
        excerpt:
          'El nuevo marco europeo armoniza procedimientos en las fronteras exteriores y la gestión de solicitudes. Te explicamos los puntos clave.',
        body: [
          'El Pacto Europeo de Migración y Asilo es un conjunto de reglamentos que busca establecer un sistema común y más previsible para gestionar la llegada de personas a la Unión Europea.',
          'Entre sus elementos principales se encuentran un control previo a la entrada en las fronteras exteriores, procedimientos fronterizos más rápidos para determinados casos y nuevos mecanismos de solidaridad entre Estados miembros.',
          'Para quienes planifican una migración regular —por trabajo, estudios o reagrupación familiar— lo más importante sigue siendo presentar un expediente completo y ajustado a los requisitos del país de destino. Si tienes dudas sobre cómo te afecta, reserva una consulta.',
        ],
      },
      {
        slug: 'tarjeta-azul-ue',
        date: '2026-08-28',
        category: 'Trabajo',
        image: 'news2',
        title: 'Tarjeta Azul UE: requisitos más flexibles para profesionales',
        excerpt:
          'La directiva revisada facilita el acceso de profesionales altamente cualificados y su movilidad entre países europeos.',
        body: [
          'La Tarjeta Azul UE es un permiso de residencia y trabajo para profesionales altamente cualificados de fuera de la Unión Europea.',
          'La directiva revisada redujo la duración mínima exigida del contrato de trabajo, permitió umbrales salariales más bajos en algunos casos y facilitó la movilidad dentro de la UE tras un periodo de residencia en el primer país.',
          'Cada Estado miembro fija su propio umbral salarial anual, por lo que conviene revisar las cifras actualizadas del país de destino antes de negociar una oferta.',
        ],
      },
      {
        slug: 'sistema-entradas-salidas',
        date: '2026-07-10',
        category: 'Viajes',
        image: 'news3',
        title: 'Sistema de Entradas y Salidas (EES): lo que debes saber',
        excerpt:
          'El registro digital de entradas y salidas en el espacio Schengen sustituye progresivamente el sellado manual de pasaportes.',
        body: [
          'El Sistema de Entradas y Salidas (EES) registra digitalmente a los viajeros de terceros países que entran en el espacio Schengen para estancias de corta duración.',
          'En el primer paso por la frontera se toman datos biométricos, como la imagen facial y las huellas dactilares, que se asocian al pasaporte. Así se controla de forma automática el límite de 90 días en un periodo de 180.',
          'Si viajas con frecuencia a Europa o planeas una estancia más larga, es importante calcular bien tus días de permanencia y solicitar a tiempo el visado o permiso adecuado.',
        ],
      },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos de tu proyecto',
    intro: 'Escríbenos y un miembro de nuestro equipo te responderá en tu idioma en un plazo máximo de 48 horas laborables.',
    infoTitle: 'Datos de contacto',
    emailLabel: 'Correo electrónico',
    phoneLabel: 'Teléfono / WhatsApp',
    addressLabel: 'Oficina',
    address: 'Atención 100 % en línea · Europa',
    hoursLabel: 'Horario',
    hours: 'Lunes a viernes, 9:00–18:00 (CET)',
    form: {
      name: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Teléfono (opcional)',
      subject: 'Asunto',
      subjects: {
        general: 'Información general',
        services: 'Servicios migratorios',
        consultation: 'Consultas virtuales',
        business: 'Empresas',
        other: 'Otro',
      },
      message: 'Mensaje',
      consent: 'Acepto la política de privacidad y el tratamiento de mis datos para responder a mi consulta.',
      submit: 'Enviar mensaje',
      sending: 'Enviando…',
      success: '¡Mensaje enviado! Gracias por contactar con YS MIGRANOVA. Te responderemos muy pronto.',
      error: 'No se ha podido enviar el mensaje. Inténtalo de nuevo más tarde.',
    },
  },
  portal: {
    badge: 'Próximamente',
    title: 'Portal privado de clientes',
    intro:
      'Muy pronto podrás consultar el estado de tu expediente, subir documentos de forma segura y comunicarte con tu asesor desde un único espacio privado.',
    features: [
      'Estado del expediente en tiempo real',
      'Subida segura de documentos',
      'Mensajería con tu asesor',
      'Historial de citas y facturas',
    ],
    email: 'Correo electrónico',
    password: 'Contraseña',
    signIn: 'Acceder',
    disabledNote: 'El acceso se habilitará cuando el portal esté disponible.',
  },
  footer: {
    about:
      'Asesoría migratoria europea con atención en español, neerlandés, inglés y francés.',
    explore: 'Explorar',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
    disclaimer: 'La información de esta web es orientativa y no constituye asesoramiento jurídico individual.',
  },
}

export default es
export type Dict = typeof es
