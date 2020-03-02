import Vue from 'vue';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import LandingPage from '@/components/pages/landing-page/LandingPage';
import AboutMe from '@/components/pages/about-me/AboutMe';
import Projects from '@/components/pages/projects/Projects';

// import '@/scss/font_vars.scss';
import '@/scss/global_styles.scss';

Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    component: LandingPage
  },
  {
    path: '/about-me',
    component: AboutMe
  },
  {
    path: '/projects',
    component: Projects
  },
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
