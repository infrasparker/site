<template>
<v-container fill-height fluid>
    <v-row align="center" justify="center">
        <v-col cols="12">
            <transition name="fade" appear>
                <h1 id="name">
                    Devin Wu
                </h1>
            </transition>
            <transition name="fade" appear>
                <h2 id="title">
                    Software Engineer
                </h2>
            </transition>
        </v-col>
        <transition name="fade" appear>
            <v-col id="github" cols="auto">
                <a href="https://github.com/infrasparker">
                    <v-icon x-large>mdi-github-circle</v-icon>
                </a>
                <caption>Github</caption>
            </v-col>
        </transition>
        <transition name="fade" appear>
            <v-col id="linkedin" cols="auto">
                <a href="https://www.linkedin.com/in/devin-wu-6a7834123/">
                    <v-icon x-large>mdi-linkedin-box</v-icon>
                </a>
                <caption>LinkedIn</caption>
            </v-col>
        </transition>
    </v-row>
</v-container>
</template>

<style lang="scss" scoped src="./LandingPage.vue.scss"></style>

<script lang="ts" src="./LandingPage.vue.ts"></script>