<script setup lang="ts">
import {Icon} from '@iconify/vue';
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
    },
    icons: {
        type: Array,
    },
    link: {
        type: String,
    },
    color: {
        type: String,
    },
    backgroundColor: {
        type: String,
    }
});
    const { title, subtitle, icons } = props;
</script>

<template>
    <v-row class="max-width">
        <v-col class="d-flex  flex-column  bg-slate mt-5 mx-5 rounded-lg px-10 py-10"
            :class="'text-' + color">
            <v-row class="d-flex align-center w-100" style="gap:20px;">
                <h2 class="text-h3 font-weight-bold">{{ title }}</h2>
                <v-row class="ml-auto" v-if="icons" id="icons">
                    <Icon  v-for="ic in icons" class="text-h3 mr-2" :icon="ic" :color="color" />
                </v-row>
            </v-row>
        </v-col>
    </v-row>
</template>

<style scoped>
    #icons {
        position:relative;
        display:Flex;
        justify-content: flex-end;
        padding-right:20px;
        gap:10px;
    }
    #icons :nth-child(2) {
        position:relative;
        bottom:10px;   
    }
 </style>
