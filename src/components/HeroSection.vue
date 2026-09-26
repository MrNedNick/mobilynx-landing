<template>
  <section class="hero" id="home" ref="heroEl">
    <div class="hero-bg">
      <div class="parallax" ref="parallaxEl">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
      <div class="particles">
        <span v-for="p in particles" :key="p.id" class="particle" :style="p.style"></span>
      </div>
      <div class="grid"></div>
    </div>

    <div class="container hero-content">
      <div class="hero-badge gradient-border reveal">
        <span class="badge-dot"></span>
        Advertising agency
      </div>

      <h1 class="hero-title reveal delay-1">
        <span class="gradient-text anim-gradient">\Mobilynx</span>
      </h1>

      <p class="hero-sub reveal delay-2">
        Mobilynx drives the most useful mobile apps and services to everyone. We help our clients
        reach high volumes of quality customers through mobile + desktop traffic.
      </p>

      <div class="hero-ctas reveal delay-3">
        <a href="#contact" class="btn-accent">
          Write to us
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="#2A1A00" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#traffic" class="btn-secondary">
          We sell traffic
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="scroll-hint reveal delay-6">
      <div class="scroll-wheel"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroEl = ref(null)
const parallaxEl = ref(null)

// Pre-generate floating particles with randomized positions/timing.
const particles = Array.from({ length: 16 }, (_, i) => {
  const size = 2 + Math.random() * 4
  return {
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${6 + Math.random() * 8}s`,
      animationDelay: `${-Math.random() * 8}s`,
      opacity: 0.15 + Math.random() * 0.4
    }
  }
})

let raf = null
const onMouse = (e) => {
  if (!parallaxEl.value) return
  const cx = window.innerWidth / 2
  const cy = window.innerHeight / 2
  const dx = (e.clientX - cx) / cx
  const dy = (e.clientY - cy) / cy
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    parallaxEl.value.style.transform = `translate(${dx * 24}px, ${dy * 24}px)`
  })
}

onMounted(() => {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('mousemove', onMouse, { passive: true })
  }
})
onUnmounted(() => {
  window.removeEventListener('mousemove', onMouse)
  cancelAnimationFrame(raf)
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 120px 0 80px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.parallax {
  position: absolute;
  inset: 0;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

.particles {
  position: absolute;
  inset: 0;
}
.particle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, #9BE564, #6FE39A);
  box-shadow: 0 0 8px rgba(155, 229, 100, 0.6);
  animation-name: drift;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  will-change: transform, opacity;
}

@keyframes drift {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-24px) translateX(10px); }
  50% { transform: translateY(-8px) translateX(-12px); }
  75% { transform: translateY(-30px) translateX(6px); }
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.25;
}
.orb-1 {
  width: 600px;
  height: 600px;
  background: var(--primary);
  top: -200px;
  left: -100px;
  animation: float1 10s ease-in-out infinite;
}
.orb-2 {
  width: 500px;
  height: 500px;
  background: var(--secondary);
  bottom: -150px;
  right: -80px;
  animation: float2 12s ease-in-out infinite;
}
.orb-3 {
  width: 300px;
  height: 300px;
  background: var(--accent);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float1 8s ease-in-out infinite reverse;
  opacity: 0.1;
}

.grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(20,184,106,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(20,184,106,0.07) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(20,184,106,0.12);
  border: 1px solid rgba(20,184,106,0.3);
  border-radius: 50px;
  padding: 8px 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--purple-light);
}
.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse-dot 2s ease-in-out infinite;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  max-width: 880px;
}

.anim-gradient {
  background-size: 200% auto;
  animation: gradient-shift 4s linear infinite;
  background-image: linear-gradient(135deg, #14B86A, #9BE564, #6FE39A, #14B86A);
  background-size: 200% 200%;
}

.hero-sub {
  font-size: 1.2rem;
  color: var(--text-muted);
  max-width: 640px;
  line-height: 1.75;
}

.hero-ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.scroll-wheel {
  width: 24px;
  height: 38px;
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  position: relative;
}
.scroll-wheel::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 8px;
  background: var(--gradient);
  border-radius: 2px;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-move 1.8s ease-in-out infinite;
}
@keyframes scroll-move {
  0%,100% { top: 6px; opacity: 1; }
  70% { top: 18px; opacity: 0; }
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.25rem; }
}
</style>
