<script setup lang="ts">
import CancellationPolicy from '@/components/Checkout/CancellationPolicy.vue'
import TripIncluded from '@/components/Checkout/TripIncluded.vue'
import GuestDetails from '@/components/Checkout/GuestDetails.vue'
import TripSummary from '@/components/Checkout/TripSummary.vue'
import AddOns from '@/components/Checkout/AddOns.vue'
import TermsAndConditions from '@/components/Checkout/TermsAndConditions.vue'
</script>

<template>
  <article class="pt-10 md:pt-20 sm:px-10 lg:px-20 xl:px-30">
    <h1 class="text-2xl font-semibold text-navy mb-4">Checkout</h1>
    <div class="grid grid-cols-1 sm:grid-cols-10 gap-4">
      <div class="col-span-1 sm:col-span-7 flex-col-4">
        <GuestDetails />
        <AddOns />
        <div class="hidden sm:block"><TermsAndConditions /></div>
      </div>
      <div class="col-span-1 sm:col-span-3 flex-col-4">
        <TripSummary />
        <TripIncluded />
        <CancellationPolicy />
        <div class="block sm:hidden"><TermsAndConditions /></div>
      </div>
    </div>
  </article>
</template>
