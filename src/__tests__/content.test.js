import { beforeAll, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FooterSection from '../components/FooterSection.vue'
import { privacy } from '../content/privacy'
import { mailtoLink } from '../lib/contact'

// The landing carries the content of the live mobilynx.io and nothing else.
// If a section disappears or an invented one comes back, this fails.
const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/', component: HomeView }, { path: '/privacy', component: HomeView }],
})

beforeAll(() => {
  // jsdom has neither; the reveal and tilt effects only need them to exist.
  vi.stubGlobal('matchMedia', () => ({ matches: true, addEventListener() {}, removeEventListener() {} }))
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  )
})

async function render(component) {
  router.push('/')
  await router.isReady()
  return mount(component, { global: { plugins: [router] }, attachTo: document.body })
}

describe('home page content', () => {
  it('has every block of the live site', async () => {
    const text = (await render(HomeView)).text()
    for (const phrase of [
      'Advertising agency',
      'Mobilynx drives the most useful mobile apps and services to everyone.',
      'Installs, registrations, free trials',
      'for apps and browser extensions',
      'SOI/DOI',
      'for games',
      'Deposits',
      'for online products',
      'Popunder ads provide massive reach at the lowest cost',
      'Instantly deliver your brand’s message',
      'In-app advertising is an effective strategy',
      'Top traffic geos',
      'Long-term partnerships are built on trust and mutual understanding.',
      'country, language, browser, OS, device, carrier.',
      'Algorithimic and manual real time campaign optimization.',
      'We will take care of your needs.',
      'CPA, CPI, CPL and CPS.',
      'We are ready to answer!',
      'If you are an app owner and looking for traffic, please contact us at',
      'hanna@mobilynx.io',
    ])
      expect(text).toContain(phrase)
  })

  it('lists the eleven top geos shown on the live site', async () => {
    const items = (await render(HomeView)).findAll('.geos-list li')
    expect(items.map((li) => li.text())).toEqual([
      'United States', 'United Kingdom', 'Canada', 'Australia', 'Japan', 'India',
      'Qatar', 'Saudi Arabia', 'United Arab Emirates', 'France', 'Germany',
    ])
  })

  it('does not bring back figures or offers the live site does not make', async () => {
    const text = (await render(HomeView)).text()
    for (const invented of ['20M+', '99%', '+38%', 'VPN', 'E-Commerce', '24 hours'])
      expect(text).not.toContain(invented)
  })

  it('ends with the live footer', async () => {
    const footer = await render(FooterSection)
    expect(footer.text()).toContain('© 2026 Mobilynx. All rights reserved.')
    expect(footer.find('a[href="/privacy"]').text()).toBe('Privacy policy')
  })
})

describe('privacy policy and contact', () => {
  it('keeps the published policy, company details included', () => {
    const text = privacy.flatMap((s) => [s.heading ?? '', ...s.paragraphs]).join('\n')
    expect(privacy.filter((s) => s.heading)).toHaveLength(16)
    expect(text).toContain('Mobilynx sp. z o.o., HOZA, 66/68., Warsaw, Poland with registration number 0000898390')
    expect(text).toContain('Changes to this Privacy Policy')
  })

  it('hands the message to the email app, addressed to sales', () => {
    const link = mailtoLink('sales@mobilynx.io', { name: 'Ann', email: 'ann@example.com', message: 'Hi' })
    expect(link.startsWith('mailto:sales@mobilynx.io?')).toBe(true)
    const body = decodeURIComponent(link.split('body=')[1])
    expect(body).toBe('Hi\n\nAnn · ann@example.com')
    expect(decodeURIComponent(link.split('subject=')[1].split('&')[0])).toBe('Message from Ann')
  })
})
