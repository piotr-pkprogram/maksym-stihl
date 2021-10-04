import Start from "../views/Start.vue";
import Products from "../views/Products.vue";
import RepairService from "../views/RepairService.vue";
import Contact from "../views/Contact.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";

const routes = [{
        name: 'start',
        path: '/',
        component: Start,
        alias: "/index.html"
    },
    {
        name: 'nasze-produkty',
        path: '/nasze-produkty',
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
];

export default routes;