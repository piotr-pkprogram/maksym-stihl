const Start = () =>
    import ("../views/Start.vue");
const Products = () =>
    import ("../views/Products.vue");
const RepairService = () =>
    import ("../views/RepairService.vue");
const Contact = () =>
    import ("../views/Contact.vue");
const PrivacyPolicy = () =>
    import ("../views/PrivacyPolicy.vue");
const Category = () =>
    import ("../views/Category.vue");
const Product = () =>
    import ("../views/Product.vue");
const CatchAll = () =>
    import ('../views/CatchAll.vue');

const routes = [{
        name: 'start',
        path: '/',
        component: Start,
        alias: "/index.html",
        meta: {
            publicRoute: true,
            title: "Maksym STIHL - Serwis naprawczy oraz autoryzowany dealer firmy STIHL w Skwierzynie",
            metaTags: [{
                    name: 'description',
                    content: 'Hej :). Jesteś ze Skiwerzyny i szukasz nowego narzędzia lub chcesz naprawić swoje? Zajrzyj. Może coś Cię zainteresuje.'
                },
                {
                    property: 'keywords',
                    content: 'maksym stihl, maksym stihl skwierzyna, maksym stihl serwis naprawczy, maksym stihl autoryzowany dealer firmy stihl, maksym stihl autoryzowany dealer marki stihl, skwierzyna, serwis naprawczy, autoryzowany dealer firmy stihl, autoryzowany dealer marki stihl',
                },
                {
                    property: 'og:title',
                    content: 'Maksym STIHL - Serwis naprawczy oraz autoryzowany dealer firmy STIHL w Skwierzynie'
                },
                {
                    property: 'og:description',
                    content: 'Hej :). Jesteś ze Skiwerzyny i szukasz nowego narzędzia lub chcesz naprawić swoje? Wejdź. Może coś Cię zainteresuje.'
                },
                {
                    property: 'og:site_name',
                    content: 'Start'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:url',
                    content: 'https://maksym.net.pl/'
                },
                {
                    property: 'og:image',
                    content: 'https://maksym.net.pl/img/logo.f2323fc1.png'
                },
            ]
        },
    },
    {
        name: 'nasze-produkty',
        path: '/produkty',
        component: Products,
        meta: {
            publicRoute: true,
            title: "Produkty | Maksym STIHL",
            metaTags: [{
                    name: 'description',
                    content: 'Potrzepujesz nowych narzędzi? Chcesz znaleźć coś odpowiedniego dla siebie? Zapraszamy tutaj! Może znajdziesz coś dla siebie! W naszej ofercie posiadamy narzędzia wielu marek najlepszych (np. STIHL, czy VIKING) także na co czekasz?'
                },
                {
                    property: 'keywords',
                    content: 'produkty maksym stihl, narzędzia maksym stihl, narzędzia marki stihl, narzędzia marki stihl, produkty maksym stihl skwierzyna, narzędzia maksym stihl skwierzyna, narzędzia marki stihl skwierzyna, narzędzia marki stihl skwierzyna, produkty stihl, narzędzia stihl, produkty stihl skwierzyna, narzędzia stihl skwierzyna',
                },
                {
                    property: 'og:title',
                    content: 'Produkty | Maksym STIHL'
                },
                {
                    property: 'og:description',
                    content: 'Potrzepujesz nowych narzędzi? Chcesz znaleźć coś odpowiedniego dla siebie? Zapraszamy tutaj! Może znajdziesz coś dla siebie! W naszej ofercie posiadamy narzędzia wielu marek najlepszych (np. STIHL, czy VIKING) także na co czekasz?'
                },
                {
                    property: 'og:site_name',
                    content: 'Produkty'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:url',
                    content: 'https://maksym.net.pl/produkty'
                },
                {
                    property: 'og:image',
                    content: 'https://maksym.net.pl/img/logo.f2323fc1.png'
                },
            ]
        },
    },
    {
        name: 'serwis-naprawczy',
        path: '/serwis-naprawczy',
        component: RepairService,
        meta: {
            publicRoute: true,
            title: "Serwis Naprawczy | Maksym STIHL",
            metaTags: [{
                    name: 'description',
                    content: 'Chcesz naprawić swoje narzędzia? Szukasz doświadczonego serwisu naprawczego? Zajrzyj tutaj. Jeśli jesteś ze Skiwerzyny lub okolic napewno Ci pomożemy :).'
                },
                {
                    property: 'keywords',
                    content: 'serwis naprawczy, serwis naprawczy skwierzyna, serwis naprawczy narzędzi marki stihl, serwis naprawczy skwierzyna narzędzi marki stihl',
                },
                {
                    property: 'og:title',
                    content: 'Serwis Naprawczy | Maksym STIHL'
                },
                {
                    property: 'og:description',
                    content: 'Chcesz naprawić swoje narzędzia? Szukasz doświadczonego serwisu naprawczego? Zajrzyj tutaj. Jeśli jesteś ze Skiwerzyny lub okolic na pewno Ci pomożemy :).'
                },
                {
                    property: 'og:site_name',
                    content: 'Serwis Naprawczy'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:url',
                    content: 'https://maksym.net.pl/serwis-naprawczy'
                },
                {
                    property: 'og:image',
                    content: 'https://maksym.net.pl/img/logo.f2323fc1.png'
                },
            ]
        },
    },
    {
        name: 'kontakt',
        path: '/kontakt',
        component: Contact,
        meta: {
            publicRoute: true,
            title: "Kontakt | Maksym STIHL",
            metaTags: [{
                    name: 'description',
                    content: 'Masz jakieś pytania lub potrzebujesz w czymś pomocy? Skontaktuj się z nami, a na pewno odpowiemy na twoje potrzeby :). '
                },
                {
                    property: 'keywords',
                    content: 'kontakt maksym stihl, kontakt maksym stihl skwierzyna, kontakt maksym stihl serwis naprawczy, kontakt serwis naprawczy, kontakt maksym stihl narzędzia, kontakt narzędzi marki stihl',
                },
                {
                    property: 'og:title',
                    content: 'Kontakt | Maksym STIHL'
                },
                {
                    property: 'og:description',
                    content: 'Masz jakieś pytania lub potrzebujesz w czymś pomocy? Skontaktuj się z nami, a na pewno odpowiemy na twoje potrzeby :).'
                },
                {
                    property: 'og:site_name',
                    content: 'Kontakt'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:url',
                    content: 'https://maksym.net.pl/kontakt'
                },
                {
                    property: 'og:image',
                    content: 'https://maksym.net.pl/img/logo.f2323fc1.png'
                },
            ]
        },
    },
    {
        name: 'polityka-prywatności',
        path: '/polityka-prywatnosci',
        component: PrivacyPolicy,
        meta: {
            publicRoute: true,
            title: "Polityka Prywatności | Maksym STIHL",
            metaTags: [{
                    name: 'description',
                    content: 'Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw. cookies.'
                },
                {
                    property: 'keywords',
                    content: 'maksym stihl, maksym stihl serwis naprawczy, maksym stihl serwis naprawczy skwierzyna, maksym stihl autoryzowany dealer stihl, polityka prywatnosci maksym stihl, polityka prywatności maksym.net.pl, polityka cookies maksym.net.pl, polityka cookies maksym stihl',
                },
                {
                    property: 'og:title',
                    content: 'Polityka Prywatności | Maksym STIHL'
                },
                {
                    property: 'og:description',
                    content: 'Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw. cookies.'
                },
                {
                    property: 'og:site_name',
                    content: 'Polityka Prywatności'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:url',
                    content: 'https://maksym.net.pl/polityka-prywatności'
                },
                {
                    property: 'og:image',
                    content: 'https://maksym.net.pl/img/logo.f2323fc1.png'
                },
            ]
        },
    },
    {
        name: 'kategorie',
        path: "/:categoryName",
        component: Category,
    },
    {
        name: "produkty",
        path: "/:categoryName/:productName",
        component: Product
    },
    {
        name: 'error',
        path: '/:catchAll(.*)',
        component: CatchAll
    }

];

export default routes;