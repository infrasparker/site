import Vue from 'vue';

export default Vue.extend({
    name: 'NavDrawer',
    data: () => ({
        items: [
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
    })
})