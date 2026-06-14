<template>
  <section id="pricing">
    <div class="container">
      <div class="section-header">
        <div class="section-tag reveal">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="currentColor" opacity=".4"/><circle cx="6" cy="6" r="2.5" fill="currentColor"/></svg>
          Pricing
        </div>
        <h2 class="section-title reveal delay-1">Performance-based <span class="gradient-text">pricing models</span></h2>
        <p class="section-sub reveal delay-2">Pay for outcomes, not promises. Choose the model that aligns with your campaign goals.</p>
      </div>

      <div class="pricing-grid">
        <div v-for="(m, i) in models" :key="m.code"
          class="price-card glass-card reveal"
          :class="`delay-${i + 1}`">
          <div class="price-code">{{ m.code }}</div>
          <h3>{{ m.name }}</h3>
          <p>{{ m.desc }}</p>
          <div class="price-best">Best for: <span>{{ m.best }}</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTilt } from '../composables/useTilt'

useTilt('.price-card')

const models = [
  { code: 'CPA', name: 'Cost Per Action', desc: 'Pay only when users complete a defined action — a purchase, sign-up or other key event.', best: 'E-commerce & lead gen' },
  { code: 'CPI', name: 'Cost Per Install', desc: 'Pay for each verified app install, ideal for scaling mobile user acquisition predictably.', best: 'Mobile app promotion' },
  { code: 'CPL', name: 'Cost Per Lead', desc: 'Pay for qualified leads delivered, perfect for building high-intent subscriber bases.', best: 'VPN & subscriptions' },
  { code: 'CPS', name: 'Cost Per Sale', desc: 'Pay a share of each completed sale — fully aligned revenue-share performance pricing.', best: 'E-commerce & retail' }
]
</script>

<style scoped>
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.price-card {
  padding: 32px 28px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.price-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-subtle);
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: inherit;
}
.price-card:hover::before { opacity: 1; }

.price-code {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 14px;
  position: relative;
}

.price-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 10px;
  position: relative;
}
.price-card p {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 20px;
  position: relative;
}

.price-best {
  font-size: 0.8rem;
  color: var(--text-faint);
  margin-top: auto;
  position: relative;
}
.price-best span {
  color: var(--purple-light);
  font-weight: 600;
}

@media (max-width: 900px) {
  .pricing-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 520px) {
  .pricing-grid { grid-template-columns: 1fr; }
}
</style>
