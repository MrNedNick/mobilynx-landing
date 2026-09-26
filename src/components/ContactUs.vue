<template>
  <section id="contact" class="contact-section">
    <div class="contact-bg">
      <div class="c-orb-1"></div>
      <div class="c-orb-2"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <h2 class="section-title reveal">Any <span class="gradient-text">questions?</span></h2>
        <p class="section-sub reveal delay-1">We are ready to answer!</p>
      </div>

      <div class="contact-grid">
        <div class="contact-info reveal-left delay-2">
          <div class="info-item glass-card">
            <div class="info-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#ig1)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="ig1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#14B86A"/><stop offset="100%" stop-color="#9BE564"/></linearGradient></defs><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <p class="info-text">
              If you are an app owner and looking for traffic, please contact us at
              <a :href="`mailto:${APP_OWNERS}`">{{ APP_OWNERS }}</a>
            </p>
          </div>
        </div>

        <div class="contact-form-wrap glass-card reveal-right delay-2">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="contact-name">Name</label>
                <input id="contact-name" v-model="form.name" type="text" name="name" placeholder="Your name" autocomplete="name" />
              </div>
              <div class="form-group">
                <label for="contact-email">Email</label>
                <input id="contact-email" v-model="form.email" type="email" name="email" placeholder="Your e-mail" autocomplete="email" />
              </div>
            </div>

            <div class="form-group">
              <label for="contact-message">Message</label>
              <textarea id="contact-message" v-model="form.message" name="message" rows="5" placeholder="Your message"></textarea>
            </div>

            <button type="submit" class="btn-primary submit-btn">
              Write to us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 2L1 8.5l4 1.5 2 4 2-4 5-8z" stroke="#04190F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <p v-if="opened" class="form-note" role="status">
              Your email app should open with this message to {{ EMAIL }}. If it does not,
              write to that address directly.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { mailtoLink } from '../lib/contact'

// The live site sends app owners to hanna@; general enquiries go to sales@,
// the address the site owner chose for this landing.
const APP_OWNERS = 'hanna@mobilynx.io'
const EMAIL = 'sales@mobilynx.io'
const form = ref({ name: '', email: '', message: '' })
const opened = ref(false)

// The site has no backend: the message is handed to the visitor's email app,
// addressed to the sales inbox.
const handleSubmit = () => {
  window.location.href = mailtoLink(EMAIL, form.value)
  opened.value = true
}
</script>

<style scoped>
.contact-section { position: relative; overflow: hidden; }
.contact-bg { position: absolute; inset: 0; pointer-events: none; }
.c-orb-1 {
  position: absolute;
  width: 500px; height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(20,184,106,0.12) 0%, transparent 70%);
  top: -100px; left: -100px;
}
.c-orb-2 {
  position: absolute;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(155,229,100,0.1) 0%, transparent 70%);
  bottom: -50px; right: -50px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 32px;
  align-items: start;
  position: relative;
}

.contact-info { display: flex; flex-direction: column; gap: 16px; }

.info-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
}
.info-icon {
  width: 44px; height: 44px;
  border-radius: 12px;
  background: var(--gradient-subtle);
  border: 1px solid rgba(20,184,106,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.contact-form-wrap { padding: 40px; }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}
.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
}

input, select, textarea {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 0.95rem;
  color: var(--text);
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
  resize: none;
}
input::placeholder, textarea::placeholder { color: var(--text-faint); }
select option { background: #06241A; }

input:focus, select:focus, textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(20,184,106,0.15);
}

.submit-btn {
  width: 100%;
  justify-content: center;
  padding: 16px;
  font-size: 1rem;
}
.form-note {
  margin: 14px 0 0;
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
}
.info-text {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.6;
}
.info-text a {
  color: var(--text);
  font-weight: 600;
}

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .contact-form-wrap { padding: 28px 20px; }
}
</style>
