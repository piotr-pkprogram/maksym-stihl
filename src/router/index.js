import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.afterEach((to) => {
    const nameView = to.matched.slice().reverse().find(route => route.name)
    const footer = document.querySelector("footer");

    if (nameView) {
        if (nameView.name === 'start') {
            footer.classList.add("pt-24");
        } else {
            footer.classList.remove("pt-24");
        }
    } else {
        footer.classList.remove("pt-24");
    }
})

export default router;