<script setup>
import Navigation from '@/components/Navigation.vue'
</script>
<template>
  <div class="container">
    <Navigation />
    <router-view />
  </div>
</template>
<style lang="scss">
.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px;

  @media screen and (max-width: 760px) {
    padding: 32px 16px;
  }
}
</style>