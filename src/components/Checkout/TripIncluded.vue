<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import TripIncludedIcon from '../icons/TripIncludedIcon.vue'
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
      <div class="flex flex-row items-center gap-2 mb-4">
        <TripIncludedIcon />
        <h1 class="text-2xl font-semibold text-navy">Included</h1>
      </div>
      <div class="flex flex-row items-center gap-2" v-for="feature in features" :key="feature">
        <FontAwesomeIcon class="text-teal" :icon="faCircleCheck" />
        <p class="text-navy">{{ feature }}</p>
      </div>
    </div>
  </article>
</template>
