import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        meta: { title: 'Home' },
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/your-links',
        meta: { title: 'Your Links' },
        component: () => import('../views/YourLinks.vue'),
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
