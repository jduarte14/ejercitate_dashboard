<template>
  <v-app>
    <v-main>
      <Header />
      <router-view v-slot="{Component}">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<style>
:root {
  --slate: #0f172a;
  --bg-slate: #cbd5e1;
}

.fade-enter-active,
.fade-leave-active {
  opacity:1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition:0.3s ease;
}

.slate {
  color: var(--slate);
}

.v-main {
  background: var(--bg-slate);
}

.bg-slate {
  background: var(--slate);
}

.max-content {
  max-width: max-content;
  width: 100%;
}

.pointer {
  cursor: pointer;
}
</style>