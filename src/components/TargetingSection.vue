<template>
  <section id="targeting" class="targeting-section">
    <div class="container targeting-grid">
      <div class="targeting-copy reveal-left">
        <div class="section-tag">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="currentColor" opacity=".4"/><circle cx="6" cy="6" r="2.5" fill="currentColor"/></svg>
          Why Mobilynx
        </div>
        <h2 class="targeting-title">Pinpoint targeting,<br><span class="gradient-text">optimized every second.</span></h2>
        <p class="targeting-sub">
          Our platform continuously analyzes performance and reallocates spend in real time,
          so your campaigns always run where they convert best.
        </p>

        <ul class="feature-list">
          <li v-for="f in features" :key="f.title">
            <div class="feature-icon"><span v-html="f.icon"></span></div>
            <div>
              <strong>{{ f.title }}</strong>
              <p>{{ f.desc }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="targeting-visual reveal-right delay-2">
        <div class="visual-card glass-card">
          <div class="visual-orb"></div>
          <div class="visual-stat" v-for="v in vstats" :key="v.label">
            <div class="vstat-top">
              <span class="vstat-label">{{ v.label }}</span>
              <span class="vstat-val gradient-text">{{ v.value }}</span>
            </div>
            <div class="vstat-bar"><span :style="{ width: v.pct }"></span></div>
          </div>
          <div class="visual-foot">
            <span class="live-dot"></span>
            Optimizing in real time
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Granular GEO & device targeting',
    desc: 'Reach the right users by country, OS, device, carrier and connection type across 20+ GEOs.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z"/></svg>`
  },
  {
    title: 'Real-time optimization',
    desc: 'Automated bidding and traffic shaping that adapts to performance every second of every campaign.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg>`
  },
  {
    title: 'Anti-fraud protection',
    desc: 'Multi-layer filtering removes bots and invalid traffic so you only pay for real, quality users.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`
  }
]

const vstats = [
  { label: 'Fill rate', value: '99%', pct: '99%' },
  { label: 'Avg. CTR uplift', value: '+38%', pct: '78%' },
  { label: 'Fraud blocked', value: '99.4%', pct: '94%' }
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

.visual-stat { position: relative; }
.vstat-top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 10px;
}
.vstat-label { font-size: 0.9rem; color: var(--text-muted); }
.vstat-val {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}
.vstat-bar {
  height: 8px;
  border-radius: 50px;
  background: rgba(255,255,255,0.06);
  overflow: hidden;
}
.vstat-bar span {
  display: block;
  height: 100%;
  border-radius: 50px;
  background: var(--gradient);
}

.visual-foot {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--purple-light);
  position: relative;
}
.live-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse-dot 1.8s ease-in-out infinite;
}

@media (max-width: 900px) {
  .targeting-grid { grid-template-columns: 1fr; gap: 40px; }
}
</style>
