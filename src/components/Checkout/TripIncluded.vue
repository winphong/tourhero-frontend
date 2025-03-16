<script setup lang="ts">
// Note: should be passed as props since included "features" might be different for each trip but hardcoded for the purpose of this assignment
const features = [
  'All accomodations',
  'All activities described in the itinerary',
  'Bilingual guides during activities',
  'Transportation between activities and acoomodation (except day 1 and day 5',
  'Day 2, 3, and 4 breakfast',
  'Day 2 and 4 lunch',
  'Excursion transfers',
  'Shared occupancy in accomodation',
  '24 / 7 guest support',
]
</script>

<template>
  <article class="border border-gray-200 rounded-sm">
    <div class="px-4 py-4 sm:p-6">
      <h1 class="text-2xl font-semibold text-navy">Included</h1>
      <li class="text-navy" v-for="feature in features" :key="feature">{{ feature }}</li>
    </div>
  </article>
</template>
