import {createRouter, createWebHistory} from 'vue-router'
import Props from '@/pages/01_props/Father.vue'
import CustomEvent from '@/pages/02_custom-event/Father.vue'
import Mitt from '@/pages/03_mitt/Father.vue'


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/props',
            component: Props
        },
        {
            path: '/custom-event',
            component: CustomEvent
        }, 
        {
            path: '/mitt',
            component: Mitt
        }
    ]
})