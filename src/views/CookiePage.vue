<template>
  <LegalLayout
    title="Cookie Policy"
    kicker="Cookies"
    subtitle="How Mobilynx uses cookies and similar technologies, and how you can manage your preferences."
  >
    <p class="lead">
      This Cookie Policy explains how Mobilynx uses cookies and similar technologies when you visit
      mobilynx.io. It should be read alongside our <router-link to="/privacy">Privacy Policy</router-link>.
    </p>

    <h2><span class="num">01</span>What Are Cookies?</h2>
    <p>Cookies are small text files placed on your device when you visit a website. They help the site function, remember your preferences, and provide information to site owners.</p>

    <h2><span class="num">02</span>Types of Cookies We Use</h2>
    <h3>Essential cookies</h3>
    <p>Required for the website to function properly. These cannot be disabled.</p>
    <h3>Analytics cookies</h3>
    <p>Help us understand how visitors interact with our website so we can improve the experience.</p>
    <h3>Marketing cookies</h3>
    <p>Used to deliver relevant advertising and measure the effectiveness of our campaigns.</p>

    <h2><span class="num">03</span>How We Use Cookies</h2>
    <ul>
      <li>To keep the website secure and functioning correctly</li>
      <li>To remember your consent and preferences</li>
      <li>To analyze traffic and usage patterns</li>
      <li>To measure and optimize advertising performance</li>
    </ul>

    <h2><span class="num">04</span>Third-Party Cookies</h2>
    <p>Some cookies may be set by third-party services we use, such as analytics and advertising partners. These partners have their own privacy and cookie policies.</p>

    <h2><span class="num">05</span>Managing Your Preferences</h2>
    <p>You can manage your cookie preferences at any time through our consent banner. You can also control cookies through your browser settings — though disabling some cookies may affect site functionality.</p>

    <h2><span class="num">06</span>Changes to This Policy</h2>
    <p>We may update this Cookie Policy from time to time. The "Last updated" date at the top reflects the most recent revision.</p>

    <div class="callout">
      <p><strong>Need help?</strong> For questions about our use of cookies, email us at <a href="mailto:sales@mobilynx.io">sales@mobilynx.io</a>.</p>
    </div>
  </LegalLayout>
</template>

<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()
</script>
