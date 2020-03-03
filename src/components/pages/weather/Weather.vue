<template>
<v-container fluid>
    <v-row justify="center">
        <v-col cols="12">
            <h2 class="title-secondary text-center">
                Weather
            </h2>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col cols="4">
            <v-card v-if="weather">
                <v-card-title>
                    <h3 class="location">{{weather.name}}, {{weather.sys.country}}</h3>
                </v-card-title>
                <v-card-subtitle>
                    <h5>{{date}}</h5>
                </v-card-subtitle>
                <v-card-text>
                    <v-row align="center" class="text-center">
                        <v-col cols="5" offset="1">
                            <h3 class="temperature celsius">{{temperatureC}}°C</h3>
                            <h3 class="temperature fahreinheit">{{temperatureF}}°F</h3>
                        </v-col>
                        <v-col cols="6" align="center">
                            <h5 class="text-center">{{weather.weather[0].description}}</h5>
                            <v-img width="60%" :src='`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`'></v-img>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="1" offset="1">
                            <v-icon>mdi-weather-windy</v-icon>
                        </v-col>
                        <v-col cols="3" offset="1">
                            <h5>{{weather.wind.speed}}</h5>
                        </v-col>
                        <v-col cols="1" offset="1">
                            <v-icon>mdi-water-percent</v-icon>
                        </v-col>
                        <v-col cols="3" offset="1">
                            <h5>{{weather.main.humidity}}</h5>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<style lang="scss" scoped src="./Weather.vue.scss"></style>

<script lang="ts" src="./Weather.vue.ts"></script>