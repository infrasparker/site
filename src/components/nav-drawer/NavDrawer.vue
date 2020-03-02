<template>
<v-navigation-drawer
    permanent
    expand-on-hover
    app
>
    <v-list>
        <v-divider></v-divider>
        <div v-for="(section, i) in panel" :key="i">
            <v-list-item v-for="(item, j) in section" :key="j" :to="item.href">
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
        </div>
        <hidden-section></hidden-section>
    </v-list>
</v-navigation-drawer>
</template>

<style lang="scss" scoped src="@/components/nav-drawer/NavDrawer.vue.scss"></style>

<script lang="ts" src="@/components/nav-drawer/NavDrawer.vue.ts"></script>