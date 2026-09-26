<template>
  <main class="legal">
    <div class="legal-hero">
      <div class="legal-orb legal-orb-1"></div>
      <div class="legal-orb legal-orb-2"></div>
      <div class="container">
        <nav class="breadcrumb">
          <router-link to="/">← go back</router-link>
        </nav>
        <h1 class="legal-title gradient-text">{{ title }}</h1>
      </div>
    </div>

    <div class="container legal-body-wrap">
      <article class="legal-content glass-card">
        <slot />
      </article>
    </div>
  </main>
</template>

<script setup>
defineProps({
  title: { type: String, required: true }
})
</script>

<style scoped>
.legal { padding-top: 88px; }

.legal-hero {
  position: relative;
  overflow: hidden;
  padding: 72px 0 56px;
  border-bottom: 1px solid var(--card-border);
}
.legal-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
}
.legal-orb-1 { width: 420px; height: 420px; background: var(--primary); opacity: 0.18; top: -160px; left: -100px; }
.legal-orb-2 { width: 360px; height: 360px; background: var(--secondary); opacity: 0.14; top: -120px; right: -80px; }

.breadcrumb {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--text-faint);
  margin-bottom: 24px;
}
.breadcrumb a { color: var(--text-muted); text-decoration: none; transition: color 0.2s; }
.breadcrumb a:hover { color: var(--purple-light); }
.breadcrumb .current { color: var(--text-muted); }

.legal-title {
  position: relative;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 14px;
}
.legal-body-wrap {
  display: grid;
  max-width: 880px;
  padding-top: 64px;
  padding-bottom: 96px;
  align-items: start;
}

.legal-content {
  padding: 48px;
}

@media (max-width: 900px) {
  .legal-content { padding: 32px 24px; }
}
</style>
