<template>
  <the-header />
  <app-hr />
  <main>
    <app-form />
  </main>
  <app-hr />
  <the-footer />
</template>

<script setup>
import AppForm from "@/components/AppForm.vue";
import AppHr from "@/components/AppHr.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
