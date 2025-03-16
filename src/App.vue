<script setup lang="ts">
import LayoutFooter from './components/Layout/LayoutFooter.vue'
import LayoutHeader from './components/Layout/LayoutHeader.vue'
import CheckoutPage from './pages/CheckoutPage.vue'
</script>

<template>
  <LayoutHeader />
  <main class="px-4 sm:px-8">
    <CheckoutPage />
  </main>
  <LayoutFooter />
</template>
