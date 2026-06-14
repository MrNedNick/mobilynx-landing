<template>
  <LegalLayout
    title="Terms of Service"
    kicker="Terms"
    subtitle="The terms and conditions that govern your use of the Mobilynx website and advertising services."
  >
    <p class="lead">
      These Terms of Service ("Terms") govern your access to and use of mobilynx.io and the advertising
      services provided by Mobilynx. By using our website or services, you agree to be bound by these Terms.
    </p>

    <h2><span class="num">01</span>Acceptance of Terms</h2>
    <p>By accessing or using our services, you confirm that you accept these Terms and agree to comply with them. If you do not agree, you must not use our services.</p>

    <h2><span class="num">02</span>Our Services</h2>
    <p>Mobilynx provides performance advertising services, including POP, PUSH and in-app traffic, across the mobile app promotion, VPN &amp; privacy, and e-commerce verticals. We offer performance-based pricing models including CPA, CPI, CPL and CPS.</p>

    <h2><span class="num">03</span>Eligibility</h2>
    <ul>
      <li>You must be at least 18 years old and able to form a binding contract</li>
      <li>You must provide accurate and complete account information</li>
      <li>You are responsible for maintaining the confidentiality of your account</li>
    </ul>

    <h2><span class="num">04</span>Acceptable Use</h2>
    <p>You agree not to use our services to:</p>
    <ul>
      <li>Promote illegal, fraudulent, deceptive or harmful content</li>
      <li>Generate invalid, bot or incentivized traffic</li>
      <li>Infringe intellectual property or third-party rights</li>
      <li>Distribute malware, spyware or unwanted software</li>
      <li>Violate any applicable law or regulation</li>
    </ul>

    <h2><span class="num">05</span>Campaigns &amp; Payments</h2>
    <p>Campaign terms, budgets and pricing models are agreed between you and Mobilynx. Payments are due according to the agreed schedule. We reserve the right to pause or terminate campaigns that breach these Terms or our quality standards.</p>

    <h2><span class="num">06</span>Traffic Quality &amp; Fraud</h2>
    <p>We employ anti-fraud and traffic-quality measures. We reserve the right to withhold payment for, or refuse, traffic identified as invalid, fraudulent or non-compliant.</p>

    <h2><span class="num">07</span>Intellectual Property</h2>
    <p>All content, trademarks, and materials on mobilynx.io are owned by or licensed to Mobilynx and are protected by applicable laws. You may not reproduce or reuse them without our written permission.</p>

    <h2><span class="num">08</span>Limitation of Liability</h2>
    <p>To the maximum extent permitted by law, Mobilynx shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>

    <h2><span class="num">09</span>Termination</h2>
    <p>We may suspend or terminate your access to our services at any time for breach of these Terms or for conduct that we reasonably believe is harmful to Mobilynx, its partners or users.</p>

    <h2><span class="num">10</span>Changes to These Terms</h2>
    <p>We may revise these Terms from time to time. The "Last updated" date at the top reflects the most recent revision. Continued use of our services constitutes acceptance of the updated Terms.</p>

    <div class="callout">
      <p><strong>Questions?</strong> If you have any questions about these Terms, contact us at <a href="mailto:sales@mobilynx.io">sales@mobilynx.io</a>.</p>
    </div>
  </LegalLayout>
</template>

<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()
</script>
