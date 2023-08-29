import MainPage from '@/pages/MainPage'
import PostsPage from '@/pages/PostsPage'
import AboutUs from '@/pages/AboutUs'
import PostPage from '@/pages/PostPage'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/about',
        component: AboutUs
    },
    {
        path: '/posts/:id',
        component: PostPage
    }

]

const router = createRouter({
    routes, 
    history: createWebHistory(process.env.BASE_URL)
})

export default router;