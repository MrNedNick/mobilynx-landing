<template>
  <section id="sources" class="sources-section">
    <div class="sources-bg">
      <div class="s-orb-1"></div>
      <div class="s-orb-2"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <div class="section-tag reveal">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="currentColor" opacity=".4"/><circle cx="6" cy="6" r="2.5" fill="currentColor"/></svg>
          Traffic Channels
        </div>
        <h2 class="section-title reveal delay-1">Three powerful <span class="gradient-text">traffic channels</span></h2>
        <p class="section-sub reveal delay-2">Reach your audience wherever they are, with formats engineered for performance and scale.</p>
      </div>

      <div class="sources-grid">
        <div v-for="(s, i) in sources" :key="s.name"
          class="source-card glass-card reveal"
          :class="`delay-${i + 1}`">
          <div class="source-head">
            <div class="source-icon"><span v-html="s.icon"></span></div>
            <span class="source-name">{{ s.name }}</span>
          </div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
          <div class="source-meta">
            <span v-for="m in s.meta" :key="m" class="meta-chip">{{ m }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTilt } from '../composables/useTilt'

useTilt('.source-card')

const sources = [
  {
    name: 'POP',
    title: 'Popunder Traffic',
    desc: 'High-volume popunder placements that capture attention and deliver massive reach at competitive rates.',
    meta: ['High volume', 'All GEOs', 'Instant scale'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M7 21h10M9 17v4M15 17v4"/></svg>`
  },
  {
    name: 'PUSH',
    title: 'Push Notifications',
    desc: 'Engaging push notification ads delivered to opted-in users for high click-through and re-engagement.',
    meta: ['Opt-in base', 'High CTR', 'Real-time'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>`
  },
  {
    name: 'IN-APP',
    title: 'In-App Inventory',
    desc: 'Native in-app placements across premium mobile applications for contextual, high-intent reach.',
    meta: ['Premium apps', 'Native fit', 'Brand-safe'],
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 6h6M9 10h6M9 14h3"/></svg>`
  }
]
</script>

<style scoped>
.sources-section { position: relative; overflow: hidden; }
.sources-bg { position: absolute; inset: 0; pointer-events: none; }
.s-orb-1 {
  position: absolute;
  width: 460px; height: 460px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(20,184,106,0.12) 0%, transparent 70%);
  top: -80px; right: -120px;
}
.s-orb-2 {
  position: absolute;
  width: 380px; height: 380px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(155,229,100,0.1) 0%, transparent 70%);
  bottom: -60px; left: -100px;
}

.sources-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  position: relative;
}

.source-card {
  padding: 32px;
  display: flex;
  flex-direction: column;
}

.source-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}
.source-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--gradient-subtle);
  border: 1px solid rgba(20,184,106,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple-light);
  flex-shrink: 0;
}
.source-name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.source-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.source-card p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin-bottom: 22px;
}

.source-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}
.meta-chip {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--card-border);
  border-radius: 50px;
  padding: 4px 12px;
}

@media (max-width: 900px) {
  .sources-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
}
</style>
