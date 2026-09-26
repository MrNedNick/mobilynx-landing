<template>
  <LegalLayout title="Privacy Policy">
    <template v-for="(section, i) in privacy" :key="i">
      <h2 v-if="section.heading">{{ section.heading }}</h2>
      <p v-for="(paragraph, j) in section.paragraphs" :key="j">{{ paragraph }}</p>
    </template>
  </LegalLayout>
</template>

<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import { privacy } from '../content/privacy'
</script>
