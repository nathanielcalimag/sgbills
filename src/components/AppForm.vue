<template>
  <section class="container px-3 py-8 mx-auto">
    <h2 class="mb-3 text-xl font-bold text-blue-gray-800">Bill per pax</h2>
    <div class="flex flex-col gap-4 mb-8 md:flex-row">
      <app-toggle
        v-model:toggleState="isGST"
        toggleLabel="GST"
        defaultValue="GST"
        otherValue="No GST"
      />
      <app-toggle
        v-model:toggleState="isSC"
        toggleLabel="Service Charge"
        defaultValue="Service Charge"
        otherValue="No Service Charge"
      />
    </div>
    <div class="flex gap-4">
      <app-number
        v-model:numInput="totalBill"
        class="mb-4"
        label="Total Bill (in SGD)"
        placeholder="e.g. 12.00"
        :validator="validTotalBill"
        errorMessage="error"
        :defaultInput="0"
      />
      <app-number
        v-model:numInput="numPax"
        class="mb-6"
        label="Number of people"
        placeholder="e.g. 5"
        :validator="validNumPax"
        errorMessage="error"
        :defaultInput="1"
      />
    </div>
    <p
      class="mb-6 font-bold text-red-600"
      :class="{ hidden: validNumPax && validTotalBill }"
    >
      {{ errorMessage }}
    </p>
    <div
      class="
        flex
        items-center
        p-4
        rounded-lg
        shadow-lg
        bg-blue-gray-100
        w-60
        bg-gradient-to-r
        from-green-200
        to-lime-200
      "
    >
      <p class="font-medium">Price per Pax:&nbsp;&nbsp;</p>
      <p class="text-xl font-semibold text-blue-gray-800">
        <span class="text-base font-bold">$</span>{{ billPerPax }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

import AppToggle from "@/components/AppFormToggle.vue";
import AppNumber from "@/components/AppFormNumber.vue";

const isGST = ref(true);
const isSC = ref(true);

const totalBill = ref(0);
const numPax = ref(1);

const validNumPax = computed(
  () =>
    +numPax.value > 0 && +numPax.value <= 5 && Number.isInteger(+numPax.value)
);
const validTotalBill = computed(() => totalBill.value >= 0);

const errorMessage = computed(() => {
  let msg = "Error: ";
  if (!validNumPax.value)
    msg += " Number of people should be an integer between 1 to 5.";
  if (!validTotalBill.value) msg += " Total Bill should be positive.";
  return msg;
});

const billPerPax = computed(() => {
  let multiplier = 1;
  if (isGST.value) multiplier *= 1.07;
  if (isSC.value) multiplier *= 1.1;
  return Number.parseFloat(
    (totalBill.value * multiplier) / numPax.value
  ).toFixed(2);
});
</script>
