import Vue from 'vue';

export default Vue.extend({
    name: 'AboutMe',
    data: () => (
        {
            weather: null
        }
    ),
    computed: {
        date: function() {
            if (this.weather) {
                const date = new Date(this.weather.dt * 1000);

                const yr = date.getFullYear();

                const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                const mo = months[date.getMonth()];

                const day = date.getDate();

                const hrMilitary = date.getHours();
                const half = hrMilitary % 12 === 0 ? 'AM' : 'PM'
                const hr = hrMilitary % 12 === 0 ? 12 : hrMilitary % 12;

                const mi = `0${date.getMinutes()}`.substr(-2);

                const s = `0${date.getSeconds()}`.substr(-2);
                return `${mo} ${day}, ${yr} ${hr}:${mi}:${s} ${half}`;
            } else {
                return null;
            }
        },
        temperatureC: function() {
            return this.weather ? (this.weather.main.temp - 273).toFixed(1) : null;
        },
        temperatureF: function() {
            return this.weather ? (this.temperatureC * 9 / 5 + 32).toFixed(1) : null;
        }
    },
    mounted: function() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?zip=94103,us&APPID=${process.env.VUE_APP_WEATHER_KEY}`)
            .then(stream => stream.json())
            .then(data => {
                this.weather = data
                console.log(this.weather)
            })
            .catch(error => console.log(error));
    }
})