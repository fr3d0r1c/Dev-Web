import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutMeView from "@/views/AboutMeView.vue";
import ApiView from "@/views/ApiView.vue";

const routes = [
    {path: '/', component: HomeView},
    {path: '/about', component: AboutMeView},
    {path: '/api', component: ApiView}
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})