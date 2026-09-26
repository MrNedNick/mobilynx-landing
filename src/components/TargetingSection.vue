<template>
  <section id="trust" class="targeting-section">
    <div class="container targeting-grid">
      <div class="targeting-copy reveal-left">
        <h2 class="targeting-title">Traffic you can <span class="gradient-text">trust</span></h2>
        <p class="targeting-sub">
          Long-term partnerships are built on trust and mutual understanding. That is why in Mobilynx
          you will receive exceptionally high quality and verified traffic. Your positive result,
          loyalty and income are our priority. Acquiring new quality leads tailored to your business
          without wasting your marketing budget - that’s easy.
        </p>

        <ul class="feature-list">
          <li v-for="f in features" :key="f.title">
            <div class="feature-icon"><img :src="f.icon" alt="" width="22" height="22"></div>
            <div>
              <strong>{{ f.title }}</strong>
              <p>{{ f.desc }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div id="geos" class="targeting-visual reveal-right delay-2">
        <div class="visual-card glass-card">
          <div class="visual-orb"></div>
          <h2 class="geos-title">Top traffic geos</h2>
          <img class="geos-flags" :src="flags" width="748" height="56"
            :alt="`Flags: ${geos.join(', ')}`">
          <ul class="geos-list">
            <li v-for="g in geos" :key="g">{{ g }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import flags from '../assets/site/top-geos.svg'
import targeting from '../assets/site/feature-targeting.svg'
import optimization from '../assets/site/feature-optimization.svg'
import support from '../assets/site/feature-support.svg'
import pricing from '../assets/site/feature-pricing.svg'

const features = [
  {
    title: 'Advanced targeting',
    desc: 'We offer the latest in targeting capabilities to reach the right audience: country, language, browser, OS, device, carrier.',
    icon: targeting
  },
  {
    title: 'Optimization',
    desc: 'Algorithimic and manual real time campaign optimization.',
    icon: optimization
  },
  {
    title: 'Support & feedback',
    desc: 'We will take care of your needs.',
    icon: support
  },
  {
    title: 'Pricing models',
    desc: 'Mobilynx supports several pricing models all based on performance: CPA, CPI, CPL and CPS.',
    icon: pricing
  }
]

// The flags shown on the live site, left to right.
const geos = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Japan', 'India',
  'Qatar', 'Saudi Arabia', 'United Arab Emirates', 'France', 'Germany'
]
</script>

<style scoped>
.targeting-section { position: relative; overflow: hidden; }

.targeting-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 56px;
  align-items: center;
}

.targeting-title {
  font-size: clamp(2rem, 4.4vw, 3.1rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin-bottom: 18px;
}
.targeting-sub {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.75;
  max-width: 520px;
  margin-bottom: 36px;
}

.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.feature-list li {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.feature-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--gradient-subtle);
  border: 1px solid rgba(20,184,106,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--purple-light);
  flex-shrink: 0;
}
.feature-list strong {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.feature-list p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.targeting-visual { position: relative; }
.visual-card {
  padding: 36px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 26px;
}
.visual-orb {
  position: absolute;
  width: 280px; height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(20,184,106,0.25), transparent 70%);
  top: -100px; right: -80px;
  filter: blur(40px);
  pointer-events: none;
}

.geos-title {
  position: relative;
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 22px;
}
.geos-flags {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
}
.geos-list {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
}
.geos-list li {
  font-size: 0.78rem;
  color: var(--text-muted);
  padding: 5px 10px;
  border: 1px solid var(--border, rgba(255,255,255,0.1));
  border-radius: 999px;
}

@media (max-width: 900px) {
  .targeting-grid { grid-template-columns: 1fr; gap: 40px; }
}
</style>
