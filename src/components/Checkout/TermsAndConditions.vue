<script setup lang="ts">
import { ref } from 'vue'

const isChecked = ref(false)
</script>

<template>
  <div class="flex flex-col items-end gap-4">
    <div class="flex items-start gap-2">
      <input
        id="terms"
        v-model="isChecked"
        type="checkbox"
        class="w-5 h-5 border border-gray-400 rounded cursor-pointer"
      />
      <label for="terms" class="text-md">
        I have read and agree to TourHero's
        <a href="#" class="text-blue-600 underline">Terms of Use</a>,
        <a href="#" class="text-blue-600 underline">Privacy Policy</a>, Cancellation Policy, and
        Payment Plan. I also agree to
        <a href="#" class="text-blue-600 underline">VAOVA Travel's Terms of Use.</a>
        <span class="text-red-500 font-semibold">*</span>
      </label>
    </div>

    <button
      :disabled="!isChecked"
      class="px-6 py-3 text-white font-semibold rounded-md flex gap-2 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed bg-maroon hover:bg-red-700"
    >
      Confirm and pay
      <span class="text-white">🔒</span>
    </button>
  </div>
</template>
