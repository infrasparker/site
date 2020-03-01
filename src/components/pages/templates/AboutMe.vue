<template>
<v-container fluid>
    <v-card>
        <v-row id="about-me" justify="space-around" align="center">
            <v-col cols="3">
                <v-img
                    alt="profile picture"
                    src="@/assets/profile.png"
                >
                </v-img>
            </v-col>
            <v-col cols="auto">
                <h2 class="title-secondary">About Me</h2>
                <p v-for="(line, i) in aboutMe" :key="i" v-text="line"></p>
            </v-col>
        </v-row>
    </v-card>
    <v-row id="bio" justify="center">
        <v-col cols="12">
            <h2 class="title-secondary">Bio</h2>
        </v-col>
        <v-col cols="12">
            <v-timeline>
                <v-timeline-item
                    v-for="(item, i) in bio"
                    :key="i"
                    right
                    small
                    fill-dot
                    class="timeline-item"
                >
                    <span slot="opposite" v-text="item.heading"></span>
                    <v-card>
                        <!-- <v-card-title v-text="item.heading"></v-card-title> -->
                        <v-card-text class="card-text" v-text="item.text"></v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-col>
    </v-row>
</v-container>
</template>

<style lang="scss" scoped src="@/components/pages/scss/AboutMe.vue.scss"></style>

<script lang="ts" src="@/components/pages/ts/AboutMe.vue.ts"></script>