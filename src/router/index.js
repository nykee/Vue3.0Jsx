import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        component: () => import('../views/Index.jsx'),

    },
    {
        path: '/About',
        component: () => import('../views/About.jsx'),
    },
    {
        path: '/Blog',
        component: () => import('../views/Blog.jsx'),
    },
    {
        path: '/Friends',
        component: () => import('../views/Friends.jsx'),
    },
    {
        path: '/Phrase',
        component: () => import('../views/Phrase.jsx'),
    },
    {
        path: '/Comment',
        component: () => import('../views/Comment.jsx'),
    },
    {
        path: '/Photo',
        component: () => import('../views/Photo.jsx'),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
})