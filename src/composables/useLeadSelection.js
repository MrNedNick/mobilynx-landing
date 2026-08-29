import { reactive } from 'vue'

// Small shared singleton so the pricing picker (PricingModels) can hand a
// recommendation off to the contact form (ContactUs) without prop drilling
// through HomeView.
const selection = reactive({
  vertical: '',
  goal: '',
  model: null,
  note: ''
})

export function useLeadSelection() {
  return selection
}
