<template>
  <section id="solutions">
    <div class="container">
      <div class="section-header">
        <div class="section-tag reveal">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="currentColor" opacity=".4"/><circle cx="6" cy="6" r="2.5" fill="currentColor"/></svg>
          Our Verticals
        </div>
        <h2 class="section-title reveal delay-1">Built for the verticals <span class="gradient-text">we know best</span></h2>
        <p class="section-sub reveal delay-2">Deep expertise and tailored traffic strategies for the three industries where we drive the strongest results.</p>
      </div>

      <div class="solutions-grid">
        <div v-for="(s, i) in solutions" :key="s.title"
          class="solution-card glass-card reveal"
          :class="[`delay-${i + 1}`, { featured: s.featured }]">
          <div class="card-icon" :style="{ background: s.gradient }">
            <span v-html="s.icon"></span>
          </div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
          <ul class="card-points">
            <li v-for="pt in s.points" :key="pt">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" fill="rgba(20,184,106,0.15)"/>
                <path d="M4 7l2 2 4-4" stroke="#6FE39A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ pt }}
            </li>
          </ul>
          <div class="card-badge">{{ s.badge }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTilt } from '../composables/useTilt'

useTilt('.solution-card')

const solutions = [
  {
    title: 'Mobile App Promotion',
    desc: 'Drive high-quality installs and engaged users for your mobile apps across premium POP, PUSH and in-app inventory.',
    badge: 'Most Popular',
    featured: true,
    gradient: 'linear-gradient(135deg, rgba(20,184,106,0.25), rgba(20,184,106,0.05))',
    points: ['Quality installs at scale', 'Anti-fraud filtering', 'CPI & CPA models'],
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`
  },
  {
    title: 'VPN & Privacy Apps',
    desc: 'Reach privacy-conscious audiences with compliant, high-intent traffic tuned for VPN and security products.',
    badge: 'High Intent',
    featured: false,
    gradient: 'linear-gradient(135deg, rgba(155,229,100,0.22), rgba(155,229,100,0.05))',
    points: ['Privacy-aware targeting', 'Global GEO coverage', 'Subscription-ready funnels'],
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
  {
    title: 'E-Commerce',
    desc: 'Boost sales and customer acquisition with conversion-focused traffic for online stores and marketplaces.',
    badge: 'Best ROI',
    featured: false,
    gradient: 'linear-gradient(135deg, rgba(255,210,63,0.2), rgba(255,210,63,0.04))',
    points: ['CPS & CPA performance', 'Cart & checkout optimization', 'Retargeting-ready'],
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>`
  }
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
.solution-card.featured {
  border-color: rgba(20,184,106,0.35);
}

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

.card-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 22px;
  position: relative;
}
.card-points li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.card-badge {
  display: inline-block;
  align-self: flex-start;
  margin-top: auto;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: var(--gradient-subtle);
  border: 1px solid rgba(20,184,106,0.2);
  color: var(--purple-light);
  border-radius: 50px;
  padding: 4px 12px;
  position: relative;
}

@media (max-width: 900px) {
  .solutions-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
}
</style>
