<script setup lang="ts">
import TheInput from '../TheInput.vue'
</script>

<template>
  <article class="border border-gray-200 p-4 sm:p-8 rounded-sm">
    <h1 class="font-semibold text-2xl mb-6">Guest Details</h1>
    <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <TheInput
        field-name="FirstName"
        :required="true"
        label="Name"
        placeholder="Enter your name"
        helper-text="(as per travel document)"
      />
      <TheInput
        field-name="LastName"
        :required="true"
        label="Last Name"
        placeholder="Enter your last name"
        helper-text="(as per travel document)"
      />
      <TheInput field-name="EMAIL" :required="true" label="EMAIL" placeholder="Enter your email" />
    </section>
  </article>
</template>
