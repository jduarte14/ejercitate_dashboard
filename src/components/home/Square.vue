<script setup lang="ts">
import { Icon } from '@iconify/vue';
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
const { title, subtitle, icon } = props;
</script>

<template>
    <v-col class="d-flex align-center flex-column  justify-center mt-10 mx-5 rounded-lg"
        :class="`bg-${backgroundColor} text-${color}`">
        <v-row class="my-5">
            <Icon v-if="icon" class="text-h3 mr-2" :icon="icon" :color="color" />
            <h2 class="text-h3 font-weight-bold">{{ title }}</h2>
        </v-row>
        <p class="text-h6 text-capitalize">{{ subtitle }}</p>
    </v-col>
</template>

<style></style>
