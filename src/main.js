import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './components/Home.vue';
import nine from './components/nine.vue';
import contato from './components/contato.vue';
import serv from './components/serv.vue';
Vue.use(VueRouter);
const router = new VueRouter({
  routes:[
    {
      path: '/Home',
      component:Home
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
  ]
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
