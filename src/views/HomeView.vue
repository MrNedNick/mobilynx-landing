<template>
  <main>
    <HeroSection />
    <SolutionsSection />
    <TrafficSources />
    <TargetingSection />
    <ContactUs />
  </main>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import SolutionsSection from '../components/SolutionsSection.vue'
import TrafficSources from '../components/TrafficSources.vue'
import TargetingSection from '../components/TargetingSection.vue'
import ContactUs from '../components/ContactUs.vue'
import { useScrollReveal } from '../lib/vue/use-scroll-reveal'

useScrollReveal()
</script>
