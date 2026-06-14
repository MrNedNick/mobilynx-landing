<template>
  <main>
    <HeroSection />
    <MarqueeStrip />
    <SolutionsSection />
    <TrafficSources />
    <TargetingSection />
    <PricingModels />
    <ContactUs />
  </main>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import MarqueeStrip from '../components/MarqueeStrip.vue'
import SolutionsSection from '../components/SolutionsSection.vue'
import TrafficSources from '../components/TrafficSources.vue'
import TargetingSection from '../components/TargetingSection.vue'
import PricingModels from '../components/PricingModels.vue'
import ContactUs from '../components/ContactUs.vue'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()
</script>
