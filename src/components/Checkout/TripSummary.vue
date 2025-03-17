<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import type { TripDto } from '@/services'
import { fetchTrip } from '@/services'
import { format } from 'date-fns'
import { MONTH_DAY, MONTH_DAY_YEAR } from '@/utils/dateformat'

const data = ref<TripDto | null>(null)
const isLoading = ref(true)

const startDate = computed(() => {
  return data.value?.Trip?.startDate ? format(new Date(data.value.Trip.startDate), MONTH_DAY) : ''
})

const endDate = computed(() => {
  return data.value?.Trip?.endDate ? format(new Date(data.value.Trip.endDate), MONTH_DAY_YEAR) : ''
})

const totalPrice = computed(() => {
  if (!data.value) {
    return ''
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: data.value.Trip.currency,
    currencyDisplay: 'code',
    maximumFractionDigits: 0,
  }).format(data.value.totalPriceInCents / 100)
})

onMounted(async () => {
  try {
    const response = await fetchTrip()
    data.value = response.data
  } catch (error) {
    console.error('Error fetching trip:', error)
  } finally {
    // Simulate slow API call
    setTimeout(() => {
      isLoading.value = false
    }, 400)
  }
})
</script>

<template>
  <article class="border border-gray-200 rounded-sm">
    <!-- Photo should have been dynamic and stored in database as URL reference -->
    <img class="rounded-t-sm" src="../../assets/images/bali.png" alt="bali.png" />
    <div class="px-4 py-4 sm:p-6">
      <h1 class="text-2xl font-semibold text-navy mb-6">Summary</h1>

      <!-- Loading state -->
      <div v-if="isLoading" class="animate-pulse">
        <div class="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div class="h-8 bg-gray-200 rounded w-full mb-4"></div>
        <div class="h-6 bg-gray-200 rounded w-1/2"></div>
      </div>

      <section v-if="!isLoading && data?.Trip">
        <p class="text-sm font-semibold text-gray mb-2 uppercase">
          1 country · {{ data.Trip.numOfDays }} days · {{ data.Trip.numOfNights }} nights
        </p>
        <p class="text-lg font-semibold text-navy mb-4">
          {{ data.Trip.description }}
        </p>
        <p class="text-sm font-semibold text-gray mb-2 uppercase">Travel Dates</p>
        <p class="text-lg text-navy">
          {{ startDate }} –
          {{ endDate }}
        </p>
      </section>

      <div class="border-t border-gray-200 my-4"></div>

      <section>
        <p class="text-sm font-semibold text-gray mb-2 uppercase">Current payment</p>
        <div v-if="isLoading" class="animate-pulse">
          <div class="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
        </div>
        <div v-if="!isLoading">
          <p class="text-4xl font-semibold text-navy">{{ totalPrice }}</p>
        </div>
      </section>
    </div>
  </article>
</template>
