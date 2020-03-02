import Vue from 'vue';

export default Vue.extend({
    name: 'HiddenSection',
    data: () => (
        {
            dialog: false,
            expose: false,
            password: null,
            show: false,
            panel: [
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
        }
    ),
    methods: {
        submit: function() {
            if (this.password === process.env.VUE_APP_EXPERIMENTAL_PASSWORD) {
                this.show = true;
            } else {
                this.reset();
            }
            this.dialog = false;
            console.log(this.show);
        },
        reset: function() {
            this.password = null;
        }
    }
})