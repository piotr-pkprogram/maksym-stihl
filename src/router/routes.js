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

const routes = [{
        name: 'start',
        path: '/',
        component: Start,
        alias: "/index.html"
    },
    {
        name: 'nasze-produkty',
        path: '/produkty',
        component: Products,
    },
    {
        name: 'serwis-naprawczy',
        path: '/serwis-naprawczy',
        component: RepairService,
    },
    {
        name: 'kontakt',
        path: '/kontakt',
        component: Contact,
    },
    {
        name: 'polityka-prywatności',
        path: '/polityka-prywatności',
        component: PrivacyPolicy,
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
    }

];

export default routes;