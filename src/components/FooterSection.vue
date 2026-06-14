<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container footer-grid">
        <div class="footer-brand">
          <router-link to="/" class="logo">
            <div class="logo-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 19V6l8 9 8-9v13" stroke="#04190F" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="gradient-text">Mobilynx</span>
          </router-link>
          <p>Performance-driven traffic for mobile app promotion, VPN &amp; privacy apps, and e-commerce — POP, PUSH &amp; IN-APP across 20+ GEOs.</p>
          <a href="mailto:sales@mobilynx.io" class="footer-email">sales@mobilynx.io</a>
        </div>

        <div class="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><a href="#" @click.prevent="goSection('solutions')">Solutions</a></li>
            <li><a href="#" @click.prevent="goSection('sources')">Traffic Sources</a></li>
            <li><a href="#" @click.prevent="goSection('targeting')">Targeting</a></li>
            <li><a href="#" @click.prevent="goSection('pricing')">Pricing Models</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#" @click.prevent="goSection('contact')">Contact</a></li>
            <li><a href="mailto:sales@mobilynx.io">Partnerships</a></li>
            <li><a href="mailto:sales@mobilynx.io">Become an Advertiser</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><router-link to="/privacy">Privacy Policy</router-link></li>
            <li><router-link to="/terms">Terms of Service</router-link></li>
            <li><router-link to="/cookies">Cookie Policy</router-link></li>
            <li><router-link to="/gdpr">GDPR</router-link></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <span>© 2026 Mobilynx. All rights reserved.</span>
        <span class="footer-made">Performance traffic · Built for scale</span>
        <div class="footer-partners">
          <span>Channels:</span>
          <span class="partner-tag">POP</span>
          <span class="partner-tag">PUSH</span>
          <span class="partner-tag">IN-APP</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const goSection = async (id) => {
  if (route.path !== '/') {
    await router.push({ path: '/', hash: `#${id}` })
    return
  }
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--card-border);
  background: rgba(255,255,255,0.02);
}

.footer-top { padding: 72px 0 48px; }

.footer-grid {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr 1fr;
  gap: 48px;
}

.footer-brand .logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  margin-bottom: 16px;
}
.logo-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo span {
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.footer-brand p {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.65;
  max-width: 300px;
  margin-bottom: 16px;
}
.footer-email {
  display: inline-block;
  font-size: 0.9rem;
  color: var(--purple-light);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.footer-email:hover { color: var(--secondary); }

.footer-col h4 {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 20px;
}
.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.footer-col ul a {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-col ul a:hover { color: var(--text); }

.footer-bottom {
  border-top: 1px solid var(--card-border);
  padding: 20px 0;
}
.footer-bottom-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  font-size: 0.8rem;
  color: var(--text-faint);
}
.footer-made { margin-left: auto; }
.footer-partners { display: flex; align-items: center; gap: 8px; }
.partner-tag {
  background: var(--gradient-subtle);
  border: 1px solid rgba(20,184,106,0.15);
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--purple-light);
}

@media (max-width: 900px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .footer-brand { grid-column: 1 / -1; }
  .footer-made { margin-left: 0; }
}
@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom-inner { flex-direction: column; align-items: flex-start; gap: 12px; }
}
</style>
