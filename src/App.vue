<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
    >
      <v-btn text icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>

    </v-app-bar> -->

    <nav-drawer></nav-drawer>

    <v-content>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>


<style lang="scss" scoped>
  @import '@/scss/font_vars.scss';

  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s ease .1s;
  }

  .fade-leave-active {
    transition: opacity .1s ease 0s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

</style>

<script>
import NavDrawer from '@/components/nav-drawer/NavDrawer.vue';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    'nav-drawer': NavDrawer
  }
};
</script>
