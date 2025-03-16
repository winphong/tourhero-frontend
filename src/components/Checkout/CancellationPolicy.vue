<script setup lang="ts">
// Note: should be passed as props since cancellation policy might be different for each trip but hardcoded for the purpose of this assignment
const cancellationPolicies = [
  {
    title: 'Refunds for deposits',
    description:
      'If you cancel your trip after placing a deposit but before your card on file is charged for the full payment, you can request a full refund of your deposit up to 30 days before the tour departure.',
  },
  {
    title: 'Refunds for fully-paid trips',
    description:
      'If you cancel your trip after making the full payment, you may change or cancel your trip up to 30 days before the tour departure for a refund.',
  },
]
</script>

<template>
  <article class="border border-gray-200 rounded-sm">
    <div class="px-4 py-4 sm:p-6">
      <h1 class="text-2xl font-semibold text-navy mb-4">Cancellation policy</h1>
      <section>
        <div class="mb-6" v-for="policy in cancellationPolicies" :key="policy.title">
          <p class="text-md font-semibold text-navy">{{ policy.title }}</p>
          <p class="text-sm text-navy mb-2">{{ policy.description }}</p>
        </div>
      </section>
    </div>
  </article>
</template>
