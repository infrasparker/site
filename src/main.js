import Vue from 'vue';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import LandingPage from '@/components/pages/LandingPage';
import AboutMe from '@/components/pages/AboutMe';

Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
  { path: '/', component: LandingPage},
  { path: '/about-me', component: AboutMe},
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
