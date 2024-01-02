<script lang="ts" setup>
import { ref } from 'vue';
import Sidebar from './Sidebar.vue';
import { Icon } from '@iconify/vue';

const sidebar = ref(true);
const handleSidebar = () => {
    sidebar.value = !sidebar.value;
}
</script>
<template>
    <header class="w-100 d-flex align-center justify-center position-relative bg-slate">
        <v-row class="position-absolute left-0 pointer" style="left:20px;">
            <Icon v-if="!sidebar" class="text-h6" icon="iconamoon:menu-burger-horizontal-bold" color="white"
                @click="handleSidebar" />
        </v-row>
        <div class="logo px-5 py-5">
            <v-img width="175px" height="auto" src="./../assets/logo.png" />
        </div>
        <v-btn class="position-absolute bg-white d-flex align-center justify-center" style="right:20px;color:var(--slate)">
            Logout <Icon class="text-h6" icon="iconamoon:exit" color="#0f172a" />
                
        </v-btn>
    </header>
    <Sidebar :handleSidebar="handleSidebar" :sidebar="sidebar" />
</template>

<style>
.logo img {
    filter: invert(1);
}
</style>