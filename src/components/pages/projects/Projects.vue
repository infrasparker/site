<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12">
                <h2 class="title-secondary">Personal Projects</h2>
            </v-col>
        </v-row>
        <v-row v-for="n in Math.ceil(projects.length / 3.0)" :key="n">
            <v-col cols="4" v-for="m in Math.min(projects.length - (n - 1) * 3, 3)" :key="m">
                <v-card class="link-ish" raised justify="center" :href="projects[(n - 1) * 3 + m - 1].link">
                    <v-img
                        max-width="80%"
                        height="200"
                        contain
                        class="img"
                        :src="require('@/assets/' + projects[(n - 1) * 3 + m - 1].image)"
                    >
                    </v-img>
                    <v-card-title class="title" v-text="projects[(n - 1) * 3 + m - 1].name"></v-card-title>
                    <v-card-text class="text" v-text="projects[(n - 1) * 3 + m - 1].description"></v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-list></v-list>
    </v-container>
</template>

<style lang="scss" scoped src="./Projects.vue.scss"></style>

<script lang="ts" src="./Projects.vue.ts"></script>