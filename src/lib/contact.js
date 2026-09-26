/** A mailto: link carrying the contact form, for a site without a backend. */
export function mailtoLink(to, { name = '', email = '', message = '' }) {
  const subject = name.trim() ? `Message from ${name.trim()}` : 'Message from mobilynx.io'
  const body = [message.trim(), '', [name.trim(), email.trim()].filter(Boolean).join(' · ')]
    .join('\n')
    .trim()
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
