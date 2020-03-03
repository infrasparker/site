import Vue from 'vue';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import LandingPage from '@/components/pages/landing-page/LandingPage';
import AboutMe from '@/components/pages/about-me/AboutMe';
import Projects from '@/components/pages/projects/Projects';
import Weather from '@/components/pages/weather/Weather';

// import '@/scss/font_vars.scss';
import '@/scss/global_styles.scss';

Vue.config.productionTip = false;

const store = {
  experimental: false
}

Vue.prototype.$store = store;

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
  {
    path: '/weather',
    component: Weather,
    beforeEnter: (to, from, next) => {
      if (store.experimental) {
        next();
      } else {
        next('/');
      }
    }
  }
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
