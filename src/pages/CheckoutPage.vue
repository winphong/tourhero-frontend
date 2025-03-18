<script setup lang="ts">
import * as yup from 'yup'
import { Form } from 'vee-validate'
import { ref } from 'vue'

import CancellationPolicy from '@/components/Checkout/CancellationPolicy.vue'
import TripIncluded from '@/components/Checkout/TripIncluded.vue'
import GuestDetails from '@/components/Checkout/GuestDetails.vue'
import TripSummary from '@/components/Checkout/TripSummary.vue'
import AddOns from '@/components/Checkout/AddOns.vue'
import TermsAndConditions from '@/components/Checkout/TermsAndConditions.vue'
import { checkout, type TripAddonsDto } from '@/services'

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().min(3).required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
})

const tripId = ref<string | null>(null)
const userId = ref<string | null>(null)
const selectedAddons = ref<TripAddonsDto[]>([])

const onSubmit = async (values: Record<string, string>) => {
  try {
    await checkout({
      ...values,
      addOnIds: selectedAddons.value.map((addOn) => addOn.id),
      tripId: tripId.value,
      userId: userId.value,
    })
    alert('Checked out successfully!')

    // Note: Hack to trigger a reload, shouldn't perform a full page reload
    window.location.reload()
  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <article class="pt-10 md:pt-20 sm:px-10 lg:px-20 xl:px-30">
    <h1 class="text-2xl font-semibold text-navy mb-4">Checkout</h1>
    <Form
      :validation-schema="schema"
      @submit="onSubmit"
      :initial-values="{ firstName: '', lastName: '', email: '' }"
    >
      <div class="grid grid-cols-1 sm:grid-cols-10 gap-4">
        <div class="col-span-1 sm:col-span-7 flex-col-4">
          <GuestDetails />
          <AddOns v-model="selectedAddons" />
          <div class="hidden sm:block">
            <TermsAndConditions />
          </div>
        </div>
        <div class="col-span-1 sm:col-span-3 flex-col-4">
          <TripSummary
            v-model:tripId="tripId"
            v-model:userId="userId"
            :selectedAddOns="selectedAddons"
          />
          <TripIncluded />
          <CancellationPolicy />
          <div class="block sm:hidden">
            <TermsAndConditions />
          </div>
        </div>
      </div>
    </Form>
  </article>
</template>
