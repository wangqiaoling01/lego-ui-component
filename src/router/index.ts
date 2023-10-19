import { createRouter, createWebHistory } from 'vue-router'
import Editor from '../views/EditorView.vue'
import TemplateDetail from '../views/TemplateDetail.vue'
import Home from '@/views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/editor',
            name: 'editor',
            component: Editor
        },
        {
            path: '/template/:id',
            name: 'template',
            component: TemplateDetail
        }
    ]
})

export default router
