<template>
  <div class="flex flex-col place-content-between">
    <label class="text-gray font-semibold uppercase text-sm">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <p v-if="helperText" class="text-gray-500 text-sm">
      {{ helperText }}
    </p>
    <input
      type="text"
      :placeholder="placeholder"
      class="w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  fieldName: string
  helperText?: string
  required?: boolean
  placeholder?: string
}>()
</script>
