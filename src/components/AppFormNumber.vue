<template>
  <label class="block">
    <p class="mb-1 font-bold">
      {{ props.label }}
    </p>
    <input
      type="email"
      class="
        mt-0
        block
        w-full
        px-0.5
        border-0 border-b-2 border-gray-200
        focus:ring-0 focus:border-black
      "
      :placeholder="props.placeholder"
      v-model="numInput"
      @input="updateInput(+$event.target.value)"
    />
  </label>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  defaultInput: {
    type: Number,
    required: true,
  },
});

const numInput = ref(props.defaultInput);

const emits = defineEmits(["update:numInput"]);

const updateInput = (updatedInput) => emits("update:numInput", updatedInput);
</script>
