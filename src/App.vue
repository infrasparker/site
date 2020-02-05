<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
    >
      <v-btn text icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>

    </v-app-bar>

    <!-- <v-navigation-drawer
      permanent
      expand-on-hover
    >
    <v-list>Test</v-list>
    <v-divider></v-divider>
    <v-list>Test2</v-list>
    </v-navigation-drawer> -->

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
    transition: opacity .25s ease 0s;
  }

  .fade-leave-active {
    transition: opacity .25s ease 0s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

</style>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
