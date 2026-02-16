// Email where enquiries are sent (for display only; delivery is set in Formspree)
export const RECIPIENT_EMAIL = 'venkygannu1234@gmail.com'

// Formspree form ID: create a form at https://formspree.io → set email to the above → paste the form ID here (e.g. "myyzyqnp" from https://formspree.io/f/myyzyqnp)
export const FORMSPREE_FORM_ID = ''

export function getFormspreeEndpoint() {
  if (!FORMSPREE_FORM_ID) return null
  return `https://formspree.io/f/${FORMSPREE_FORM_ID}`
}

// Fallback: mailto link when Formspree is not configured
export function getMailtoUrl(productName, body = '') {
  const subject = encodeURIComponent(productName ? `Enquiry: ${productName}` : 'General Enquiry - Turborig')
  const mailBody = encodeURIComponent(body || (productName ? `Hi, I'm interested in ${productName}. Please contact me.` : 'Hi, I would like to enquire. Please contact me.'))
  return `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${mailBody}`
}
