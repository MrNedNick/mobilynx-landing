<template>
  <footer class="footer">
    <div class="container footer-inner">
      <router-link to="/" class="logo">
        <div class="logo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 19V6l8 9 8-9v13" stroke="#04190F" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span class="gradient-text">Mobilynx</span>
      </router-link>
      <span class="footer-copy">© 2026 Mobilynx. All rights reserved.</span>
      <router-link to="/privacy" class="footer-link">Privacy policy</router-link>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--card-border);
  background: rgba(255,255,255,0.02);
  padding: 36px 0;
}
.footer-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  font-size: 0.875rem;
  color: var(--text-muted);
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.15rem;
  text-decoration: none;
}
.logo-icon {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-copy { margin-left: auto; }
.footer-link { color: var(--text-muted); transition: color 0.2s; }
.footer-link:hover { color: var(--text); }
@media (max-width: 600px) {
  .footer-inner { flex-direction: column; align-items: flex-start; gap: 12px; }
  .footer-copy { margin-left: 0; }
}
</style>
