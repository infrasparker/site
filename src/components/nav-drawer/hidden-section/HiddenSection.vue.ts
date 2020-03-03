import Vue from 'vue';

export default Vue.extend({
    name: 'HiddenSection',
    data: () => (
        {
            dialog: false,
            expose: false,
            password: null,
            panel: [
                [
                    {
                        icon: 'mdi-cloud',
                        title: 'Weather',
                        href: '/weather'
                    }
                ]
            ]
        }
    ),
    methods: {
        submit: function() {
            if (this.password === process.env.VUE_APP_EXPERIMENTAL_PASSWORD) {
                this.$store.experimental = true;
            } else {
                this.reset();
            }
            this.dialog = false;
        },
        reset: function() {
            this.password = null;
        }
    }
})