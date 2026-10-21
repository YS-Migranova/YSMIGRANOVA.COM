import type { Dict } from './es'

// Dictionnaire français.
const fr: Dict = {
  meta: {
    siteName: "YS MIGRANOVA – Solutions migratoires européennes",
    description:
      "Conseil en immigration européenne : visas, titres de séjour, regroupement familial, permis de travail et naturalisation. Consultations en ligne en espagnol, néerlandais, anglais et français.",
  },
  tagline: "Votre passerelle sûre vers de nouvelles opportunités en Europe",
  nav: {
    home: "Accueil",
    services: "Services",
    consultations: "Consultations en ligne",
    about: "À propos",
    news: "Actualités",
    contact: "Contact",
    portal: "Espace client",
    cta: "Prendre rendez-vous",
    menu: "Menu",
    close: "Fermer",
    language: "Langue",
  },
  common: {
    learnMore: "En savoir plus",
    readMore: "Lire l'article",
    backToNews: "Retour aux actualités",
    allServices: "Voir tous les services",
    bookConsultation: "Réserver une consultation en ligne",
    contactUs: "Nous contacter",
    required: "obligatoire",
    minutes: "min",
  },
  home: {
    eyebrow: "Solutions migratoires européennes",
    intro:
      "Nous accompagnons particuliers, familles et entreprises à chaque étape de leur projet d'immigration en Europe, avec rigueur juridique, proximité humaine et un suivi dans votre langue.",
    ctaPrimary: "Réserver une consultation en ligne",
    ctaSecondary: "Découvrir nos services",
    stats: [
      { value: "4", label: "langues de travail" },
      { value: "27", label: "pays de l'UE couverts" },
      { value: "100 %", label: "consultations en ligne" },
      { value: "48 h", label: "délai de première réponse" },
    ],
    servicesEyebrow: "Ce que nous faisons",
    servicesTitle: "Des services d'immigration sur mesure",
    servicesIntro:
      "De la première consultation à la décision finale, nous préparons et vérifions chaque dossier pour que vous avanciez en toute sérénité.",
    whyEyebrow: "Pourquoi nous choisir",
    whyTitle: "Un accompagnement sérieux, clair et humain",
    whyItems: [
      {
        title: "Rigueur juridique",
        text: "Nous analysons votre situation au regard de la réglementation en vigueur dans chaque pays européen et vous présentons vos options réelles.",
      },
      {
        title: "Accompagnement multilingue",
        text: "Nous vous recevons en espagnol, néerlandais, anglais et français, pour que rien ne se perde dans la traduction.",
      },
      {
        title: "Transparence totale",
        text: "Devis forfaitaires, délais réalistes et suivi clair de chaque étape de votre dossier.",
      },
      {
        title: "Où que vous soyez",
        text: "Consultations en ligne sécurisées et gestion documentaire dématérialisée, où que vous vous trouviez.",
      },
    ],
    processEyebrow: "Notre méthode",
    processTitle: "Votre parcours vers l'Europe en quatre étapes",
    process: [
      { title: "Consultation initiale", text: "Nous faisons le point sur votre situation et vos objectifs lors d'un appel vidéo." },
      { title: "Étude du dossier", text: "Nous identifions la voie d'immigration la plus adaptée et les conditions à remplir." },
      { title: "Préparation", text: "Nous rassemblons, vérifions et déposons l'ensemble des pièces justificatives." },
      { title: "Suivi", text: "Nous vous accompagnons jusqu'à la décision et votre arrivée à destination." },
    ],
    testimonialsEyebrow: "Témoignages",
    testimonialsTitle: "Ils ont franchi la passerelle",
    testimonials: [
      {
        quote:
          "Grâce à YS MIGRANOVA, nous avons obtenu le regroupement familial en Belgique sans stress. Nous savions toujours où en était notre dossier.",
        name: "Mariana G.",
        origin: "Colombie → Belgique",
      },
      {
        quote:
          "On m'a guidé pour ma demande de carte bleue européenne et pour ma recherche de logement. Des professionnels, et très humains.",
        name: "Andrés P.",
        origin: "Pérou → Pays-Bas",
      },
      {
        quote:
          "La consultation en ligne a été d'une grande clarté. En une heure, j'ai compris toutes mes options pour étudier en France.",
        name: "Lucía R.",
        origin: "Venezuela → France",
      },
    ],
    ctaBandTitle: "Prêt à faire le premier pas ?",
    ctaBandText:
      "Réservez une consultation en ligne avec notre équipe et recevez une feuille de route claire pour votre projet d'immigration.",
  },
  services: {
    eyebrow: "Services d'immigration",
    title: "Des solutions pour chaque étape de votre projet européen",
    intro:
      "Nous traitons les procédures des pays de l'Union européenne et de l'espace Schengen, avec une expertise particulière pour l'Espagne, la Belgique, les Pays-Bas et la France.",
    items: [
      {
        id: "visados",
        title: "Visas et titres de séjour",
        summary: "Visas nationaux, séjour en qualité de visiteur, renouvellements et changements de statut.",
        points: [
          "Analyse d'éligibilité",
          "Constitution du dossier",
          "Prise de rendez-vous et dépôt auprès des consulats",
          "Renouvellements et prolongations",
        ],
      },
      {
        id: "familia",
        title: "Regroupement familial",
        summary: "Réunissez votre famille en Europe grâce à un dossier solide et bien documenté.",
        points: [
          "Conjoints et partenaires",
          "Enfants et ascendants",
          "Membres de la famille de citoyens de l'UE",
          "Légalisation et traduction des documents",
        ],
      },
      {
        id: "trabajo",
        title: "Permis de travail",
        summary: "Carte bleue européenne, profils qualifiés, travail salarié et activité indépendante.",
        points: [
          "Carte bleue européenne",
          "Travailleurs hautement qualifiés",
          "Autorisations pour indépendants",
          "Conseil aux entreprises qui recrutent",
        ],
      },
      {
        id: "estudios",
        title: "Études et formation",
        summary: "Visas étudiants, stages et recherche, puis passage vers un titre de séjour.",
        points: [
          "Visa étudiant",
          "Stages et mobilité",
          "Recherche d'emploi après les études",
          "Chercheurs",
        ],
      },
      {
        id: "nacionalidad",
        title: "Nationalité",
        summary: "Nous vous guidons dans votre demande de naturalisation par résidence et par d'autres voies.",
        points: [
          "Étude des conditions",
          "Préparation aux examens",
          "Dépôt de la demande",
          "Suivi jusqu'à la prestation de serment ou la cérémonie",
        ],
      },
      {
        id: "emprendedores",
        title: "Entrepreneurs et investisseurs",
        summary: "Titres de séjour pour entreprendre, investir ou travailler à distance depuis l'Europe.",
        points: [
          "Visa entrepreneur",
          "Nomades numériques",
          "Business plans adaptés aux exigences de l'immigration",
          "Coordination avec des conseillers fiscaux",
        ],
      },
    ],
    extrasTitle: "Services complémentaires",
    extras: [
      "Traductions assermentées et apostilles",
      "Inscription communale et enregistrement",
      "Reconnaissance des diplômes",
      "Recours en cas de refus",
    ],
    ctaTitle: "Vous ne savez pas quelle voie vous convient ?",
    ctaText: "Lors d'une consultation en ligne, nous analysons votre profil et vous recommandons le parcours le plus sûr.",
  },
  consult: {
    eyebrow: "Consultations en ligne",
    title: "Un conseil expert, où que vous soyez dans le monde",
    intro:
      "Échangez avec notre équipe par visioconférence sécurisée. Choisissez le type de consultation, proposez une date et nous vous confirmerons le rendez-vous par e-mail.",
    howTitle: "Comment ça marche",
    steps: [
      { title: "Demandez un rendez-vous", text: "Remplissez le formulaire en décrivant votre situation et vos disponibilités." },
      { title: "Confirmation", text: "Nous vous envoyons la confirmation et le lien vers la visioconférence." },
      { title: "Consultation", text: "Nous étudions votre situation dans votre langue, en toute confidentialité." },
      { title: "Feuille de route", text: "Vous recevez un récapitulatif écrit des prochaines étapes recommandées." },
    ],
    plansTitle: "Types de consultation",
    plans: [
      {
        id: "inicial",
        name: "Consultation initiale",
        duration: "30",
        price: "49 €",
        features: ["Premier avis d'orientation", "Examen des options", "Récapitulatif par e-mail"],
      },
      {
        id: "completa",
        name: "Consultation approfondie",
        duration: "60",
        price: "89 €",
        features: ["Étude détaillée du dossier", "Liste des pièces à fournir", "Feuille de route personnalisée"],
        featured: true,
      },
      {
        id: "empresa",
        name: "Consultation entreprises",
        duration: "60",
        price: "149 €",
        features: ["Recrutement international", "Mobilité du personnel", "Conformité réglementaire"],
      },
    ],
    popular: "La plus demandée",
    choose: "Choisir",
    formTitle: "Demandez votre consultation en ligne",
    formIntro: "Les champs marqués d'un * sont obligatoires. Nous vous répondrons sous 48 heures ouvrées maximum.",
    form: {
      name: "Nom et prénom",
      email: "Adresse e-mail",
      phone: "Téléphone / WhatsApp",
      country: "Pays de résidence actuel",
      destination: "Pays de destination",
      destinationPlaceholder: "Sélectionnez un pays",
      destinationOther: "Autre pays de l'UE",
      plan: "Type de consultation",
      service: "Service souhaité",
      servicePlaceholder: "Sélectionnez un service",
      date: "Date souhaitée",
      time: "Créneau horaire",
      times: { morning: "Matin (9 h – 13 h)", afternoon: "Après-midi (14 h – 18 h)", evening: "Fin de journée (18 h – 20 h)" },
      platform: "Plateforme",
      message: "Décrivez brièvement votre situation",
      consent: "J'accepte la politique de confidentialité et le traitement de mes données pour la gestion de ma consultation.",
      submit: "Demander une consultation",
      sending: "Envoi en cours…",
      success: "Merci ! Nous avons bien reçu votre demande. Nous vous écrirons très prochainement pour confirmer le rendez-vous.",
      error: "Votre demande n'a pas pu être envoyée. Veuillez réessayer ou nous écrire par e-mail.",
    },
  },
  about: {
    eyebrow: "À propos",
    title: "Nous bâtissons des passerelles entre les personnes et les opportunités",
    intro:
      "YS MIGRANOVA est née d'une conviction : migrer, c'est exercer le droit de se construire un avenir meilleur, et cela mérite un accompagnement professionnel, honnête et humain.",
    missionTitle: "Notre mission",
    mission:
      "Proposer des solutions migratoires sûres et transparentes qui permettent à chaque client de s'intégrer avec succès en Europe, dans le respect de la légalité et de la dignité de chaque parcours.",
    visionTitle: "Notre vision",
    vision:
      "Être la référence de confiance pour la communauté hispanophone et multiculturelle qui choisit l'Europe comme nouveau foyer.",
    valuesTitle: "Nos valeurs",
    values: [
      { title: "Confiance", text: "Chaque dossier est traité avec confidentialité et honnêteté." },
      { title: "Excellence", text: "Formation continue et souci minutieux du détail." },
      { title: "Proximité", text: "Nous écoutons et expliquons, sans jargon inutile." },
      { title: "Diversité", text: "Une équipe multiculturelle qui comprend votre réalité." },
    ],
    teamTitle: "Une équipe pluridisciplinaire",
    team: [
      { role: "Conseil juridique", text: "Des spécialistes du droit des étrangers et de la mobilité européenne." },
      { role: "Gestion documentaire", text: "Préparation, traduction et légalisation des dossiers." },
      { role: "Service client", text: "Un accompagnement en quatre langues tout au long de la procédure." },
    ],
  },
  news: {
    eyebrow: "Actualités",
    title: "L'actualité de l'immigration en Europe",
    intro: "Évolutions réglementaires et conseils pratiques pour préparer votre projet d'immigration à partir d'informations fiables.",
    disclaimer:
      "Ces articles sont fournis à titre informatif et ne remplacent pas un conseil personnalisé. Référez-vous toujours à la réglementation en vigueur dans chaque pays.",
    articles: [
      {
        slug: "pacto-migracion-asilo",
        date: "2026-09-15",
        category: "Réglementation UE",
        image: "news1",
        title: "Pacte sur la migration et l'asile : ce qui change dans l'Union européenne",
        excerpt:
          "Le nouveau cadre européen harmonise les procédures aux frontières extérieures et le traitement des demandes. Nous vous expliquons les points clés.",
        body: [
          "Le Pacte sur la migration et l'asile est un ensemble de règlements visant à mettre en place un système commun et plus prévisible pour gérer l'arrivée de personnes dans l'Union européenne.",
          "Parmi ses principaux éléments figurent un filtrage préalable à l'entrée aux frontières extérieures, des procédures à la frontière plus rapides pour certains cas et de nouveaux mécanismes de solidarité entre États membres.",
          "Pour celles et ceux qui préparent une migration régulière — pour le travail, les études ou le regroupement familial —, l'essentiel reste de déposer un dossier complet et conforme aux exigences du pays de destination. Si vous vous demandez en quoi cela vous concerne, réservez une consultation.",
        ],
      },
      {
        slug: "tarjeta-azul-ue",
        date: "2026-08-28",
        category: "Travail",
        image: "news2",
        title: "Carte bleue européenne : des conditions assouplies pour les professionnels",
        excerpt:
          "La directive révisée facilite l'accès des professionnels hautement qualifiés et leur mobilité entre pays européens.",
        body: [
          "La carte bleue européenne est un titre de séjour et de travail destiné aux professionnels hautement qualifiés originaires de pays extérieurs à l'Union européenne.",
          "La directive révisée a réduit la durée minimale exigée du contrat de travail, autorisé des seuils de salaire plus bas dans certains cas et facilité la mobilité au sein de l'UE après une période de séjour dans le premier pays.",
          "Chaque État membre fixe son propre seuil de salaire annuel : il est donc conseillé de vérifier les montants actualisés du pays de destination avant de négocier une offre.",
        ],
      },
      {
        slug: "sistema-entradas-salidas",
        date: "2026-07-10",
        category: "Voyages",
        image: "news3",
        title: "Système d'entrée/sortie (EES) : ce qu'il faut savoir",
        excerpt:
          "L'enregistrement numérique des entrées et sorties dans l'espace Schengen remplace progressivement le tamponnage manuel des passeports.",
        body: [
          "Le Système d'entrée/sortie (EES) enregistre de manière numérique les voyageurs de pays tiers qui entrent dans l'espace Schengen pour un court séjour.",
          "Lors du premier passage de la frontière, des données biométriques, comme l'image faciale et les empreintes digitales, sont relevées et associées au passeport. La limite de 90 jours sur toute période de 180 jours est ainsi contrôlée automatiquement.",
          "Si vous voyagez fréquemment en Europe ou envisagez un séjour plus long, il est important de bien calculer vos jours de présence et de demander à temps le visa ou le titre de séjour adapté.",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Parlons de votre projet",
    intro: "Écrivez-nous : un membre de notre équipe vous répondra dans votre langue sous 48 heures ouvrées maximum.",
    infoTitle: "Coordonnées",
    emailLabel: "Adresse e-mail",
    phoneLabel: "Téléphone / WhatsApp",
    addressLabel: "Bureau",
    address: "Service 100 % en ligne · Europe",
    hoursLabel: "Horaires",
    hours: "Du lundi au vendredi, 9 h – 18 h (CET)",
    form: {
      name: "Nom et prénom",
      email: "Adresse e-mail",
      phone: "Téléphone (facultatif)",
      subject: "Objet",
      subjects: {
        general: "Informations générales",
        services: "Services d'immigration",
        consultation: "Consultations en ligne",
        business: "Entreprises",
        other: "Autre",
      },
      message: "Message",
      consent: "J'accepte la politique de confidentialité et le traitement de mes données pour répondre à ma demande.",
      submit: "Envoyer le message",
      sending: "Envoi en cours…",
      success: "Message envoyé ! Merci d'avoir contacté YS MIGRANOVA. Nous vous répondrons très rapidement.",
      error: "Votre message n'a pas pu être envoyé. Veuillez réessayer plus tard.",
    },
  },
  portal: {
    badge: "Bientôt disponible",
    title: "Espace client privé",
    intro:
      "Très bientôt, vous pourrez suivre l'état de votre dossier, déposer vos documents en toute sécurité et échanger avec votre conseiller depuis un espace privé unique.",
    features: [
      "Suivi du dossier en temps réel",
      "Dépôt sécurisé de documents",
      "Messagerie avec votre conseiller",
      "Historique des rendez-vous et des factures",
    ],
    email: "Adresse e-mail",
    password: "Mot de passe",
    signIn: "Se connecter",
    disabledNote: "L'accès sera activé dès que l'espace client sera disponible.",
  },
  footer: {
    about:
      "Conseil en immigration européenne, avec un accompagnement en espagnol, néerlandais, anglais et français.",
    explore: "Explorer",
    contact: "Contact",
    rights: "Tous droits réservés.",
    disclaimer: "Les informations de ce site sont fournies à titre indicatif et ne constituent pas un conseil juridique individuel.",
  },
}

export default fr
