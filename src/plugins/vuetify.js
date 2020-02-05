import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: colors.deepPurple.lighten1,
                secondary: colors.cyan,
            },
        }
    },
    icons: {
        iconfont: 'mdiSvg',
    }
});
