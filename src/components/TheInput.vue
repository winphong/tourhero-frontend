<template>
  <div>
    <div class="flex flex-col flex-wrap place-content-between md:min-h-[90px]">
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
        v-on:input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :value="modelValue"
      />
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  helperText?: string
  required?: boolean
  placeholder?: string
  modelValue: string
}>()
</script>
