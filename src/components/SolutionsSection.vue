<template>
  <section id="traffic">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title reveal">We sell <span class="gradient-text">traffic</span></h2>
      </div>

      <div class="solutions-grid">
        <div v-for="(s, i) in offers" :key="s.title"
          class="solution-card glass-card reveal"
          :class="`delay-${i + 1}`">
          <div class="card-icon">
            <img :src="s.icon" alt="" width="32" height="32">
          </div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTilt } from '../lib/vue/use-tilt'
import installs from '../assets/site/sell-installs.svg'
import soiDoi from '../assets/site/sell-soi-doi.svg'
import deposits from '../assets/site/sell-deposits.svg'

useTilt('.solution-card')

const offers = [
  { title: 'Installs, registrations, free trials', desc: 'for apps and browser extensions', icon: installs },
  { title: 'SOI/DOI', desc: 'for games', icon: soiDoi },
  { title: 'Deposits', desc: 'for online products', icon: deposits }
]
</script>

<style scoped>
.solutions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.solution-card {
  padding: 36px 32px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.solution-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-subtle);
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: inherit;
}
.solution-card:hover::before { opacity: 1; }
.card-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  color: var(--purple-light);
  border: 1px solid rgba(20,184,106,0.2);
  background: linear-gradient(135deg, rgba(20,184,106,0.25), rgba(20,184,106,0.05));
  position: relative;
}

.solution-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
  position: relative;
}

.solution-card p {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin-bottom: 20px;
  position: relative;
}

@media (max-width: 900px) {
  .solutions-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
}
</style>
