// import of components
import Home from '@/components/Home.vue';
import nine from '@/components/Nine.vue';
import contato from '@/components/Contato.vue';
import serv from '@/components/Serv.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/serv',
        component: serv
    }, 
    {
        path: '/contato',
        component: contato
    },
    {
        path: '/nine',
        component: nine
    }
];

export default { routes };
