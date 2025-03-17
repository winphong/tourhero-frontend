<script setup lang="ts">
import { fetchAvailableAddons, type TripAddonsDto } from '@/services'
import { ref, onMounted, onUpdated } from 'vue'

const addOns = ref<TripAddonsDto[]>([])
const selectedAddons = ref<TripAddonsDto[]>([])
const isLoading = ref(true)

onMounted(async () => {
  try {
    const response = await fetchAvailableAddons()
    addOns.value = response.data
  } catch (error) {
    console.error('Error fetching available addons:', error)
  } finally {
    // Simulate slow API call
    setTimeout(() => {
      isLoading.value = false
    }, 600)
  }
})

onUpdated(() => {
  console.log('selectedAddOns', selectedAddons.value)
})
</script>

<template>
  <div class="border border-gray-200 p-4 sm:p-8 rounded-sm">
    <h1 class="font-semibold text-2xl mb-6">Available add-on</h1>

    <div v-if="isLoading">
      <!-- Skeleton Loader -->
      <div v-for="n in 3" :key="n" class="mb-4 flex items-start gap-3 animate-pulse">
        <div class="w-5 h-5 bg-gray-300 rounded"></div>
        <div>
          <div class="h-6 w-48 bg-gray-300 rounded mb-2"></div>
          <div class="h-5 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>

    <section v-if="!isLoading">
      <div v-for="addOn in addOns" :key="addOn.id" class="mb-4 flex items-start gap-3">
        <input
          type="checkbox"
          :id="addOn.id"
          :value="addOn.id"
          v-model="selectedAddons"
          class="w-5 h-5 border border-gray-400 rounded cursor-pointer"
        />
        <div>
          <label :for="addOn.id" class="cursor-pointer">
            <p class="text-md text-black font-medium">{{ addOn.name }}</p>
            <p class="text-lg text-navy font-semibold mt-1">
              Price: USD {{ addOn.priceInCents / 100 }}
            </p>
          </label>
        </div>
      </div>
    </section>

    <!-- Fallback UI if addons fetch fails -->
  </div>
</template>
