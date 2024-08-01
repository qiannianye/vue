import {createRouter, createWebHistory} from 'vue-router'
import Props from '@/pages/01_props/Father.vue'
import CustomEvent from '@/pages/02_custom-event/Father.vue'
import Mitt from '@/pages/03_mitt/Father.vue'
import VModel from '@/pages/04_v-model/Father.vue'
import AttrsFather from '@/pages/05_attrs/Father.vue'
import RefsFather from '@/pages/06_$refs-$parent/Father.vue'
import ProvideFather from '@/pages/07_provide-inject/Father.vue'
import PiniaFather from '@/pages/08_pinia/Father.vue'
import SlotDefault from '@/pages/09_slot-default/Father.vue'


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
        },
        {
            path: '/model',
            component: VModel
        },
        {
            path: '/attrs',
            component: AttrsFather
        },
        {
            path: '/refs',
            component: RefsFather
        },
        {
            path: '/provide',
            component: ProvideFather
        },
        {
            path: '/pinia',
            component: PiniaFather
        },
        {
            path: '/slot-default',
            component: SlotDefault
        }
    ]
})