<template>
  <div>
    <p class="font-bold">{{ props.toggleLabel }}</p>
    <div
      class="
        flex
        text-sm
        font-medium
        text-center
        sm:text-base
        text-blue-gray-600
        w-72
        sm:w-80
      "
    >
      <div
        class="
          flex-1
          px-2
          py-1
          transition
          duration-200
          border-t-2 border-b-2 border-l-2
          rounded-l-lg
          cursor-pointer
        "
        :class="[
          props.toggleState
            ? 'bg-green-50 border-green-700 border-r-2'
            : 'border-blue-gray-400',
        ]"
        @click="updateToggle(true)"
      >
        <p
          :class="{
            'text-green-700 font-semibold': props.toggleState,
          }"
        >
          {{ props.defaultValue }}
        </p>
      </div>
      <div
        class="
          flex-1
          px-2
          py-1
          transition
          duration-200
          border-t-2 border-b-2 border-r-2
          rounded-r-lg
          cursor-pointer
        "
        :class="[
          props.toggleState
            ? 'border-blue-gray-400'
            : 'bg-green-50 border-green-700 border-l-2',
        ]"
        @click="updateToggle(false)"
      >
        <p
          :class="{
            'text-green-700 font-semibold': !props.toggleState,
          }"
        >
          {{ props.otherValue }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  toggleState: {
    type: Boolean,
    required: true,
  },
  toggleLabel: {
    type: String,
    required: true,
  },
  defaultValue: {
    type: String,
    required: true,
  },
  otherValue: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["update:toggleState"]);

const updateToggle = (updatedToggle) =>
  emits("update:toggleState", updatedToggle);
</script>
