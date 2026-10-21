import type { Dict } from './es'

// English dictionary. Must follow the same structure as the Spanish dictionary.
const en: Dict = {
  meta: {
    siteName: 'YS MIGRANOVA – European Immigration Solutions',
    description:
      'European immigration advice: visas, residence, family reunification, work permits and citizenship. Virtual consultations in Spanish, Dutch, English and French.',
  },
  tagline: 'Your safe bridge to new opportunities in Europe',
  nav: {
    home: 'Home',
    services: 'Services',
    consultations: 'Virtual consultations',
    about: 'About us',
    news: 'News',
    contact: 'Contact',
    portal: 'Client portal',
    cta: 'Book a consultation',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
  },
  common: {
    learnMore: 'Learn more',
    readMore: 'Read article',
    backToNews: 'Back to news',
    allServices: 'View all services',
    bookConsultation: 'Book a virtual consultation',
    contactUs: 'Contact us',
    required: 'required',
    minutes: 'min',
  },
  home: {
    eyebrow: 'European Immigration Solutions',
    intro:
      'We support individuals, families and businesses at every step of their move to Europe, combining legal rigour, a personal touch and support in your language.',
    ctaPrimary: 'Book a virtual consultation',
    ctaSecondary: 'Explore our services',
    stats: [
      { value: '4', label: 'languages spoken' },
      { value: '27', label: 'EU countries covered' },
      { value: '100%', label: 'online consultations' },
      { value: '48h', label: 'initial response' },
    ],
    servicesEyebrow: 'What we do',
    servicesTitle: 'Immigration services tailored to you',
    servicesIntro:
      'From the first consultation to the final decision, we prepare and review every application so you can move forward with confidence.',
    whyEyebrow: 'Why choose us',
    whyTitle: 'Support that is professional, clear and personal',
    whyItems: [
      {
        title: 'Legal rigour',
        text: 'We assess your case against the current regulations of each European country and explain your real options.',
      },
      {
        title: 'Multilingual support',
        text: 'We work with you in Spanish, Dutch, English and French, so nothing gets lost in translation.',
      },
      {
        title: 'Full transparency',
        text: 'Fixed quotes, realistic timelines and clear updates at every stage of your application.',
      },
      {
        title: 'From anywhere',
        text: 'Secure virtual consultations and online document management, wherever you are.',
      },
    ],
    processEyebrow: 'How we work',
    processTitle: 'Your path to Europe in four steps',
    process: [
      { title: 'Initial consultation', text: 'We listen to your situation and goals over a video call.' },
      { title: 'Case assessment', text: 'We identify the most suitable immigration route and its requirements.' },
      { title: 'Preparation', text: 'We gather, review and submit all the documentation.' },
      { title: 'Follow-up', text: 'We stay by your side until the decision and your arrival at your destination.' },
    ],
    testimonialsEyebrow: 'Testimonials',
    testimonialsTitle: 'Stories that crossed the bridge',
    testimonials: [
      {
        quote:
          'Thanks to YS MIGRANOVA, we obtained family reunification in Belgium without any stress. We always knew exactly where our application stood.',
        name: 'Mariana G.',
        origin: 'Colombia → Belgium',
      },
      {
        quote:
          'They guided me through my EU Blue Card application and my search for accommodation. Professional and genuinely caring.',
        name: 'Andrés P.',
        origin: 'Peru → Netherlands',
      },
      {
        quote:
          'The virtual consultation was incredibly clear. In just one hour I understood all my options for studying in France.',
        name: 'Lucía R.',
        origin: 'Venezuela → France',
      },
    ],
    ctaBandTitle: 'Ready to take the first step?',
    ctaBandText:
      'Book a virtual consultation with our team and receive a clear roadmap for your immigration plans.',
  },
  services: {
    eyebrow: 'Immigration services',
    title: 'Solutions for every stage of your European journey',
    intro:
      'We handle procedures across the European Union and the Schengen Area, with particular expertise in Spain, Belgium, the Netherlands and France.',
    items: [
      {
        id: 'visados',
        title: 'Visas and residence',
        summary: 'National visas, non-lucrative residence, renewals and changes of status.',
        points: [
          'Eligibility assessment',
          'Application preparation',
          'Consulate appointments and submissions',
          'Renewals and extensions',
        ],
      },
      {
        id: 'familia',
        title: 'Family reunification',
        summary: 'Bring your family together in Europe with a strong, well-documented application.',
        points: [
          'Spouses and registered partners',
          'Children and dependent relatives',
          'Family members of EU citizens',
          'Document legalisation and translation',
        ],
      },
      {
        id: 'trabajo',
        title: 'Work permits',
        summary: 'EU Blue Card, skilled professionals, employment and self-employment.',
        points: [
          'EU Blue Card',
          'Highly skilled workers',
          'Self-employment permits',
          'Advice for employers',
        ],
      },
      {
        id: 'estudios',
        title: 'Study and training',
        summary: 'Student, traineeship and research visas, and the transition to residence afterwards.',
        points: [
          'Student visa',
          'Traineeships and mobility',
          'Post-study job search',
          'Researchers',
        ],
      },
      {
        id: 'nacionalidad',
        title: 'Citizenship',
        summary: 'We guide you through applying for citizenship by residence and other routes.',
        points: [
          'Eligibility review',
          'Exam preparation',
          'Application submission',
          'Support through to the oath or ceremony',
        ],
      },
      {
        id: 'emprendedores',
        title: 'Entrepreneurs and investors',
        summary: 'Residence to start a business, invest or work remotely from Europe.',
        points: [
          'Entrepreneur visa',
          'Digital nomads',
          'Business plans for immigration purposes',
          'Coordination with tax advisers',
        ],
      },
    ],
    extrasTitle: 'Additional services',
    extras: [
      'Sworn translations and apostilles',
      'Municipal registration',
      'Recognition of qualifications',
      'Appeals against refusals',
    ],
    ctaTitle: 'Not sure which route is right for you?',
    ctaText: 'In a virtual consultation, we assess your profile and recommend the safest path forward.',
  },
  consult: {
    eyebrow: 'Virtual consultations',
    title: 'Expert advice, from anywhere in the world',
    intro:
      'Meet our team via secure video call. Choose your type of consultation, suggest a date and we will confirm your appointment by email.',
    howTitle: 'How it works',
    steps: [
      { title: 'Request an appointment', text: 'Fill in the form with details of your case and your availability.' },
      { title: 'Confirmation', text: 'We send you a confirmation and the video call link.' },
      { title: 'Consultation', text: 'We discuss your situation in your language, in complete confidence.' },
      { title: 'Roadmap', text: 'You receive a written summary with the recommended next steps.' },
    ],
    plansTitle: 'Consultation types',
    plans: [
      {
        id: 'inicial',
        name: 'Initial consultation',
        duration: '30',
        price: '€49',
        features: ['Initial guidance', 'Review of options', 'Summary by email'],
      },
      {
        id: 'completa',
        name: 'Full consultation',
        duration: '60',
        price: '€89',
        features: ['Detailed case assessment', 'Document checklist', 'Personalised roadmap'],
        featured: true,
      },
      {
        id: 'empresa',
        name: 'Business consultation',
        duration: '60',
        price: '€149',
        features: ['International recruitment', 'Staff relocation', 'Regulatory compliance'],
      },
    ],
    popular: 'Most popular',
    choose: 'Choose',
    formTitle: 'Request your virtual consultation',
    formIntro: 'Fields marked with * are required. We will reply within 48 working hours.',
    form: {
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone / WhatsApp',
      country: 'Current country of residence',
      destination: 'Destination country',
      destinationPlaceholder: 'Select a country',
      destinationOther: 'Another EU country',
      plan: 'Consultation type',
      service: 'Service of interest',
      servicePlaceholder: 'Select a service',
      date: 'Preferred date',
      time: 'Time slot',
      times: { morning: 'Morning (9:00–13:00)', afternoon: 'Afternoon (14:00–18:00)', evening: 'Evening (18:00–20:00)' },
      platform: 'Platform',
      message: 'Briefly describe your case',
      consent: 'I accept the privacy policy and the processing of my data to arrange the consultation.',
      submit: 'Request consultation',
      sending: 'Sending…',
      success: 'Thank you! We have received your request. We will be in touch shortly to confirm your appointment.',
      error: 'Your request could not be sent. Please try again or email us.',
    },
  },
  about: {
    eyebrow: 'About us',
    title: 'Building bridges between people and opportunities',
    intro:
      'YS MIGRANOVA was founded on one conviction: migrating is a right to build a better future, and it deserves professional, honest and compassionate support.',
    missionTitle: 'Our mission',
    mission:
      'To provide safe, transparent immigration solutions that enable every client to settle successfully in Europe, while upholding the law and the dignity of every story.',
    visionTitle: 'Our vision',
    vision:
      'To be the trusted point of reference for the Spanish-speaking and multicultural community that chooses Europe as its new home.',
    valuesTitle: 'Our values',
    values: [
      { title: 'Trust', text: 'Every case is handled with confidentiality and honesty.' },
      { title: 'Excellence', text: 'Ongoing training and meticulous attention to detail.' },
      { title: 'Approachability', text: 'We listen and explain things without unnecessary jargon.' },
      { title: 'Diversity', text: 'A multicultural team that understands your circumstances.' },
    ],
    teamTitle: 'A multidisciplinary team',
    team: [
      { role: 'Legal advice', text: 'Specialists in immigration law and European mobility.' },
      { role: 'Document management', text: 'Preparation, translation and legalisation of applications.' },
      { role: 'Client care', text: 'Support in four languages throughout the entire process.' },
    ],
  },
  news: {
    eyebrow: 'News',
    title: 'European immigration news',
    intro: 'Regulatory updates and practical tips to help you prepare your immigration plans with reliable information.',
    disclaimer:
      'These articles are for information only and are no substitute for personalised advice. Always check the current regulations of each country.',
    articles: [
      {
        slug: 'pacto-migracion-asilo',
        date: '2026-09-15',
        category: 'EU legislation',
        image: 'news1',
        title: 'Pact on Migration and Asylum: what is changing in the European Union',
        excerpt:
          'The new European framework harmonises procedures at the external borders and the handling of applications. We explain the key points.',
        body: [
          'The European Pact on Migration and Asylum is a set of regulations that aims to establish a common, more predictable system for managing arrivals in the European Union.',
          'Its main elements include pre-entry screening at the external borders, faster border procedures for certain cases and new solidarity mechanisms between Member States.',
          'For those planning to migrate through regular channels — for work, study or family reunification — the most important thing remains submitting a complete application that meets the requirements of the destination country. If you are unsure how this affects you, book a consultation.',
        ],
      },
      {
        slug: 'tarjeta-azul-ue',
        date: '2026-08-28',
        category: 'Work',
        image: 'news2',
        title: 'EU Blue Card: more flexible requirements for professionals',
        excerpt:
          'The revised directive makes it easier for highly skilled professionals to gain access and move between European countries.',
        body: [
          'The EU Blue Card is a residence and work permit for highly skilled professionals from outside the European Union.',
          'The revised directive reduced the minimum required length of the employment contract, allowed lower salary thresholds in some cases and made it easier to move within the EU after a period of residence in the first country.',
          'Each Member State sets its own annual salary threshold, so it is worth checking the latest figures for your destination country before negotiating an offer.',
        ],
      },
      {
        slug: 'sistema-entradas-salidas',
        date: '2026-07-10',
        category: 'Travel',
        image: 'news3',
        title: 'Entry/Exit System (EES): what you need to know',
        excerpt:
          'Digital registration of entries and exits in the Schengen Area is gradually replacing the manual stamping of passports.',
        body: [
          'The Entry/Exit System (EES) digitally registers third-country travellers entering the Schengen Area for short stays.',
          'On the first border crossing, biometric data such as a facial image and fingerprints are collected and linked to the passport. This allows the 90-days-in-any-180-day-period limit to be monitored automatically.',
          'If you travel to Europe frequently or are planning a longer stay, it is important to calculate your days of stay carefully and apply for the appropriate visa or permit in good time.',
        ],
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about your plans",
    intro: 'Write to us and a member of our team will reply in your language within 48 working hours.',
    infoTitle: 'Contact details',
    emailLabel: 'Email',
    phoneLabel: 'Phone / WhatsApp',
    addressLabel: 'Office',
    address: '100% online service · Europe',
    hoursLabel: 'Opening hours',
    hours: 'Monday to Friday, 9:00–18:00 (CET)',
    form: {
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone (optional)',
      subject: 'Subject',
      subjects: {
        general: 'General information',
        services: 'Immigration services',
        consultation: 'Virtual consultations',
        business: 'Businesses',
        other: 'Other',
      },
      message: 'Message',
      consent: 'I accept the privacy policy and the processing of my data to respond to my enquiry.',
      submit: 'Send message',
      sending: 'Sending…',
      success: 'Message sent! Thank you for contacting YS MIGRANOVA. We will get back to you very soon.',
      error: 'Your message could not be sent. Please try again later.',
    },
  },
  portal: {
    badge: 'Coming soon',
    title: 'Private client portal',
    intro:
      'Soon you will be able to check the status of your application, upload documents securely and communicate with your adviser, all from a single private space.',
    features: [
      'Real-time application status',
      'Secure document upload',
      'Messaging with your adviser',
      'Appointment and invoice history',
    ],
    email: 'Email address',
    password: 'Password',
    signIn: 'Sign in',
    disabledNote: 'Access will be enabled once the portal is available.',
  },
  footer: {
    about:
      'European immigration advice with support in Spanish, Dutch, English and French.',
    explore: 'Explore',
    contact: 'Contact',
    rights: 'All rights reserved.',
    disclaimer: 'The information on this website is for guidance only and does not constitute individual legal advice.',
  },
}

export default en
