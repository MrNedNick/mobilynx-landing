<template>
  <section id="sources" class="sources-section">
    <div class="sources-bg">
      <div class="s-orb-1"></div>
      <div class="s-orb-2"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <h2 class="section-title reveal">Our traffic <span class="gradient-text">sources</span></h2>
      </div>

      <div class="sources-grid">
        <div v-for="(s, i) in sources" :key="s.name"
          class="source-card glass-card reveal"
          :class="`delay-${i + 1}`">
          <div class="source-head">
            <div class="source-icon"><img :src="s.icon" alt="" width="28" height="28"></div>
            <h3 class="source-name">{{ s.name }}</h3>
          </div>
          <p>{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTilt } from '../lib/vue/use-tilt'
import pop from '../assets/site/source-pop.svg'
import push from '../assets/site/source-push.svg'
import inApp from '../assets/site/source-in-app.svg'

useTilt('.source-card')

const sources = [
  {
    name: 'POP',
    desc: 'Popunder ads provide massive reach at the lowest cost along with access to our exclusive inventory of publishers.',
    icon: pop
  },
  {
    name: 'PUSH',
    desc: 'Explore a unique advertising channel. Instantly deliver your brand’s message or offer directly to a user’s device, even when he is not browsing.',
    icon: push
  },
  {
    name: 'IN-APP',
    desc: 'In-app advertising is an effective strategy for app developers get new members to their mobile app.',
    icon: inApp
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
  margin: 0;
}

.source-card p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin-bottom: 22px;
}

@media (max-width: 900px) {
  .sources-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
}
</style>
