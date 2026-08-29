<template>
  <section id="pricing">
    <div class="container">
      <div class="section-header">
        <div class="section-tag reveal">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="currentColor" opacity=".4"/><circle cx="6" cy="6" r="2.5" fill="currentColor"/></svg>
          Pricing
        </div>
        <h2 class="section-title reveal delay-1">Performance-based <span class="gradient-text">pricing models</span></h2>
        <p class="section-sub reveal delay-2">Pay for outcomes, not promises. Choose the model that aligns with your campaign goals.</p>
      </div>

      <div class="pricing-grid">
        <div v-for="(m, i) in models" :key="m.code"
          class="price-card glass-card reveal"
          :class="[`delay-${i + 1}`, { 'price-card--match': recommended && recommended.code === m.code }]">
          <div class="price-code">{{ m.code }}</div>
          <h3>{{ m.name }}</h3>
          <p>{{ m.desc }}</p>
          <div class="price-best">Best for: <span>{{ m.best }}</span></div>
        </div>
      </div>

      <div class="picker glass-card reveal">
        <h3 class="picker-title">Not sure which model fits? <span class="gradient-text">Tell us your goal.</span></h3>

        <div class="picker-row">
          <div class="picker-group" role="group" aria-label="Vertical">
            <span class="picker-label">Vertical</span>
            <div class="picker-options">
              <button v-for="v in verticals" :key="v.value" type="button"
                class="picker-option"
                :class="{ active: vertical === v.value }"
                :aria-pressed="vertical === v.value"
                @click="vertical = v.value">
                {{ v.label }}
              </button>
            </div>
          </div>

          <div class="picker-group" role="group" aria-label="Goal">
            <span class="picker-label">Goal</span>
            <div class="picker-options">
              <button v-for="g in goals" :key="g.value" type="button"
                class="picker-option"
                :class="{ active: goal === g.value }"
                :aria-pressed="goal === g.value"
                @click="goal = g.value">
                {{ g.label }}
              </button>
            </div>
          </div>
        </div>

        <transition name="fade">
          <div v-if="recommended" class="picker-result" role="status">
            <div class="picker-result-code">{{ recommended.code }}</div>
            <div class="picker-result-body">
              <div class="picker-result-name">{{ recommended.name }}</div>
              <p class="picker-result-explain">{{ explanation }}</p>
            </div>
            <button type="button" class="btn-primary picker-cta" @click="sendToForm">
              Use {{ recommended.code }} — talk to sales
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 2L1 8.5l4 1.5 2 4 2-4 5-8z" stroke="#04190F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useTilt } from '../composables/useTilt'
import { useLeadSelection } from '../composables/useLeadSelection'

useTilt('.price-card')

const lead = useLeadSelection()

const models = [
  { code: 'CPA', name: 'Cost Per Action', desc: 'Pay only when users complete a defined action — a purchase, sign-up or other key event.', best: 'E-commerce & lead gen' },
  { code: 'CPI', name: 'Cost Per Install', desc: 'Pay for each verified app install, ideal for scaling mobile user acquisition predictably.', best: 'Mobile app promotion' },
  { code: 'CPL', name: 'Cost Per Lead', desc: 'Pay for qualified leads delivered, perfect for building high-intent subscriber bases.', best: 'VPN & subscriptions' },
  { code: 'CPS', name: 'Cost Per Sale', desc: 'Pay a share of each completed sale — fully aligned revenue-share performance pricing.', best: 'E-commerce & retail' }
]

const verticals = [
  { value: 'app', label: 'Mobile App Promotion' },
  { value: 'vpn', label: 'VPN & Privacy Apps' },
  { value: 'ecom', label: 'E-Commerce' }
]

const goals = [
  { value: 'installs', label: 'Installs', code: 'CPI' },
  { value: 'signups', label: 'Sign-ups', code: 'CPA' },
  { value: 'leads', label: 'Leads', code: 'CPL' },
  { value: 'sales', label: 'Sales', code: 'CPS' }
]

const vertical = ref('')
const goal = ref('')

const recommended = computed(() => {
  const g = goals.find(g => g.value === goal.value)
  if (!g) return null
  return models.find(m => m.code === g.code)
})

const explanation = computed(() => {
  if (!recommended.value) return ''
  const v = verticals.find(v => v.value === vertical.value)
  const goalLabel = goals.find(g => g.value === goal.value)?.label.toLowerCase()
  const verticalPart = v ? ` for ${v.label.toLowerCase()}` : ''
  return `Optimizing${verticalPart} around ${goalLabel} means you should only pay when that outcome happens — that's exactly what ${recommended.value.code} (${recommended.value.name.toLowerCase()}) does.`
})

const sendToForm = () => {
  lead.vertical = vertical.value
  lead.goal = goal.value
  lead.model = recommended.value?.code || ''
  lead.note = explanation.value
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.price-card {
  padding: 32px 28px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.price-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-subtle);
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: inherit;
}
.price-card:hover::before { opacity: 1; }

.price-code {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 14px;
  position: relative;
}

.price-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 10px;
  position: relative;
}
.price-card p {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 20px;
  position: relative;
}

.price-best {
  font-size: 0.8rem;
  color: var(--text-faint);
  margin-top: auto;
  position: relative;
}
.price-best span {
  color: var(--purple-light);
  font-weight: 600;
}

@media (max-width: 900px) {
  .pricing-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 520px) {
  .pricing-grid { grid-template-columns: 1fr; }
}

.price-card--match {
  border-color: var(--primary);
  box-shadow: 0 0 0 1px var(--primary), 0 12px 32px rgba(20,184,106,0.18);
}
.price-card--match::before { opacity: 1; }

.picker {
  margin-top: 40px;
  padding: 32px;
}

.picker-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 24px;
}

.picker-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.picker-group { display: flex; flex-direction: column; gap: 10px; }

.picker-label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-faint);
}

.picker-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.picker-option {
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--card-border);
  border-radius: 999px;
  padding: 9px 16px;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}
.picker-option:hover { color: var(--text); border-color: var(--primary); }
.picker-option:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(20,184,106,0.3);
}
.picker-option.active {
  color: #04190F;
  background: var(--gradient);
  border-color: transparent;
}

.picker-result {
  margin-top: 28px;
  padding: 24px;
  border-radius: 16px;
  background: var(--gradient-subtle);
  border: 1px solid rgba(20,184,106,0.2);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
}

.picker-result-code {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 800;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  flex-shrink: 0;
}

.picker-result-body { flex: 1; min-width: 200px; }
.picker-result-name { font-weight: 700; margin-bottom: 4px; }
.picker-result-explain { font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; }

.picker-cta { flex-shrink: 0; white-space: nowrap; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s, transform 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(6px); }

@media (max-width: 700px) {
  .picker-row { grid-template-columns: 1fr; }
  .picker-result { flex-direction: column; align-items: flex-start; }
  .picker-cta { width: 100%; justify-content: center; }
}
@media (max-width: 400px) {
  .picker { padding: 24px 18px; }
  .picker-option { padding: 8px 12px; font-size: 0.8rem; }
}
</style>
