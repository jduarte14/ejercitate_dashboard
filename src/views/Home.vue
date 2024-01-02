<template>
    <section class="w-75 mx-auto">
        <SalesGraphic />
        <v-row>
            <Square title="23" subtitle="consumers" icon="octicon:people-16" color="white" backgroundColor="slate" />
            <Square title="5" subtitle="Instructors" icon="map:gym" color="white" backgroundColor="slate"/>
        </v-row> 

        <Rectangle title="Products" subtitle="onCatalog" color="white" :icons="['game-icons:gym-bag', 'healthicons:gym-outline','material-symbols:water-bottle-outline']" />
    </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import SalesGraphic from '@/components/home/salesGraphic.vue';
import Square from '@/components/home/Square.vue';
import Rectangle from '@/components/home/Rectangle.vue';
import { useGymStore } from '@/store/app';


</script>
