<template>
<div>
    <div v-if="$store.experimental">
        <div v-for="(section, i) in panel" :key="i">
            <v-list-item v-for="(item, j) in section" :key="j" :to="item.href">
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
        </div>
    </div>

    <v-dialog
        v-if="!$store.experimental"
        v-model="dialog"
        max-width="600"
        v-on:click:outside="reset()"
    >
        <template v-slot:activator="{ on }" >
            <div v-on="on">
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-chevron-double-down</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Experimental</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
            </div>
        </template>

        <v-card>
            <v-container>
                <v-card-title>
                    <h2 class="title-secondary">RESTRICTED</h2>
                </v-card-title>
                <v-card-subtitle>
                    <p>Additional access rights are required to view experimental pages.</p>
                </v-card-subtitle>
                <v-row justify="center" align="center">
                    <v-col cols="9">
                        <v-text-field
                            v-model="password"
                            :append-icon="expose ? 'mdi-eye-off' : 'mdi-eye-off'"
                            :type="expose ? 'text' : 'password'"
                            label = "Password"
                            clearable
                            counter
                            v-on:click:append="expose = !expose"
                            v-on:keyup.enter="submit()"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn
                            color="primary"
                            depressed
                            v-on:click="submit()"
                        >
                            Submit
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</div>
</template>

<style lang="scss" scoped src="@/components/nav-drawer/hidden-section/HiddenSection.vue.scss"></style>

<script lang="ts" src="@/components/nav-drawer/hidden-section/HiddenSection.vue.ts"></script>