import Vue from 'vue';

import HiddenSection from './hidden-section/HiddenSection.vue';

export default Vue.extend({
    name: 'NavDrawer',
    data: () => ({
        panel: [
            [
                {
                    icon: 'mdi-home',
                    title: 'Landing Page',
                    href: '/'
                }
            ],
            [
                {
                    icon: 'mdi-account',
                    title: 'About Me',
                    href: '/about-me'
                },
                {
                    icon: 'mdi-folder-multiple',
                    title: 'Personal Projects',
                    href: '/projects'
                }
            ]
        ]
    }),
    components: {
        'hidden-section': HiddenSection
    }
})