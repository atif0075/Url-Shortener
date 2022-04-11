import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        meta: { title: 'Home' },
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/all-links',
        meta: { title: 'All Links' },
        component: () => import('../views/AllLinks.vue'),
    },
    {
        path: '/:catchAll(.*)*',
        name: '404',
        meta: { title: '404' },
        component: () => import('../views/404.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'text-amber-500',
})

export default router
