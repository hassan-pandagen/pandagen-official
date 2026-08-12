// Draft translation, pending native review before external citation.
//
// Factual rule for this file: every figure, package price, payment split,
// support window and performance statement must match the English source
// exactly. The 90+ Lighthouse figure is a lab acceptance target checked before
// handover. It is never to be described as a "garantie" of a score, a ranking
// or a revenue outcome.

import type { Dictionary } from "./types";
import { reviewQuote } from "@/data/reviews";

const fr: Dictionary = {
  nav: {
    home: "Accueil",
    services: "Services",
    pricing: "Tarifs",
    contact: "Contact",
    about: "À propos",
    blog: "Blog",
  },
  common: {
    ctaPrimary: "Demander votre plan de migration",
    ctaSecondary: "Consulter les exemples de périmètre",
    faqHeading: "Questions fréquentes",
    languageLabel: "Langue",
    englishSourceNote:
      "Les pages en anglais restent la version de référence de ce site et couvrent l'ensemble des contenus, y compris le blog.",
    englishSourceLinkLabel: "Voir cette page en anglais",
    skipToContent: "Aller au contenu principal",
  },

  home: {
    meta: {
      title: "Migration de site web sans perte de référencement | PandaCodeGen",
      description:
        "Migrations depuis WordPress, Wix, Squarespace, Webflow et GoHighLevel vers un site Next.js sur mesure dont vous êtes pleinement propriétaire. Forfaits à partir de 1 500 $.",
    },
    hero: {
      eyebrow: "Migration et ingénierie web",
      title: "Vous avez dépassé WordPress ou Wix ?",
      titleAccent: "Passez à un site conçu pour la façon dont l'IA choisit ses réponses.",
      lead:
        "Nous vous faisons quitter WordPress, Wix, Squarespace, Webflow ou GoHighLevel pour un Next.js sur mesure dont vous êtes pleinement propriétaire, sans perdre le trafic que vous avez déjà. Vos pages se chargent vite et placent une réponse claire là où ChatGPT, Claude, Perplexity et Google AI peuvent la trouver et vous citer.",
    },
    summary:
      "PandaCodeGen est un studio de développement web Next.js sur mesure qui reconstruit les sites WordPress, Shopify, Webflow, Wix et Squarespace lents en code sur mesure dont le client est pleinement propriétaire. Les projets démarrent à 1 500 $, à prix fixe pour le périmètre écrit, avec un objectif de performance Lighthouse de 90+ à la livraison sur mobile et sur ordinateur, vérifié sur trois passages enregistrés, et sans frais de plateforme mensuels. Les pages arrivent en HTML déjà constitué, avec des réponses claires et directes que les moteurs de recherche et les assistants IA comme ChatGPT, Claude et Perplexity peuvent citer.",
    sections: [
      {
        title: "Des semaines, pas des mois",
        body:
          "Nous associons des outils de développement assistés par IA à des ingénieurs expérimentés pour livrer des sites de qualité production selon le calendrier inscrit dans les conditions de projet acceptées. L'IA accélère la construction et les tests ; les décisions d'architecture, la recette et la bascule restent tenues par les deux cofondateurs.",
        bullets: [
          "Claude AI pour le travail d'architecture",
          "Cursor pour le développement",
          "Chaînes de tests automatisées avant chaque point de revue",
        ],
      },
      {
        title: "Une migration documentée avant la mise en production",
        body:
          "Aucun prestataire ne contrôle le classement des moteurs de recherche. Ce qui réduit le risque évitable, c'est un processus documenté : inventaire complet des URL, plan de redirections 301 au cas par cas, reprise du balisage et des métadonnées, régénération du sitemap, cohérence des balises canoniques, bascule DNS par étapes et surveillance dans la Search Console après la mise en ligne.",
        bullets: [
          "Votre site actuel reste en ligne jusqu'à la vérification du nouveau.",
          "Un chemin de retour arrière est documenté avant la bascule.",
          "Les responsabilités de mise en ligne, de mesure et de reprise sont écrites, pas sous-entendues.",
        ],
      },
      {
        title: "Objectif de performance à la livraison",
        body:
          "Chaque projet porte un objectif de performance Lighthouse de 90+ sur mobile et sur ordinateur, pour les pages représentatives nommées dans le périmètre écrit, vérifié sur trois passages enregistrés avant la livraison. Il s'agit d'un objectif d'acceptation mesuré en laboratoire : ce n'est pas une garantie de score, de classement, de revenus, ni de Core Web Vitals de terrain après l'ajout de scripts tiers.",
      },
      {
        title: "Propriété et coûts",
        body:
          "Vous récupérez le dépôt de code, les environnements et les accès. Les conditions de propriété et de licence figurent dans la proposition, et les coûts tiers connus sont documentés avant validation, afin qu'aucune dépendance ne soit découverte après la mise en ligne.",
      },
    ],
    faq: [
      {
        q: "Combien coûte une migration de WordPress vers Next.js ?",
        a: "Une migration de WordPress vers Next.js démarre à 1 500 $ pour un site vitrine de 5 à 7 pages (Starter), 3 500 $ pour un site de 10 à 20 pages avec migration du blog et redirections 301 (Growth), et 5 000 $ à 10 000 $ pour du commerce headless avec plus de 30 pages et des intégrations sur mesure (Scale). Le prix est fixe pour le périmètre inscrit dans les conditions de projet acceptées.",
      },
      {
        q: "Vais-je perdre mon référencement en migrant ?",
        a: "Aucun prestataire ne contrôle le classement des moteurs de recherche, donc personne ne peut honnêtement garantir qu'il se maintiendra. Ce qui réduit le risque évitable est un processus documenté : inventaire des URL, plan de redirections 301, reprise du balisage et des métadonnées, régénération du sitemap, cohérence des canoniques, bascule DNS par étapes et surveillance après la mise en ligne.",
      },
      {
        q: "Travaillez-vous avec des boutiques Shopify ?",
        a: "Oui. Nous construisons des vitrines Shopify sur mesure en architecture headless : vos clients voient une interface rapide et personnalisée pendant que vous continuez à gérer produits et commandes dans Shopify. Le gain de vitesse dépend de la boutique, nous mesurons donc votre point de départ avant de chiffrer.",
      },
      {
        q: "Pourquoi ne pas simplement changer d'hébergeur WordPress ou ajouter un cache ?",
        a: "Un hébergement plus rapide et la mise en cache aident, mais ne changent pas le modèle sous-jacent : WordPress assemble chaque page à la demande en interrogeant la base de données, en chargeant les extensions et en rendant le thème. Une construction sur mesure générée statiquement ou rendue côté serveur supprime cette étape d'assemblage au lieu de la masquer.",
      },
    ],

    continuity: {
      eyebrow: "Le standard de migration",
      title: "La reconstruction est neuve.",
      titleAccent: "Les chemins critiques restent sous contrôle.",
      lead:
        "Avant la bascule, nous documentons ce qui doit survivre au déplacement et la façon dont chaque élément sera vérifié. C'est le sens que nous donnons à « migration sans perte de référencement » : des contrôles de risque, pas une promesse de classement.",
      ledgerTitle: "Registre de continuité de migration",
      ledgerNote: "La vue de remise pour les systèmes qui ne peuvent pas disparaître pendant une reconstruction.",
      badge: "Défini avant le lancement",
      columns: {
        area: "Continuité",
        control: "Surface de contrôle",
        evidence: "Preuve lisible par le client",
      },
      rows: [
        {
          area: "Continuité de recherche",
          control: "URL, balises canoniques et contenus indexables",
          evidence: "Inventaire et spécification des redirections",
        },
        {
          area: "Continuité du chiffre d'affaires",
          control: "Formulaires, parcours de commande et intégrations",
          evidence: "Journal de tests de bout en bout en préproduction",
        },
        {
          area: "Continuité de la mesure",
          control: "Mesure d'audience, consentement et événements de conversion",
          evidence: "Référence initiale et recette des événements",
        },
        {
          area: "Continuité opérationnelle",
          control: "DNS, responsables du lancement, surveillance et retour arrière",
          evidence: "Procédure de lancement avec responsables nommés",
        },
      ],
      caption:
        "Structure de remise donnée à titre d'illustration. Votre périmètre accepté définit les systèmes, les contrôles, les responsables et les preuves d'acceptation réels.",
    },

    build: {
      eyebrow: "Notre expertise",
      title: "Des migrations pensées autour de",
      titleAccent: "ce qui peut casser.",
      lead:
        "Trois piliers, un même objectif : rendre votre activité plus rapide, moins coûteuse à exploiter et impossible à ignorer. Nous inventorions les pages, les contenus, la mesure d'audience, les formulaires et les intégrations avant de commencer à construire, puis nous testons la bascule au regard de critères d'acceptation écrits.",
      pillars: [
        {
          title: "Migrations et nouveaux sites",
          body:
            "Votre site WordPress, Wix, Squarespace ou Webflow est lent, fragile ou coûteux à maintenir ? Nous le déplaçons vers du code sur mesure, avec inventaire des URL, plan de redirections et vérification avant bascule.",
          bullets: [
            "Plus de mises à jour d'extensions à surveiller",
            "Surface d'attaque réduite : pas de vulnérabilités liées aux extensions",
            "Transfert des contenus, des métadonnées et des redirections pris en charge",
          ],
        },
        {
          title: "Applications web et tableaux de bord",
          body:
            "Pour les dirigeants qui ont besoin de plus qu'un site vitrine : portails clients, tableaux de bord internes, outils assistés par IA et interfaces pensées d'abord pour le mobile.",
          bullets: [
            "Fonctionne sur iPhone et Android",
            "Interrogation de vos propres données assistée par IA",
            "Paiements, abonnements et panneaux d'administration en temps réel",
          ],
        },
        {
          title: "Commerce haute performance",
          body:
            "Les thèmes Shopify standards sont lents. Nous construisons des vitrines entièrement sur mesure tout en conservant votre back-office existant pour les produits, les commandes et les paiements.",
          bullets: [
            "Fin des frais mensuels d'applications superflues",
            "Connexion à l'inventaire Shopify ou WooCommerce",
            "Parcours d'achat conçu pour votre catalogue",
          ],
        },
      ],
      platformsLabel: "Plateformes de départ courantes",
      platforms: [
        "WordPress",
        "Shopify",
        "WooCommerce",
        "Wix",
        "Squarespace",
        "Webflow",
        "GoHighLevel",
      ],
    },

    audience: {
      eyebrow: "À qui nous nous adressons",
      title: "Commencez par la situation.",
      lead:
        "Voici des situations de départ fréquentes. Nous étudions celle qui correspond le mieux avant de recommander une construction, une migration ou une intégration.",
      signalLabel: "Situation de départ",
      approachLabel: "Notre démarche",
      segments: [
        {
          signal: "Les rapports de vos campagnes payantes ne correspondent pas aux demandes ou aux ventes constatées.",
          approach:
            "Nous auditons les événements navigateur et serveur, le consentement, les limites d'attribution et les diagnostics de la plateforme avant de proposer une modification du suivi.",
        },
        {
          signal: "Les clients abandonnent quelque part entre la découverte du produit et la commande validée.",
          approach:
            "Nous mesurons la performance des pages et le parcours de commande, identifions les causes étayées, et ne chiffrons que les changements que les preuves justifient.",
        },
        {
          signal: "La plateforme actuelle crée des contraintes mesurables de performance ou de maintenance.",
          approach:
            "Nous cartographions les URL, les contenus, les intégrations, le DNS, la mesure d'audience, les besoins de retour arrière et les coûts de plateforme avant de recommander une optimisation ou une migration.",
        },
        {
          signal: "Les outils par abonnement se recoupent, génèrent du travail manuel ou sont difficiles à évaluer dans leur ensemble.",
          approach:
            "Nous inventorions les abonnements et les coûts de remplacement, puis ne recommandons du logiciel sur mesure que lorsque le bénéfice attendu justifie la construction et la maintenance.",
        },
        {
          signal: "Des contenus importants sont difficiles à découvrir, à interpréter ou à attribuer pour les moteurs de recherche et les systèmes de réponse.",
          approach:
            "Nous auditons l'exploration, la clarté des entités, les données structurées, la mise en forme des réponses et la qualité des sources. L'inclusion et la citation restent décidées par des tiers.",
        },
        {
          signal: "Une agence a besoin de capacité d'ingénierie, avec des rôles clairs et une communication traçable.",
          approach:
            "Nous inscrivons les rôles de production, la marque affichée, la confidentialité, les validations, les hypothèses de délai et les conditions commerciales dans l'accord de partenariat.",
        },
      ],
    },

    process: {
      title: "Du premier échange au",
      titleAccent: "lancement.",
      lead: "Quatre étapes vérifiables, avec les décisions importantes consignées avant le lancement.",
      stepLabel: "Étape",
      steps: [
        {
          number: "01",
          title: "Découverte",
          body:
            "Nous inventorions les URL actuelles, les contenus, les formulaires, la mesure d'audience, les intégrations et les points de référence mesurables avant de recommander un périmètre de migration.",
        },
        {
          number: "02",
          title: "Architecture",
          body:
            "Nous documentons ce qui doit rester, se déplacer, s'intégrer ou être remplacé, ainsi que les dépendances, les risques, les critères d'acceptation et les coûts d'exploitation.",
        },
        {
          number: "03",
          title: "Construction",
          body:
            "La nouvelle implémentation est livrée par points de revue, afin de valider les contenus, les comportements, les intégrations et les cas particuliers avant la bascule.",
        },
        {
          number: "04",
          title: "Lancement",
          body:
            "Avant la bascule, nous testons les redirections, les formulaires, la mesure d'audience, l'accessibilité, les métadonnées, la surveillance et le chemin de retour arrière au regard de la liste de contrôle approuvée.",
        },
      ],
    },

    controls: {
      eyebrow: "Points de décision",
      title: "Rendre les hypothèses commerciales visibles.",
      lead:
        "Un développement sur mesure n'est pas automatiquement moins cher, plus rapide ou plus adapté qu'une plateforme gérée. La comparaison utile porte sur le périmètre documenté, le modèle d'exploitation, le risque et la méthode de mesure de ce site précis.",
      items: [
        {
          number: "01",
          title: "Inventorier avant d'architecturer",
          body:
            "Examiner les URL, les contenus, les modèles de CMS, les formulaires, les intégrations, la mesure d'audience, les besoins d'accessibilité, les parties prenantes et les contraintes de bascule avant de choisir une technologie.",
        },
        {
          number: "02",
          title: "Comparer le coût total",
          body:
            "Documenter les coûts actuels et proposés de plateforme, d'applications, d'hébergement, de base de données, d'e-mailing, d'observabilité, de paiement, de support et de migration, à partir de tarifs fournisseurs datés et d'hypothèses d'usage.",
        },
        {
          number: "03",
          title: "Accepter sur preuves écrites",
          body:
            "Inscrire dans la proposition les livrables, les exclusions, les conditions de test, la propriété, les licences, la gestion des modifications, les obligations de conformité, le support, les recours et la remise.",
        },
      ],
    },

    founders: {
      eyebrow: "L'équipe",
      title: "Construit par les fondateurs,",
      titleAccent: "pas sous-traité.",
      lead:
        "Quand vous réservez un échange, c'est Hassan qui répond. Il écrit le code. Imran dirige l'architecture. Contrats et support aux États-Unis, avec un accès direct aux fondateurs sur chaque projet : pas de chargé de compte, pas de sous-traitance en marque blanche.",
      people: [
        {
          name: "Hassan Jamal",
          role: "Cofondateur et ingénieur principal",
          bio:
            "Conçoit les architectures et écrit le code. C'est la personne présente à l'échange de cadrage qui réalise ensuite le projet.",
          tags: [
            "Migrations WordPress",
            "Développements e-commerce",
            "Optimisation de la vitesse",
            "Plateformes sur mesure",
          ],
        },
        {
          name: "Imran Raza Ladhani",
          role: "Cofondateur et architecte principal",
          bio:
            "A cofondé PandaCodeGen avec Hassan et dirige l'architecture : faisabilité des migrations, conception système et bascules sans interruption de service.",
          tags: [
            "Architecture Next.js",
            "Migrations de plateforme",
            "Conception système",
            "Commerce headless",
          ],
        },
      ],
      note: "Les contributions de code sont publiques et vérifiables sur GitHub.",
    },

    antiAgency: {
      eyebrow: "Le standard d'ingénierie",
      title: "Nous ne sommes pas une « agence digitale ».",
      lead:
        "Les agences vendent des heures. Nous livrons des résultats d'ingénierie. Nous avons retiré les couches intermédiaires qui font déraper les projets B2B, en délai comme en budget.",
      pillars: [
        {
          title: "Des fondateurs, pas des chargés de compte",
          body:
            "Vous travaillez directement avec le cofondateur ingénieur qui construit votre site : un interlocuteur unique du cadrage au lancement. Pas de file de tickets, pas de prestataire qui disparaît en cours de projet.",
        },
        {
          title: "Aucune sous-traitance",
          body:
            "Nous ne sous-traitons pas. Chaque ligne de code est écrite par nos ingénieurs, les mêmes personnes que celles présentes à l'échange de cadrage.",
        },
        {
          title: "La propriété intellectuelle vous revient",
          body:
            "Nous remettons le code source complet et déployons sur votre compte d'hébergement, pas le nôtre. Aucun forfait de maintenance mensuel n'est imposé : vous gardez le contrôle.",
        },
      ],
      ctaTitle: "Prêt à travailler avec des ingénieurs plutôt qu'avec des chargés de compte ?",
      ctaBody: "Indiquez votre plateforme actuelle, votre risque principal et le calendrier visé.",
    },

    proof: {
      eyebrow: "Des preuves, pas de mise en scène",
      title: "Des mots de clients avec une source",
      titleAccent: "que vous pouvez ouvrir.",
      lead:
        "Pas de portraits d'illustration, pas d'étoiles qui défilent, pas de résultats anonymes. Ce sont de courts extraits de pages d'avis publiques, liés pour que vous puissiez lire le contexte complet vous-même.",
      quoteLanguageNote:
        "Les avis sont reproduits dans leur langue de publication, l'anglais, sans traduction, afin de rester fidèles au texte publié.",
      record: {
        label: "Livraison client",
        value: "22 jours",
        title: "Projet MyCustomPatches, client indépendant",
        body:
          "Enregistrement de projet confirmé par le propriétaire, consigné le 21 juillet 2026 : livraison en 22 jours, classements maintenus, et coût d'hébergement passé de 150 $/mois à 0 $/mois sur la période enregistrée.",
      },
      quotes: [
        {
          // Sourced from reviews.ts, not retyped. A verbatim quote is the one
          // string on the site that must never differ between surfaces, and it
          // stays in English on the translated pages because translating what
          // someone said turns a quotation into a paraphrase.
          quote: reviewQuote("mycustompatches"),
          source: "Avis Clutch vérifié",
          detail: "Mars 2026",
          href: "https://clutch.co/profile/panda-code-gen#reviews",
        },
        {
          quote: "Hassan was super helpful and communicative throughout the process.",
          source: "Marshall James sur Trustpilot",
          detail: "Mars 2026",
          href: "https://www.trustpilot.com/review/pandacodegen.com",
        },
        {
          quote: "They worked with me to make a website that I could afford.",
          source: "James Peace sur Trustpilot",
          detail: "Mars 2026",
          href: "https://www.trustpilot.com/review/pandacodegen.com",
        },
      ],
      clutchLabel: "Avis Clutch",
      trustpilotLabel: "Avis Trustpilot",
      affiliation: {
        label: "Lien de propriété, indiqué clairement",
        title: "Panda Patches appartient à Imran Raza Ladhani, cofondateur de PandaCodeGen.",
        body:
          "Nous en avons construit la plateforme. Ce projet est présenté comme une expérience d'exploitation, et non comme la recommandation d'un client indépendant.",
      },
    },

    closing: {
      title: "Parlons de votre migration.",
      body:
        "Décrivez votre plateforme actuelle, le risque principal et le calendrier visé. Nous documentons les hypothèses et les questions ouvertes avant tout chiffrage, et nous vous le disons si réparer le site existant est la meilleure réponse.",
    },
  },

  services: {
    meta: {
      title: "Services de migration web et d'ingénierie sur mesure | PandaCodeGen",
      description:
        "Migration de site web, diagnostic e-commerce et ingénierie web sur mesure, cadrés autour des preuves, de l'acceptation, de la bascule et de la remise du projet.",
    },
    hero: {
      eyebrow: "Ce que nous construisons",
      title: "Capacités et",
      titleAccent: "architecture.",
      lead:
        "Trois piliers principaux. Un objectif : rendre votre activité plus rapide, moins coûteuse à exploiter et impossible à ignorer.",
    },
    summary:
      "PandaCodeGen propose trois familles de prestations : la migration de site web depuis WordPress, Wix, Squarespace, Webflow, WooCommerce et GoHighLevel ; l'ingénierie web sur mesure pour les applications, portails et tableaux de bord ; et le commerce headless haute performance. Chaque prestation est chiffrée à prix fixe pour un périmètre écrit et porte un objectif de performance Lighthouse de 90+ à la livraison sur mobile et sur ordinateur, pour les pages représentatives nommées dans le périmètre, vérifié sur trois passages enregistrés.",
    sections: [
      {
        title: "01 · Migration WordPress",
        body:
          "Votre site WordPress est lent, se fait pirater ou casse régulièrement ? Nous vous déplaçons vers une plateforme moderne en code sur mesure, avec un inventaire des URL, un plan de redirections et une vérification avant bascule.",
        bullets: [
          "Plus de mises à jour d'extensions à surveiller",
          "Surface d'attaque réduite : pas de vulnérabilités liées aux extensions",
          "Transfert des contenus, des métadonnées et des redirections pris en charge",
          "Objectif Lighthouse 90+ sur les pages représentatives convenues",
        ],
      },
      {
        title: "02 · Applications web et tableaux de bord",
        body:
          "Pour les dirigeants qui ont besoin de plus qu'un site vitrine. Nous construisons des portails clients, des tableaux de bord internes, des outils IA et des interfaces adaptées au mobile.",
        bullets: [
          "Fonctionne sur iPhone et Android",
          "Interrogation de vos données assistée par IA",
          "Paiements et abonnements",
          "Panneaux d'administration en temps réel",
        ],
      },
      {
        title: "03 · Boutiques haute performance",
        body:
          "Les thèmes Shopify standards sont lents. Nous construisons des vitrines entièrement sur mesure qui se chargent immédiatement, tout en conservant votre back-office existant pour les produits, les commandes et les paiements.",
        bullets: [
          "Fin des frais mensuels d'applications superflues",
          "Logique de vente additionnelle sur mesure",
          "Connexion à l'inventaire Shopify ou WooCommerce",
          "Parcours d'achat conçu pour votre catalogue",
        ],
      },
      {
        title: "Prix fixe pour le périmètre écrit",
        body:
          "Quatre niveaux, sans facturation à l'heure : Starter à 1 500 $, Growth à 3 500 $, Scale de 5 000 $ à 10 000 $, et Scale+ chiffré sur mesure pour les périmètres d'entreprise. Une option de paiement courante est 30 % au démarrage et 70 % au jalon de livraison défini dans les conditions de projet acceptées ; un autre échéancier peut être convenu par écrit.",
      },
      {
        title: "Comment la performance est vérifiée",
        body:
          "Les conditions de projet acceptées nomment les pages représentatives et les conditions de test reproductibles pour mobile et ordinateur. Chacun des trois passages Lighthouse enregistrés avant la livraison doit atteindre 90 ou plus par page et par profil convenus. Il s'agit d'un objectif d'acceptation en laboratoire, pas d'une garantie de Core Web Vitals de terrain, de classement ou de revenus.",
      },
    ],
    faq: [
      {
        q: "Depuis quelles plateformes migrez-vous ?",
        a: "WordPress, WooCommerce, Wix, Squarespace, Webflow, GoHighLevel et Shopify, ainsi que des développements sur mesure existants. Le périmètre dépend du volume d'URL et de contenus, du modèle de contenu, des intégrations et du risque de bascule, pas du seul nombre de pages.",
      },
      {
        q: "Puis-je conserver mon CRM ou mon back-office e-commerce ?",
        a: "Oui, c'est un cas fréquent. En architecture headless, la couche vitrine est remplacée par du code sur mesure tandis que votre back-office existant continue de gérer les produits, les commandes et les paiements.",
      },
      {
        q: "Que se passe-t-il avant un devis ?",
        a: "Nous examinons votre plateforme actuelle et vos URL, l'objectif principal, le volume de contenus et de trafic, les intégrations nécessaires, le calendrier, la fourchette budgétaire et les contraintes connues. Les hypothèses et les questions ouvertes sont documentées avant tout chiffrage.",
      },
    ],
  },

  pricing: {
    meta: {
      title: "Tarifs et périmètre de migration web | PandaCodeGen",
      description:
        "Les forfaits de migration démarrent à 1 500 $, 3 500 $ et 5 000 $–10 000 $, les pages et fonctionnalités étant ajustées dans un devis écrit.",
    },
    hero: {
      eyebrow: "Clarté contractuelle",
      title: "Des exemples de périmètre de migration.",
      titleAccent: "Un devis écrit pour votre risque réel.",
      lead:
        "Choisissez le forfait de départ le plus proche, puis ajoutez ou retirez des pages et des fonctionnalités dans un devis écrit. Une structure de paiement courante est 30 % au démarrage et 70 % au jalon de livraison défini dans les conditions de projet acceptées ; un autre échéancier écrit peut être convenu pour un projet particulier.",
    },
    summary:
      "Les forfaits de migration PandaCodeGen démarrent à 1 500 $ (Starter), 3 500 $ (Growth) et 5 000 $ à 10 000 $ (Scale). Ce sont des points de départ : le périmètre est déterminé par le volume d'URL et de contenus, les modèles de CMS, les intégrations, la mesure, les exigences de conformité, les parties prenantes et le risque de migration, et non par le seul nombre de pages. Les conditions écrites acceptées déterminent le prix final.",
    tiersHeading: "Exemples de forfaits de départ",
    currencyNote:
      "Montants indiqués en dollars américains (USD). La devise, les taxes et les échéances figurent dans les conditions de projet acceptées.",
    tiers: [
      {
        name: "Starter",
        price: "1 500 $",
        priceNote: "Forfait de départ · périmètre exact dans la proposition",
        fit: "Sites de petite entreprise, 5 à 7 pages.",
        features: [
          "5 à 7 pages sur mesure, avec les gabarits et les responsabilités de contenu listés dans le périmètre",
          "Déploiement Next.js avec dépôt, environnements et responsabilités de remise documentés",
          "Objectif de performance Lighthouse 90+ sur mobile et ordinateur pour les pages représentatives convenues",
          "Trois passages enregistrés avant la livraison par page et profil convenus ; chaque passage doit atteindre l'objectif",
          "Conception pensée d'abord pour le mobile, puis élargie vers les grands écrans",
          "Options d'hébergement et de services tiers documentées avant validation",
          "15 jours ouvrés de support inclus pour les livrables convenus ; point de départ et couverture précisés dans les conditions acceptées",
        ],
      },
      {
        name: "Growth",
        price: "3 500 $",
        priceNote: "Forfait de départ · périmètre exact dans la proposition",
        fit: "10 à 20 pages, CMS, migration complète.",
        features: [
          "Site sur mesure de 10 à 20 pages : pages de service, études de cas et ressources",
          "Intégration du CMS Sanity : votre équipe met à jour les contenus sans toucher au code",
          "Migration du blog avec inventaire des URL, plan de redirections, conservation des métadonnées et surveillance après mise en ligne",
          "Objectif de performance Lighthouse 90+ sur mobile et ordinateur, avec trois passages réussis par page et profil convenus",
          "Coûts d'hébergement et de services tiers listés avant validation",
          "30 jours ouvrés de support inclus pour les livrables convenus ; point de départ et couverture précisés dans les conditions acceptées",
        ],
      },
      {
        name: "Scale",
        price: "5 000 $–10 000 $",
        priceNote: "Fourchette de départ · périmètre exact dans la proposition",
        fit: "Commerce headless et plus de 30 pages.",
        features: [
          "E-commerce headless : back-office Shopify ou WooCommerce, interface Next.js",
          "Périmètre de plus de 30 pages ou gabarits pour produits, collections, contenus et pages d'atterrissage",
          "Intégrations examinées telles que Klaviyo, HubSpot, Salesforce, les abonnements Stripe ou une autre API documentée",
          "Objectif de performance Lighthouse 90+ sur mobile et ordinateur, avec trois passages réussis par page et profil convenus",
          "CMS Sanity et modèle de contenu conçu pour vos rédacteurs, pas des gabarits génériques",
          "30 jours ouvrés de support inclus pour les livrables convenus ; point de départ et couverture précisés dans les conditions acceptées",
        ],
      },
    ],
    termsHeading: "Points de départ modulables",
    terms: [
      {
        number: "01",
        title: "Périmètre et ajouts",
        body:
          "Le forfait de départ est ajusté aux pages et fonctionnalités approuvées. Livrables, intégrations, responsabilités de contenu, exclusions et ajouts facturés séparément sont listés explicitement.",
      },
      {
        number: "02",
        title: "Protection du périmètre écrit",
        body:
          "Lorsque cette protection figure dans les conditions de projet acceptées, PandaCodeGen rembourse 100 % des sommes versées au titre de ce périmètre s'il ne livre pas les livrables promis. Les conditions écrites définissent le fait déclencheur et la procédure de correction ; il ne s'agit pas d'un remboursement pour changement d'avis.",
      },
      {
        number: "03",
        title: "Objectif de performance 90+ à la livraison",
        body:
          "Les conditions de projet acceptées nomment les pages représentatives et les conditions de test pour mobile et ordinateur. Chacun des trois passages enregistrés par page et profil convenus doit atteindre 90+ avant la remise. C'est un objectif d'acceptation mesuré en laboratoire, et non une garantie de score, de classement ou de revenus.",
      },
      {
        number: "04",
        title: "Option de support",
        body:
          "Les échanges sur un forfait peuvent démarrer avec 15 jours ouvrés pour Starter et 30 jours ouvrés pour Growth et Scale. Le support ne s'applique que lorsque les conditions acceptées précisent son point de départ, les défauts ou ajustements mineurs couverts, et tout aménagement particulier.",
      },
      {
        number: "05",
        title: "Paiement, modifications et propriété",
        body:
          "Une option de paiement courante est 30 % au démarrage et 70 % au jalon de livraison défini ; les parties peuvent convenir d'un autre échéancier par écrit. Devise, taxes, limites de révisions, ajouts facturés séparément, transfert de propriété, licences, comptes et coûts tiers sont précisés avant la mise en œuvre.",
      },
      {
        number: "06",
        title: "Mise en ligne et retour arrière",
        body:
          "Les responsabilités relatives aux redirections, à la mesure d'audience, aux formulaires, au DNS, à la surveillance, au retour arrière et à la revue post-lancement font partie du plan de bascule.",
      },
    ],
    sections: [
      {
        title: "Comment fonctionne le devis écrit",
        body:
          "Nous inventorions d'abord les pages, les contenus, les intégrations, les contraintes, les parties prenantes et les tests d'acceptation. Le résumé de projet écrit indique ensuite ce qui est inclus, exclu et supposé. Les limites de révisions sont fixées avant le démarrage, et toute demande matérielle hors périmètre fait l'objet d'une estimation écrite distincte soumise à approbation.",
      },
      {
        title: "Comparez le périmètre, pas seulement le prix affiché",
        body:
          "Un devis global peut laisser des hypothèses importantes non résolues. Un périmètre de projet examiné nomme les règles d'acceptation, de propriété, de coût et de modification.",
        bullets: [
          "Périmètre : URL, contenus, intégrations et exclusions listés",
          "Performance : objectif Lighthouse 90+, pages, profil et contrôle en trois passages inscrits au périmètre",
          "Migration : inventaire, plan de redirections, recette et plan de retour arrière",
          "Propriété : conditions de propriété et de licence énoncées dans la proposition",
          "Coûts récurrents : coûts tiers connus documentés avant validation",
          "Modifications : tout travail hors périmètre fait l'objet d'un devis écrit distinct",
        ],
      },
    ],
    faq: [
      {
        q: "Par quel forfait commencer ?",
        a: "Starter démarre à 1 500 $, Growth à 3 500 $, et Scale se situe normalement entre 5 000 $ et 10 000 $. Choisissez la base la plus proche ; les pages ou fonctionnalités supplémentaires sont discutées et chiffrées dans le périmètre écrit avant le démarrage.",
      },
      {
        q: "Faut-il un contrat long pour chaque projet ?",
        a: "Non. Un projet simple peut reposer sur un devis ou un récapitulatif de commande clair, accepté par e-mail ou par messagerie. Les travaux réglementés, sensibles ou complexes peuvent nécessiter un cahier des charges signé. Dans tous les cas, ce sont les conditions écrites acceptées qui font foi.",
      },
      {
        q: "Comment fonctionnent les jalons de paiement ?",
        a: "Une option courante est 30 % au démarrage et 70 % au jalon de livraison défini dans les conditions de projet acceptées, mais les parties peuvent convenir d'un autre échéancier écrit. Les conditions acceptées précisent aussi la devise, les taxes, les échéances, les points de validation et les modalités de suspension ou d'annulation.",
      },
      {
        q: "Et si mon projet dépasse le niveau Scale ?",
        a: "Les projets plus vastes, multi-régions, e-commerce, applicatifs ou riches en intégrations sont cadrés séparément après une phase de découverte. La proposition liste l'équipe, les livrables, les dépendances, les exclusions et le calendrier de la mission.",
      },
      {
        q: "Comment l'objectif de performance 90+ est-il vérifié ?",
        a: "Les conditions de projet acceptées nomment les pages représentatives et les conditions Lighthouse reproductibles pour mobile et ordinateur. Chacun des trois passages enregistrés avant la remise doit obtenir 90 ou plus par page et profil convenus. C'est un objectif d'acceptation en laboratoire, pas une garantie de Core Web Vitals de terrain, de classement, de revenus, ni de résultats inchangés après des modifications tierces ou côté client.",
      },
      {
        q: "Quand le remboursement à 100 % s'applique-t-il ?",
        a: "Lorsque cette protection figure dans les conditions de projet acceptées, elle s'applique si PandaCodeGen ne livre pas les livrables promis au titre de ce périmètre écrit. Les conditions définissent le fait déclencheur, la vérification et toute procédure de correction. Elle ne s'applique pas au seul motif d'un changement de préférence ou d'une demande sortant du périmètre convenu.",
      },
    ],
  },

  contact: {
    meta: {
      title: "Demander un plan de migration de site web | PandaCodeGen",
      description:
        "Décrivez votre plateforme actuelle, vos risques de migration, vos intégrations et votre calendrier cible à PandaCodeGen.",
    },
    hero: {
      eyebrow: "Prise de contact",
      title: "Demandez un plan de",
      titleAccent: "migration de site web.",
      lead:
        "Décrivez votre plateforme actuelle, les risques de migration, les intégrations en place et le calendrier visé. Nous documentons les hypothèses et les questions ouvertes avant tout chiffrage.",
    },
    summary:
      "Pour évaluer l'adéquation d'un projet, PandaCodeGen a besoin de l'adresse du site actuel, de la plateforme utilisée, de l'objectif principal, de l'ordre de grandeur du trafic, du calendrier et de la fourchette budgétaire. La réponse initiale décrit les hypothèses, les questions ouvertes et les risques de migration identifiés, avant toute proposition chiffrée.",
    checklistHeading: "À inclure dans votre message",
    checklist: [
      "L'adresse du site actuel et la plateforme utilisée (WordPress, Webflow, Wix, Squarespace, Shopify, WooCommerce, GoHighLevel ou développement sur mesure)",
      "Votre objectif principal : migration sans perte de référencement, performance, réduction des coûts de plateforme, refonte, commerce headless ou intégration sur mesure",
      "L'ordre de grandeur du trafic mensuel et le volume approximatif d'URL",
      "Les intégrations indispensables : CRM, e-mailing, paiement, mesure d'audience, ERP",
      "Le calendrier visé et la fourchette budgétaire",
      "Les contraintes connues : conformité, langues, parties prenantes, dates de renouvellement de contrat",
    ],
    emailLabel: "E-mail",
    addressLabel: "Adresse",
    formNote:
      "Le formulaire de demande détaillé est actuellement disponible en anglais. Vous pouvez également écrire directement en français à l'adresse ci-dessus : les échanges de cadrage se font en français ou en anglais.",
    formLinkLabel: "Ouvrir le formulaire de demande (en anglais)",
    sections: [
      {
        title: "Ce qui se passe ensuite",
        body:
          "Nous examinons la plateforme actuelle, l'ensemble des URL, le modèle de contenu, les intégrations, le profil de trafic, l'objectif métier, le calendrier et la fourchette budgétaire. Les hypothèses, questions ouvertes, dépendances, exclusions, critères d'acceptation et coûts tiers sont documentés avant toute mise en œuvre.",
      },
      {
        title: "Ce que nous ne faisons pas",
        body:
          "Nous ne promettons pas de classement dans les moteurs de recherche et nous ne recommandons pas une reconstruction si les preuves indiquent qu'une réparation du site actuel est la meilleure réponse. Vous n'êtes pas confié à un chargé de compte : les deux cofondateurs qui cadrent votre projet sont les deux ingénieurs qui le réalisent.",
      },
    ],
    faq: [
      {
        q: "Dans quelles langues travaillez-vous ?",
        a: "Les échanges de cadrage et le support se déroulent en anglais ; les échanges écrits en français sont possibles. Les conditions de projet acceptées sont rédigées en anglais et constituent la version qui fait foi.",
      },
      {
        q: "Combien de temps avant une réponse ?",
        a: "Nous répondons par e-mail avec des questions de cadrage ou une proposition de créneau. Aucun diagnostic automatique n'est envoyé : la première réponse est écrite après lecture des informations transmises.",
      },
    ],
  },

  about: {
    meta: {
      title: "À propos de PandaCodeGen | Standards de livraison des migrations",
      description:
        "Découvrez les cofondateurs de PandaCodeGen et la manière dont l'entreprise, créée en février 2026, cadre les migrations de sites web, les critères d'acceptation, le risque de bascule et la remise du projet.",
    },
    hero: {
      eyebrow: "L'anti-agence · Fondée en février 2026 · Dirigée par ses cofondateurs",
      title: "Réduire le risque de migration",
      titleAccent: "avant d'écrire du code de production.",
      lead:
        "PandaCodeGen aide les entreprises à planifier et réaliser des migrations de sites web lorsque les URL, les contenus, les intégrations, la mesure et le contrôle opérationnel comptent. Le travail commence par des preuves et un périmètre écrit, pas par la promesse automatique qu'un site doit être reconstruit.",
    },
    summary:
      "PandaCodeGen est un studio de développement web fondé en février 2026 et établi à Austin, au Texas. L'entreprise est dirigée par ses deux cofondateurs : Hassan Jamal, cofondateur et ingénieur principal, et Imran Raza Ladhani, cofondateur et architecte principal. Les deux personnes qui cadrent un projet sont les deux ingénieurs qui le réalisent.",
    sections: [
      {
        title: "Continuité de migration",
        body:
          "Le périmètre identifie les URL actuelles, les contenus, les intégrations, les redirections, la mesure d'audience, les responsabilités de bascule et les conditions de retour arrière.",
      },
      {
        title: "Acceptation écrite",
        body:
          "Livrables, exclusions, pages de test, navigateurs pris en charge, méthodologie de performance, propriété, garantie et recours figurent dans les conditions de projet acceptées.",
      },
      {
        title: "Accès et remise documentés",
        body:
          "Dépôt de code, hébergement, domaines, comptes, licences et calendrier de remise sont documentés, afin que le contrôle ne soit ni sous-entendu ni reporté au jour du lancement.",
      },
      {
        title: "Notre processus",
        body: "Quatre étapes, dans cet ordre.",
        bullets: [
          "Examiner la plateforme actuelle, l'ensemble des URL, le modèle de contenu, les intégrations, le profil de trafic, l'objectif métier, le calendrier et la fourchette budgétaire.",
          "Documenter les hypothèses, questions ouvertes, dépendances, exclusions, critères d'acceptation et coûts tiers avant la mise en œuvre.",
          "Construire et tester des gabarits représentatifs, puis valider les redirections, formulaires, mesures d'audience, accessibilité et responsabilités de lancement.",
          "Basculer selon une liste de contrôle écrite, conserver un chemin de retour arrière, et réaliser la remise et les preuves définies dans les conditions de projet acceptées.",
        ],
      },
    ],
    faq: [
      {
        q: "Qui réalise réellement le travail ?",
        a: "Les deux cofondateurs. Hassan Jamal est cofondateur et ingénieur principal ; Imran Raza Ladhani est cofondateur et architecte principal. Il n'y a pas de transfert vers un chargé de compte après la signature.",
      },
      {
        q: "Recommandez-vous toujours une reconstruction ?",
        a: "Non. Si les preuves indiquent que réparer le site actuel est la meilleure réponse, nous le disons plutôt que de vendre une reconstruction.",
      },
      {
        q: "Où l'entreprise est-elle établie ?",
        a: "PandaCodeGen a été fondée en février 2026 et son adresse est 701 Tillery St Ste 12, Austin, TX 78702, États-Unis.",
      },
    ],
  },

  leadForm: {
    eyebrow: "Commencez ici",
    heading: "Un projet ou une question en tête ?",
    intro:
      "Nous sommes là pour aider. Indiquez votre site, ou tout ce que vous aimeriez aborder à son sujet, et un fondateur vous répondra. Chaque message reçoit une réponse, qu'il débouche ou non sur un devis.",
    nameLabel: "Nom",
    emailLabel: "E-mail",
    urlLabel: "Votre site web",
    urlHint: "facultatif",
    detailsLabel: "Ce que vous avez en tête",
    detailsPlaceholder:
      "Une migration, une refonte, des pages plus rapides, ou une question à laquelle vous aimeriez une réponse. Une phrase suffit.",
    submit: "Envoyer",
    submitting: "Envoi en cours…",
    successHeading: "Merci, nous avons bien reçu votre message.",
    successBody: "Vous recevrez une réponse de info@pandacodegen.com, généralement sous un jour ouvré.",
    directHeading: "Vous préférez échanger de vive voix ?",
    directBody:
      "Écrivez-nous ou réservez un appel. Les deux arrivent directement aux fondateurs, pas à un service commercial.",
    bookLabel: "Réserver un appel de découverte",
    errorFallback: "Nous n'avons pas pu envoyer votre demande. Écrivez-nous à info@pandacodegen.com.",
    honeypotLabel: "Laissez ce champ vide",
    replyNote:
      "Écrivez-nous en français : nous vous répondrons en français. Les documents contractuels sont rédigés en anglais.",
  },
};

export default fr;
