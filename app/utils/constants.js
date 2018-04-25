// @flow

// Google Maps API
export const googleApiKey = 'AIzaSyCbIoehLkQA_wtMOe1xrr_2lh5cqXbzTj4';

// Misc.
export const characterLimit = 210;
export const titles = ['M.', 'Mme'];

// Dates
export const dateFormat = 'DD MMM YYYY';
export const dateTimeFormat = 'DD MMM YYYY / HH:mm';
export const arrayOfMonths = Array.from({ length: 12 }, (v: ?number, k: ?number) => k + 1).map(
    (month: ?number) => ({
        key: month,
        value: month && (month < 10 ? '0' : '') + month,
    })
);

// Collection & Media Values

export const languages = [
    {
        key: 'fr',
        intlId: 'global.french',
    },
    {
        key: 'en',
        intlId: 'global.english',
    },
];

export const orderOptions = [
    {
        key: JSON.stringify({ orderBy: 'title', order: 'asc' }),
        intlId: 'global.orderBy.titleAsc',
    },
    // {
    //     key: JSON.stringify({'orderBy':'author','order':'asc'}),
    //     intlId: 'global.orderBy.authorAsc',
    // },
    // {
    //     key: JSON.stringify({'orderBy':'country','order':'asc'}),
    //     intlId: 'global.orderBy.countryAsc',
    // },
    {
        key: JSON.stringify({ orderBy: 'date', order: 'asc' }),
        intlId: 'global.orderBy.dateAsc',
    },
    {
        key: JSON.stringify({ orderBy: 'date', order: 'desc' }),
        intlId: 'global.orderBy.dateDesc',
    },
    // {
    //     key: JSON.stringify({'orderBy':'approval_date','order':'asc'}),
    //     intlId: 'global.orderBy.approvalDateAsc',
    // },
    {
        key: JSON.stringify({ orderBy: 'type', order: 'asc' }),
        intlId: 'global.orderBy.typeAsc',
    },
    {
        key: JSON.stringify({ orderBy: 'custom' }),
        intlId: 'global.orderBy.custom',
    },
];

export const LOMContext = [
    {
        value: 'Éducation supérieure',
    },
    {
        value: 'Formation continue',
    },
    {
        value: 'Autre',
    },
];

export const LOMResourceType = [
    {
        value: 'Autoévaluation',
    },
    {
        value: 'Diagramme',
    },
    {
        value: 'Diapositive',
    },
    {
        value: "Énoncé d'un problème",
    },
    {
        value: 'Examen',
    },
    {
        value: 'Exercice',
    },
    {
        value: 'Expérience',
    },
    {
        value: 'Figure',
    },
    {
        value: 'Graphique',
    },
    {
        value: 'Index',
    },
    {
        value: 'Lecture',
    },
    {
        value: 'Questionnaire',
    },
    {
        value: 'Simulation',
    },
    {
        value: 'Tableau',
    },
    {
        value: 'Texte narratif',
    },
];

export const NormeticAggregateLevel = [
    {
        value: 'Données médias brutes et fragments',
    },
    {
        value: 'Une collection de REA de niveau 1',
    },
    {
        value: 'Une collection de REA de niveau 2',
    },
    {
        value: 'La granularité la plus élevée',
    },
];

export const NormeticContext = [
    {
        value: 'Éducation préscolaire',
    },
    {
        value: 'Éducation primaire',
    },
    {
        value: 'Éducation secondaire',
    },
    {
        value: 'Cegep',
    },
    {
        value: 'Université premier cycle',
    },
    {
        value: 'Université second cycle',
    },
    {
        value: 'Université troisième cycle',
    },
    {
        value: 'Formation professionnelle',
    },
    {
        value: 'Formation technique',
    },
    {
        value: 'Formation continue',
    },
    {
        value: 'Formation en entreprise',
    },
    {
        value: 'Autre',
    },
];

export const NormeticResourceType = [
    {
        value: 'Activité',
    },
    {
        value: 'Animation',
    },
    {
        value: 'Démonstration',
    },
    {
        value: 'Évaluation',
    },
    {
        value: 'Examen',
    },
    {
        value: 'Exercice',
    },
    {
        value: 'Expérience',
    },
    {
        value: 'Exploration',
    },
    {
        value: 'Glossaire',
    },
    {
        value: 'Guide',
    },
    {
        value: 'Lecture/présentation',
    },
    {
        value: 'Matériel de référence',
    },
    {
        value: 'Méthodologie',
    },
    {
        value: 'Outils',
    },
    {
        value: 'Questionnaire',
    },
    {
        value: 'Scénario pédagogique',
    },
    {
        value: 'Simulation',
    },
    {
        value: "Situation d'apprentissage et d'évaluation",
    },
    {
        value: 'Texte-document informatif',
    },
    {
        value: 'Tutoriel',
    },
];

export const itunesUMainSubCategories = [
    {
        key: 'category-1',
        value: 'Category 1',
    },
    {
        key: 'category-2',
        value: 'Category 2',
    },
];

export const itunesUComplementarySubcategory = [
    {
        key: 'category-1',
        value: 'Category 1',
    },
    {
        key: 'category-2',
        value: 'Category 2',
    },
];

export const itunesUComplementarySubcategory2 = [
    {
        key: 'category-1',
        value: 'Category 1',
    },
    {
        key: 'category-2',
        value: 'Category 2',
    },
];

export const itunesUMainVideoFormat = [
    {
        key: 'format-1',
        value: 'Format 1',
    },
    {
        key: 'format-2',
        value: 'Format 2',
    },
];
