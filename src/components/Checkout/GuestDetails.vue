<script setup lang="ts">
import TheInput from '../TheInput.vue'
import { ErrorMessage, Field } from 'vee-validate'
</script>

<template>
  <article class="border border-gray-200 p-4 sm:p-8 rounded-sm">
    <h1 class="font-semibold text-2xl mb-6">Guest Details</h1>
    <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Field name="firstName" type="text" v-slot="{ field }">
        <TheInput
          v-bind="field"
          v-model="field.value"
          :required="true"
          label="Name"
          placeholder="Enter your name"
          helper-text="(as per travel document)"
        >
          <ErrorMessage class="form-error-text" name="firstName" />
        </TheInput>
      </Field>

      <Field name="lastName" type="text" v-slot="{ field }">
        <TheInput
          v-bind="field"
          v-model="field.value"
          :required="true"
          label="Last Name"
          placeholder="Enter your last name"
          helper-text="(as per travel document)"
        >
          <ErrorMessage class="form-error-text" name="lastName" />
        </TheInput>
      </Field>
      <Field name="email" type="text" v-slot="{ field }">
        <TheInput
          v-bind="field"
          v-model="field.value"
          :required="true"
          label="EMAIL"
          placeholder="Enter your email"
        >
          <ErrorMessage class="form-error-text" name="email" />
        </TheInput>
      </Field>
    </section>
  </article>
</template>
