<template>
  <LegalLayout
    title="GDPR Compliance"
    kicker="GDPR"
    subtitle="How Mobilynx complies with the EU General Data Protection Regulation and respects your data rights."
  >
    <p class="lead">
      Mobilynx is committed to protecting the personal data of individuals in the European Economic Area (EEA)
      in line with the General Data Protection Regulation (GDPR). This page explains your rights and how we uphold them.
    </p>

    <h2><span class="num">01</span>Our Commitment</h2>
    <p>We process personal data lawfully, fairly and transparently. We collect only what we need, keep it secure, and retain it only as long as necessary.</p>

    <h2><span class="num">02</span>Lawful Basis for Processing</h2>
    <ul>
      <li><strong>Consent</strong> — where you have given clear permission</li>
      <li><strong>Contract</strong> — where processing is necessary to provide our services</li>
      <li><strong>Legitimate interests</strong> — to improve and secure our services and prevent fraud</li>
      <li><strong>Legal obligation</strong> — where required by law</li>
    </ul>

    <h2><span class="num">03</span>Your Rights Under GDPR</h2>
    <ul>
      <li><strong>Right to access</strong> — request a copy of your personal data</li>
      <li><strong>Right to rectification</strong> — correct inaccurate or incomplete data</li>
      <li><strong>Right to erasure</strong> — request deletion of your data ("right to be forgotten")</li>
      <li><strong>Right to restrict processing</strong> — limit how we use your data</li>
      <li><strong>Right to data portability</strong> — receive your data in a portable format</li>
      <li><strong>Right to object</strong> — object to processing based on legitimate interests</li>
      <li><strong>Rights related to automated decision-making</strong> — including profiling</li>
    </ul>

    <h2><span class="num">04</span>Exercising Your Rights</h2>
    <p>To exercise any of these rights, email us at <a href="mailto:sales@mobilynx.io">sales@mobilynx.io</a>. We will respond within one month, as required by GDPR. There is normally no fee, though we may charge a reasonable fee for manifestly unfounded or excessive requests.</p>

    <h2><span class="num">05</span>International Data Transfers</h2>
    <p>Where we transfer personal data outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses or transfers to countries with an adequacy decision.</p>

    <h2><span class="num">06</span>Data Protection Measures</h2>
    <p>We apply technical and organizational measures including encryption, access controls, and regular security reviews to safeguard personal data.</p>

    <h2><span class="num">07</span>Right to Lodge a Complaint</h2>
    <p>If you believe we have not handled your data in accordance with GDPR, you have the right to lodge a complaint with your local supervisory authority.</p>

    <div class="callout">
      <p><strong>Data requests:</strong> To make a GDPR request or ask a question, contact us at <a href="mailto:sales@mobilynx.io">sales@mobilynx.io</a>.</p>
    </div>
  </LegalLayout>
</template>

<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()
</script>
