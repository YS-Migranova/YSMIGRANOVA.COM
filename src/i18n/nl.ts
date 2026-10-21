import type { Dict } from './es'

// Nederlandse vertaling (geschikt voor Nederland en Vlaanderen).
const nl: Dict = {
  meta: {
    siteName: 'YS MIGRANOVA – Europese migratieoplossingen',
    description:
      'Europees migratieadvies: visa, verblijf, gezinshereniging, werkvergunningen en nationaliteit. Online consultaties in het Spaans, Nederlands, Engels en Frans.',
  },
  tagline: 'Jouw veilige brug naar nieuwe kansen in Europa',
  nav: {
    home: 'Home',
    services: 'Diensten',
    consultations: 'Online consultaties',
    about: 'Over ons',
    news: 'Nieuws',
    contact: 'Contact',
    portal: 'Klantenportaal',
    cta: 'Consultatie boeken',
    menu: 'Menu',
    close: 'Sluiten',
    language: 'Taal',
  },
  common: {
    learnMore: 'Meer weten',
    readMore: 'Artikel lezen',
    backToNews: 'Terug naar nieuws',
    allServices: 'Alle diensten bekijken',
    bookConsultation: 'Online consultatie boeken',
    contactUs: 'Neem contact op',
    required: 'verplicht',
    minutes: 'min',
  },
  home: {
    eyebrow: 'Europese migratieoplossingen',
    intro:
      'We begeleiden particulieren, gezinnen en bedrijven bij elke stap van hun migratietraject naar Europa, met juridische nauwkeurigheid, persoonlijke betrokkenheid en ondersteuning in jouw taal.',
    ctaPrimary: 'Online consultatie boeken',
    ctaSecondary: 'Ontdek onze diensten',
    stats: [
      { value: '4', label: 'talen waarin we je helpen' },
      { value: '27', label: 'EU-landen gedekt' },
      { value: '100 %', label: 'online consultaties' },
      { value: '48 u', label: 'eerste reactie' },
    ],
    servicesEyebrow: 'Wat we doen',
    servicesTitle: 'Migratiediensten op maat',
    servicesIntro:
      'Van de eerste consultatie tot de definitieve beslissing: we bereiden elk dossier zorgvuldig voor en controleren het, zodat jij met vertrouwen verder kunt.',
    whyEyebrow: 'Waarom voor ons kiezen',
    whyTitle: 'Serieuze, heldere en persoonlijke begeleiding',
    whyItems: [
      {
        title: 'Juridische nauwkeurigheid',
        text: 'We analyseren je situatie op basis van de geldende regelgeving in elk Europees land en leggen je je reële mogelijkheden uit.',
      },
      {
        title: 'Meertalige ondersteuning',
        text: 'We helpen je in het Spaans, Nederlands, Engels en Frans, zodat er niets verloren gaat in de vertaling.',
      },
      {
        title: 'Volledige transparantie',
        text: 'Vaste prijsoffertes, realistische termijnen en duidelijke opvolging van elke fase van je dossier.',
      },
      {
        title: 'Waar je ook bent',
        text: 'Veilige online consultaties en digitaal documentbeheer, waar ter wereld je ook bent.',
      },
    ],
    processEyebrow: 'Hoe we werken',
    processTitle: 'Jouw weg naar Europa in vier stappen',
    process: [
      { title: 'Eerste consultatie', text: 'We luisteren naar je situatie en doelen tijdens een videogesprek.' },
      { title: 'Analyse van je dossier', text: 'We bepalen de meest geschikte migratieroute en de voorwaarden.' },
      { title: 'Voorbereiding', text: 'We verzamelen, controleren en dienen alle documenten in.' },
      { title: 'Opvolging', text: 'We begeleiden je tot de beslissing en je aankomst op je bestemming.' },
    ],
    testimonialsEyebrow: 'Ervaringen',
    testimonialsTitle: 'Verhalen van wie de brug overstak',
    testimonials: [
      {
        quote:
          'Dankzij YS MIGRANOVA hebben we zonder stress gezinshereniging in België gekregen. We wisten altijd precies hoe ver ons dossier stond.',
        name: 'Mariana G.',
        origin: 'Colombia → België',
      },
      {
        quote:
          'Ze begeleidden me bij de aanvraag van de Europese blauwe kaart en bij het zoeken naar woonruimte. Professioneel en heel menselijk.',
        name: 'Andrés P.',
        origin: 'Peru → Nederland',
      },
      {
        quote:
          'De online consultatie was ontzettend duidelijk. In één uur begreep ik al mijn mogelijkheden om in Frankrijk te studeren.',
        name: 'Lucía R.',
        origin: 'Venezuela → Frankrijk',
      },
    ],
    ctaBandTitle: 'Klaar om de eerste stap te zetten?',
    ctaBandText:
      'Boek een online consultatie met ons team en ontvang een helder stappenplan voor je migratieproject.',
  },
  services: {
    eyebrow: 'Migratiediensten',
    title: 'Oplossingen voor elke fase van je Europese project',
    intro:
      'We werken met de procedures van de landen van de Europese Unie en het Schengengebied, met bijzondere ervaring in Spanje, België, Nederland en Frankrijk.',
    items: [
      {
        id: 'visados',
        title: 'Visa en verblijf',
        summary: 'Nationale visa, verblijf zonder werk, verlengingen en wijzigingen van verblijfsstatus.',
        points: [
          'Analyse van je mogelijkheden',
          'Voorbereiding van het dossier',
          'Afspraken en indiening bij consulaten',
          'Vernieuwingen en verlengingen',
        ],
      },
      {
        id: 'familia',
        title: 'Gezinshereniging',
        summary: 'Herenig je gezin in Europa met een sterk en goed gedocumenteerd dossier.',
        points: [
          'Echtgenoten en (geregistreerde) partners',
          'Kinderen en ouders',
          'Familieleden van EU-burgers',
          'Legalisatie en vertaling van documenten',
        ],
      },
      {
        id: 'trabajo',
        title: 'Werkvergunningen',
        summary: 'Europese blauwe kaart, kennismigranten, werken in loondienst en als zelfstandige.',
        points: [
          'Europese blauwe kaart',
          'Hooggekwalificeerde werknemers',
          'Vergunningen voor zelfstandigen',
          'Advies voor werkgevers',
        ],
      },
      {
        id: 'estudios',
        title: 'Studie en opleiding',
        summary: 'Studentenvisa, stages en onderzoek, en de overstap naar verblijf daarna.',
        points: [
          'Studievisum',
          'Stages en mobiliteit',
          'Werk zoeken na je studie',
          'Onderzoekers',
        ],
      },
      {
        id: 'nacionalidad',
        title: 'Nationaliteit',
        summary: 'We begeleiden je bij de aanvraag van de nationaliteit op basis van verblijf en via andere routes.',
        points: [
          'Analyse van de voorwaarden',
          'Voorbereiding op examens',
          'Indiening van de aanvraag',
          'Opvolging tot de eedaflegging of ceremonie',
        ],
      },
      {
        id: 'emprendedores',
        title: 'Ondernemers en investeerders',
        summary: 'Verblijf om te ondernemen, te investeren of op afstand te werken vanuit Europa.',
        points: [
          'Visum voor ondernemers',
          'Digitale nomaden',
          'Ondernemingsplannen voor verblijfsaanvragen',
          'Afstemming met fiscaal adviseurs',
        ],
      },
    ],
    extrasTitle: 'Aanvullende diensten',
    extras: [
      'Beëdigde vertalingen en apostilles',
      'Inschrijving bij de gemeente en registratie',
      'Erkenning van diploma’s',
      'Bezwaar en beroep na een weigering',
    ],
    ctaTitle: 'Weet je niet welke route bij jou past?',
    ctaText: 'Tijdens een online consultatie analyseren we je profiel en adviseren we je de veiligste weg.',
  },
  consult: {
    eyebrow: 'Online consultaties',
    title: 'Deskundig advies, waar ter wereld je ook bent',
    intro:
      'Spreek ons team via een beveiligd videogesprek. Kies het type consultatie, stel een datum voor en we bevestigen de afspraak per e-mail.',
    howTitle: 'Hoe het werkt',
    steps: [
      { title: 'Vraag je afspraak aan', text: 'Vul het formulier in met je situatie en je beschikbaarheid.' },
      { title: 'Bevestiging', text: 'We sturen je de bevestiging en de link naar het videogesprek.' },
      { title: 'Consultatie', text: 'We bespreken je situatie in jouw taal, in alle vertrouwelijkheid.' },
      { title: 'Stappenplan', text: 'Je ontvangt een schriftelijke samenvatting met de aanbevolen volgende stappen.' },
    ],
    plansTitle: 'Soorten consultaties',
    plans: [
      {
        id: 'inicial',
        name: 'Eerste consultatie',
        duration: '30',
        price: '€ 49',
        features: ['Eerste oriëntatie', 'Overzicht van je mogelijkheden', 'Samenvatting per e-mail'],
      },
      {
        id: 'completa',
        name: 'Uitgebreide consultatie',
        duration: '60',
        price: '€ 89',
        features: ['Grondige analyse van je dossier', 'Lijst met documenten', 'Persoonlijk stappenplan'],
        featured: true,
      },
      {
        id: 'empresa',
        name: 'Consultatie voor bedrijven',
        duration: '60',
        price: '€ 149',
        features: ['Internationale werving', 'Overplaatsing van personeel', 'Naleving van regelgeving'],
      },
    ],
    popular: 'Meest gekozen',
    choose: 'Kiezen',
    formTitle: 'Vraag je online consultatie aan',
    formIntro: 'Velden met een * zijn verplicht. We reageren binnen maximaal 48 werkuren.',
    form: {
      name: 'Volledige naam',
      email: 'E-mailadres',
      phone: 'Telefoon / WhatsApp',
      country: 'Huidig land van verblijf',
      destination: 'Land van bestemming',
      destinationPlaceholder: 'Kies een land',
      destinationOther: 'Ander EU-land',
      plan: 'Type consultatie',
      service: 'Gewenste dienst',
      servicePlaceholder: 'Kies een dienst',
      date: 'Gewenste datum',
      time: 'Tijdvak',
      times: { morning: 'Ochtend (9:00–13:00)', afternoon: 'Middag (14:00–18:00)', evening: 'Avond (18:00–20:00)' },
      platform: 'Platform',
      message: 'Beschrijf kort je situatie',
      consent: 'Ik ga akkoord met het privacybeleid en de verwerking van mijn gegevens voor het afhandelen van de consultatie.',
      submit: 'Consultatie aanvragen',
      sending: 'Bezig met verzenden…',
      success: 'Bedankt! We hebben je aanvraag ontvangen. We nemen snel contact met je op om de afspraak te bevestigen.',
      error: 'Je aanvraag kon niet worden verzonden. Probeer het opnieuw of stuur ons een e-mail.',
    },
  },
  about: {
    eyebrow: 'Over ons',
    title: 'We bouwen bruggen tussen mensen en kansen',
    intro:
      'YS MIGRANOVA is ontstaan vanuit één overtuiging: migreren is het recht om een betere toekomst op te bouwen, en dat verdient professionele, eerlijke en menselijke begeleiding.',
    missionTitle: 'Onze missie',
    mission:
      'Veilige en transparante migratieoplossingen bieden waarmee elke klant succesvol kan integreren in Europa, met respect voor de wet en voor de waardigheid van elk verhaal.',
    visionTitle: 'Onze visie',
    vision:
      'Het betrouwbare aanspreekpunt zijn voor de Spaanstalige en multiculturele gemeenschap die Europa kiest als nieuw thuis.',
    valuesTitle: 'Onze waarden',
    values: [
      { title: 'Vertrouwen', text: 'Elk dossier wordt vertrouwelijk en eerlijk behandeld.' },
      { title: 'Uitmuntendheid', text: 'Voortdurende bijscholing en nauwgezette aandacht voor detail.' },
      { title: 'Betrokkenheid', text: 'We luisteren en leggen uit zonder onnodig vakjargon.' },
      { title: 'Diversiteit', text: 'Een multicultureel team dat jouw realiteit begrijpt.' },
    ],
    teamTitle: 'Een multidisciplinair team',
    team: [
      { role: 'Juridisch advies', text: 'Specialisten in vreemdelingenrecht en Europese mobiliteit.' },
      { role: 'Documentbeheer', text: 'Voorbereiding, vertaling en legalisatie van dossiers.' },
      { role: 'Klantenservice', text: 'Begeleiding in vier talen tijdens het hele traject.' },
    ],
  },
  news: {
    eyebrow: 'Nieuws',
    title: 'Actueel Europees migratienieuws',
    intro: 'Nieuwe regelgeving en praktische tips om je migratieproject voor te bereiden met betrouwbare informatie.',
    disclaimer:
      'Deze artikelen zijn informatief en vervangen geen persoonlijk advies. Raadpleeg altijd de geldende regelgeving van elk land.',
    articles: [
      {
        slug: 'pacto-migracion-asilo',
        date: '2026-09-15',
        category: 'EU-regelgeving',
        image: 'news1',
        title: 'Migratie- en asielpact: wat verandert er in de Europese Unie?',
        excerpt:
          'Het nieuwe Europese kader harmoniseert de procedures aan de buitengrenzen en de behandeling van aanvragen. We zetten de belangrijkste punten voor je op een rij.',
        body: [
          'Het Europese Migratie- en asielpact is een pakket verordeningen dat een gemeenschappelijk en voorspelbaarder systeem wil invoeren voor de aankomst van mensen in de Europese Unie.',
          'Belangrijke onderdelen zijn een screening vóór binnenkomst aan de buitengrenzen, snellere grensprocedures in bepaalde gevallen en nieuwe solidariteitsmechanismen tussen de lidstaten.',
          'Voor wie een reguliere migratie plant — voor werk, studie of gezinshereniging — blijft het belangrijkste een volledig dossier in te dienen dat voldoet aan de voorwaarden van het land van bestemming. Twijfel je over wat dit voor jou betekent? Boek dan een consultatie.',
        ],
      },
      {
        slug: 'tarjeta-azul-ue',
        date: '2026-08-28',
        category: 'Werk',
        image: 'news2',
        title: 'Europese blauwe kaart: soepelere voorwaarden voor professionals',
        excerpt:
          'De herziene richtlijn maakt de toegang voor hooggekwalificeerde professionals en hun mobiliteit tussen Europese landen eenvoudiger.',
        body: [
          'De Europese blauwe kaart is een gecombineerde verblijfs- en werkvergunning voor hooggekwalificeerde professionals van buiten de Europese Unie.',
          'De herziene richtlijn verkortte de vereiste minimumduur van de arbeidsovereenkomst, maakte in sommige gevallen lagere salarisdrempels mogelijk en vergemakkelijkte de mobiliteit binnen de EU na een periode van verblijf in het eerste land.',
          'Elke lidstaat bepaalt zijn eigen jaarlijkse salarisdrempel. Controleer daarom de actuele bedragen van het land van bestemming voordat je over een aanbod onderhandelt.',
        ],
      },
      {
        slug: 'sistema-entradas-salidas',
        date: '2026-07-10',
        category: 'Reizen',
        image: 'news3',
        title: 'In- en uitreissysteem (EES): wat je moet weten',
        excerpt:
          'De digitale registratie van in- en uitreizen in het Schengengebied vervangt geleidelijk het handmatig afstempelen van paspoorten.',
        body: [
          'Het In- en uitreissysteem (EES) registreert reizigers uit derde landen die het Schengengebied binnenkomen voor een kort verblijf digitaal.',
          'Bij de eerste grensoverschrijding worden biometrische gegevens vastgelegd, zoals een gezichtsopname en vingerafdrukken, die aan het paspoort worden gekoppeld. Zo wordt de limiet van 90 dagen binnen een periode van 180 dagen automatisch gecontroleerd.',
          'Reis je vaak naar Europa of plan je een langer verblijf? Dan is het belangrijk om je verblijfsdagen goed te berekenen en tijdig het juiste visum of de juiste vergunning aan te vragen.',
        ],
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Laten we over je project praten',
    intro: 'Stuur ons een bericht en een lid van ons team antwoordt je in jouw taal binnen maximaal 48 werkuren.',
    infoTitle: 'Contactgegevens',
    emailLabel: 'E-mailadres',
    phoneLabel: 'Telefoon / WhatsApp',
    addressLabel: 'Kantoor',
    address: '100 % online dienstverlening · Europa',
    hoursLabel: 'Openingstijden',
    hours: 'Maandag tot vrijdag, 9:00–18:00 (CET)',
    form: {
      name: 'Volledige naam',
      email: 'E-mailadres',
      phone: 'Telefoon (optioneel)',
      subject: 'Onderwerp',
      subjects: {
        general: 'Algemene informatie',
        services: 'Migratiediensten',
        consultation: 'Online consultaties',
        business: 'Bedrijven',
        other: 'Overig',
      },
      message: 'Bericht',
      consent: 'Ik ga akkoord met het privacybeleid en de verwerking van mijn gegevens om mijn vraag te beantwoorden.',
      submit: 'Bericht verzenden',
      sending: 'Bezig met verzenden…',
      success: 'Bericht verzonden! Bedankt voor je bericht aan YS MIGRANOVA. We antwoorden je zo snel mogelijk.',
      error: 'Je bericht kon niet worden verzonden. Probeer het later opnieuw.',
    },
  },
  portal: {
    badge: 'Binnenkort',
    title: 'Beveiligd klantenportaal',
    intro:
      'Binnenkort kun je de status van je dossier bekijken, documenten veilig uploaden en met je adviseur communiceren vanuit één persoonlijke omgeving.',
    features: [
      'Realtime status van je dossier',
      'Veilig documenten uploaden',
      'Berichten met je adviseur',
      'Overzicht van afspraken en facturen',
    ],
    email: 'E-mailadres',
    password: 'Wachtwoord',
    signIn: 'Inloggen',
    disabledNote: 'Inloggen is mogelijk zodra het portaal beschikbaar is.',
  },
  footer: {
    about:
      'Europees migratieadvies met ondersteuning in het Spaans, Nederlands, Engels en Frans.',
    explore: 'Verkennen',
    contact: 'Contact',
    rights: 'Alle rechten voorbehouden.',
    disclaimer: 'De informatie op deze website is indicatief en vormt geen individueel juridisch advies.',
  },
}

export default nl
