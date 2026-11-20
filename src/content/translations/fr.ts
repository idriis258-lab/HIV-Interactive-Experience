import type { TranslationKey } from './en'

export const fr: Record<TranslationKey, string> = {
  'meta.title': "VIH — L'expérience interactive ultime",

  'nav.home': 'Accueil',
  'nav.program': 'Programme',
  'nav.about': 'À propos',
  'nav.language': 'Langue',
  'nav.presentation': 'Présentation',
  'nav.exitPresentation': 'Quitter la présentation',
  'nav.openAbout': 'Notes de version',
  'nav.close': 'Fermer',
  'nav.backToProgram': 'Retour au programme',
  'nav.nextChapter': 'Chapitre suivant',
  'nav.previousChapter': 'Chapitre précédent',
  'nav.viewProgram': 'Voir le programme',
  'nav.enterExperience': "Entrer dans l'expérience",
  'nav.aboutBuild': 'À propos de cette version',

  'intro.kicker': 'Une expérience médicale interactive',
  'intro.subtitle': "L'expérience interactive ultime",
  'intro.tagline1': 'Comprendre le virus.',
  'intro.tagline2': 'Explorer la science.',
  'intro.tagline3': 'Briser la stigmatisation.',
  'intro.prologue':
    "Un voyage cinématographique à travers la science, la médecine et l'expérience humaine du VIH — conçu pour la scène académique.",
  'intro.statusLabel': 'Version fondation',
  'intro.statusValue': 'Phase 0',
  'intro.chapterCount': '13 chapitres en production',
  'intro.abstractNote': 'Visualisation abstraite du titre — pas un modèle médical.',
  'intro.scienceNote': "Aucune recommandation médicale n'est publiée dans cette version.",
  'intro.meta.chapters': '{count} chapitres',
  'intro.meta.languages': 'EN · FR · AR',
  'intro.meta.format': 'Présentation 16:9',
  'intro.meta.foundation': 'Version fondation',

  'program.kicker': 'Le programme',
  'program.title': 'Treize chapitres. Une histoire.',
  'program.description':
    'Un parcours chapitre par chapitre à travers la biologie, la médecine et les réalités humaines du VIH.',
  'program.chapterListLabel': 'Chapitres',
  'program.chapterCount': '{count} chapitres',
  'program.chapterLabel': 'Chapitre {number}',
  'program.scopeLabel': 'Périmètre',
  'program.status.ready': 'Disponible',
  'program.status.planned': 'En production',
  'program.open': 'Ouvrir',
  'program.credits': 'Crédits',
  'program.note.kicker': 'Note de production',
  'program.note.title': "Une fondation, pas une ligne d'arrivée.",
  'program.note.body':
    "La phase 0 établit l'architecture, la séquence d'ouverture et le système de design. Les treize chapitres entrent en production.",
  'program.note.scienceTitle': 'Intégrité scientifique',
  'program.note.scienceBody':
    "Aucune recommandation médicale n'est publiée dans cette version. Chaque chapitre sera cité et révisé avant sa publication.",
  'program.note.visualTitle': 'À propos du visuel',
  'program.note.visualBody':
    "La séquence d'ouverture est un champ moléculaire abstrait — pas un modèle médical.",
  'program.note.button': 'Lire les notes de version',
  'program.footerNote': 'Le contenu des chapitres est soumis à une révision scientifique.',

  'planned.kicker': 'Chapitre {number} · En production',
  'planned.kickerCoda': 'Coda · En production',
  'planned.title': 'Ce chapitre est en production.',
  'planned.statusLabel': 'Statut de production',
  'planned.phaseLabel': 'Phase {number}',
  'planned.phaseBody': 'Ce chapitre est prévu pour la phase {number} du plan de production.',
  'planned.scopeTitle': 'Périmètre éditorial',
  'planned.scopeNote':
    "Il s'agit d'un résumé de planification, et non d'un contenu médical publié.",
  'planned.reviewTitle': 'Révision scientifique',
  'planned.reviewBody':
    "Révision en attente. Aucune recommandation médicale ni affirmation clinique n'est publiée dans cette version.",
  'planned.referencesTitle': 'Références',
  'planned.referencesBody':
    'Les citations seront ajoutées et vérifiées avec le contenu du chapitre.',
  'planned.nextStepsTitle': 'Ce que contient cette version',
  'planned.nextStepsBody':
    "Le système visuel, le cadre des scènes, la structure multilingue et les contrôles de présentation sont en place. Le contenu des chapitres et les éléments 3D ne sont pas encore publiés.",
  'planned.back': 'Retour au programme',
  'planned.next': 'Chapitre suivant',
  'planned.previous': 'Chapitre précédent',
  'planned.codaTitle': 'Les crédits sont en production.',
  'planned.codaBody':
    "Les contributeurs, les sources et les crédits de production seront publiés avec l'expérience finale.",

  'about.kicker': 'À propos de cette version',
  'about.title': 'Une fondation cinématographique pour un récit académique.',
  'about.intro':
    "VIH — L'expérience interactive ultime est une présentation premium fondée sur les preuves, conçue pour la scène académique et pensée pour passer du projecteur à l'ordinateur et au mobile.",
  'about.buildTitle': 'État de la version',
  'about.buildBody':
    "Phase 0 — Fondation. L'architecture, le système de design, l'enveloppe multilingue, le mode présentation et la séquence d'ouverture sont terminés. Les treize chapitres sont en production.",
  'about.scienceTitle': 'Intégrité scientifique',
  'about.scienceBody':
    'Cette version ne publie aucune recommandation médicale. Chaque affirmation clinique sera rattachée à une source citée et révisée par un médecin qualifié avant publication.',
  'about.accessTitle': 'Accessibilité',
  'about.accessBody':
    'La réduction des animations, la navigation au clavier, des états de focus visibles, une mise en page arabe de droite à gauche et une solution de repli sans WebGL sont intégrées à la fondation.',
  'about.stackTitle': 'Technologies',
  'about.stackBody':
    'React, TypeScript, Vite, Three.js, React Three Fiber, Drei, GSAP avec ScrollTrigger, Framer Motion, Tailwind CSS et Lucide.',
  'about.shortcutsTitle': 'Raccourcis clavier',
  'about.shortcut.home': 'Revenir au titre',
  'about.shortcut.program': 'Ouvrir le programme',
  'about.shortcut.presentation': 'Basculer le mode présentation',
  'about.shortcut.about': 'Ouvrir ces notes',
  'about.shortcut.close': 'Fermer une fenêtre',
  'about.motionTitle': 'Mouvement',
  'about.motionBody': "Réduire les animations dans toute l'expérience.",
  'about.motionOn': 'Réduction des animations activée',
  'about.motionOff': 'Réduction des animations désactivée',
  'about.motionSystem': 'Utiliser le réglage du système',
  'about.versionLabel': 'Version',
  'about.phaseLabel': 'Phase',
  'about.chaptersLabel': 'Chapitres',
  'about.languagesLabel': 'Langues',
  'about.formatLabel': 'Format',
  'about.close': 'Fermer les notes de version',
  'about.footer': 'Pensé pour le projecteur. Conçu pour la conversation qui suit.',

  'common.phase': 'Phase {number}',
  'common.chapter': 'Chapitre',
  'common.chapters': 'Chapitres',
  'common.coda': 'Coda',
  'common.inProduction': 'En production',
  'common.available': 'Disponible',
  'common.reviewPending': 'Révision en attente',
  'common.notAvailable': 'Pas encore publié',
  'common.close': 'Fermer',
  'common.reload': 'Recharger',
  'common.returnHome': 'Revenir au titre',
  'common.back': 'Retour',
  'common.next': 'Suivant',
  'common.previous': 'Précédent',
  'common.loading': 'Chargement',
  'common.abstractVisualization': 'Visualisation abstraite — pas un modèle médical.',
  'common.foundationBuild': 'Version fondation · Phase 0',
  'common.noMedicalAdvice':
    "Cette version fondation est un prototype éducatif. Elle ne fournit pas de conseil médical.",

  'footer.disclaimer':
    "Prototype éducatif. Aucun conseil médical n'est fourni dans cette version.",
  'footer.abstract': 'Visualisation abstraite — pas un modèle médical.',
  'footer.phase': 'Version fondation · Phase 0',
  'footer.chapters': '{count} chapitres',
  'footer.languages': 'EN · FR · AR',
  'footer.format': 'Présentation 16:9',

  'loading.canvas': 'Initialisation de la visualisation',
  'loading.scene': "Préparation de l'expérience",

  'error.title': 'Une erreur est survenue.',
  'error.body':
    "L'expérience n'a pas pu être affichée. Votre navigateur bloque peut-être une fonctionnalité requise.",
  'error.reload': "Recharger l'expérience",
  'error.home': 'Revenir au titre',
  'error.canvasTitle': 'Visualisation 3D indisponible.',
  'error.canvasBody':
    "L'expérience reste entièrement utilisable. Un arrière-plan atmosphérique statique est affiché à la place.",
  'error.canvasContinue': 'Continuer sans 3D',
  'error.contextLost':
    "Le contexte 3D a été perdu. L'édition statique est affichée à la place.",
  'error.notFoundTitle': "Cette page ne fait pas partie de l'expérience.",
  'error.notFoundBody':
    "Le lien est peut-être incomplet, ou le chapitre n'existe pas encore.",
  'error.notFoundCta': 'Retour au programme',

  'a11y.skip': 'Aller au contenu',
  'a11y.main': 'Contenu principal',
  'a11y.language': 'Choisir la langue',
  'a11y.openAbout': 'Ouvrir les notes de version',
  'a11y.closeAbout': 'Fermer les notes de version',
  'a11y.presentationOn': 'Le mode présentation est activé',
  'a11y.presentationOff': 'Le mode présentation est désactivé',
  'a11y.reduceMotionOn': 'La réduction des animations est activée',
  'a11y.reduceMotionOff': 'La réduction des animations est désactivée',
  'a11y.chapterList': 'Liste des chapitres',
  'a11y.canvasDescription':
    'Un champ abstrait de particules cramoisies et cyan avec de lents anneaux orbitaux.',
  'a11y.currentPage': 'Page actuelle',
  'a11y.routeAnnouncement': 'Affichage : {title}',
  'a11y.brandHome': 'Revenir au titre',
  'a11y.langOption': 'Passer à {language}',

  'chapter.intro.title': 'Introduction',
  'chapter.intro.scope': "L'invitation, les questions et le chemin à parcourir.",
  'chapter.virus.title': 'Le virus',
  'chapter.virus.scope': 'La structure, les composants et la diversité du VIH.',
  'chapter.cd4.title': 'Les cellules CD4',
  'chapter.cd4.scope':
    "Les cellules immunitaires au cœur de l'infection et de la pathogenèse du VIH.",
  'chapter.infection.title': "L'infection",
  'chapter.infection.scope':
    "Comment le VIH pénètre dans l'organisme et établit l'infection.",
  'chapter.lifecycle.title': 'Le cycle viral',
  'chapter.lifecycle.scope':
    'Les étapes de la réplication du VIH et les enzymes qui les pilotent.',
  'chapter.immunity.title': "L'immunité",
  'chapter.immunity.scope':
    "Les réponses immunitaires au VIH et les stratégies d'évasion du virus.",
  'chapter.hiv-aids.title': 'VIH et sida',
  'chapter.hiv-aids.scope':
    "Le spectre clinique, de l'infection par le VIH au sida, et l'importance d'une prise en charge précoce.",
  'chapter.transmission.title': 'La transmission',
  'chapter.transmission.scope':
    'Les voies de transmission et les facteurs qui influencent le risque.',
  'chapter.prevention.title': 'La prévention',
  'chapter.prevention.scope':
    'La prévention fondée sur les preuves et la logique de la prévention combinée.',
  'chapter.diagnosis.title': 'Le diagnostic',
  'chapter.diagnosis.scope':
    'Les approches de dépistage, les périodes fenêtres et la confirmation.',
  'chapter.treatment.title': 'Le traitement',
  'chapter.treatment.scope':
    "Le traitement antirétroviral, l'observance et l'objectif de suppression virale.",
  'chapter.stigma.title': 'La stigmatisation',
  'chapter.stigma.scope':
    'Les dimensions sociales et psychologiques de la stigmatisation liée au VIH — et les moyens de la combattre.',
  'chapter.quiz.title': 'Vérification des connaissances',
  'chapter.quiz.scope': "Une révision structurée des concepts clés de l'expérience.",
  'chapter.credits.title': 'Crédits',
  'chapter.credits.scope': 'Contributeurs, sources et crédits de production.',
}
