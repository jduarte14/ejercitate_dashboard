<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
        sidebar: Boolean,
        handleSidebar: Function,
})

</script>
<template>
        <v-navigation-drawer class="bg-slate text-white" v-model="props.sidebar">
                <v-row class="d-flex align-center pl-5 py-9">
                        <Icon class="text-subtitle pointer" icon="zondicons:close" color="white" @click="props.handleSidebar" />
                        <h4 class="pl-2">Gym dash</h4>
                </v-row>
                <v-divider></v-divider>
                <v-list-item link class="my-5 py-3 d-flex align-center">
                       <Icon class="text-h4 mr-1" icon="game-icons:gym-bag" color="white" /><b class="h3"> Gym </b>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item link class="my-5 py-3">
                        <RouterLink class="pl-2 text-white text-decoration-none d-flex align-center" to="/gym">
                                <Icon class="text-h5 mb-1 mr-2" icon="material-symbols:payments-rounded" color="white" /> Payments
                        </RouterLink>
                </v-list-item>

                <v-list-item link class="my-5 py-3">
                        <RouterLink class="pl-2 text-white text-decoration-none d-flex align-center" to="/">
                                <Icon class="text-h5 mb-1 mr-2" icon="map:gym" color="white" /> Activities
                        </RouterLink>
                </v-list-item>

                <v-list-item link class="my-5 py-3">
                        <RouterLink class="pl-2 text-white text-decoration-none d-flex align-center" to="/">
                                <Icon class="text-h5 mb-1 mr-2" icon="fa6-solid:shower" color="white" /> Facilities
                        </RouterLink>
                </v-list-item>
                <v-list-item link class="my-5 py-3">
                        <RouterLink class="pl-2 text-white text-decoration-none d-flex align-center" to="/">
                                <Icon class="text-h5 mb-1 mr-2" icon="game-icons:gym-bag" color="white" /> Facilities
                        </RouterLink>
                </v-list-item>
                <v-divider></v-divider>
                <v-row class="d-flex align-center pl-5 py-9">
                        <Icon class="text-subtitle pointer" icon="material-symbols:settings" color="white" @click="props.handleSidebar" />
                        <h4 class="pl-2">Settings</h4>
                </v-row>
                <v-divider></v-divider>
                <v-list-item link class="my-5 py-3">
                        <RouterLink class="pl-2 text-white text-decoration-none d-flex align-center" to="/">
                                <Icon class="text-h5 mb-1 mr-2" icon="material-symbols:stacked-email-outline-rounded" color="white" /> Change credentials
                        </RouterLink>
                </v-list-item>
                <v-divider></v-divider>
                <v-row class="d-flex align-center pl-5 py-9">
                        <Icon class="text-subtitle pointer" icon="material-symbols:settings" color="white" @click="props.handleSidebar" />
                        <h4 class="pl-2">Instructors</h4>
                </v-row>
                <v-divider></v-divider>
                <v-list-item link class="my-5 py-3">
                        <RouterLink class="pl-2 text-white text-decoration-none d-flex align-center" to="/">
                                <Icon class="text-h5 mb-1 mr-2" icon="gg:list" color="white" /> Instructors list
                        </RouterLink>
                </v-list-item>
                <v-list-item link class="my-5 py-3">
                        <RouterLink class="pl-2 text-white text-decoration-none d-flex align-center" to="/">
                                <Icon class="text-h5 mb-1 mr-2" icon="charm:people" color="white" /> Hired instructors
                        </RouterLink>
                </v-list-item>
        </v-navigation-drawer>
</template>
