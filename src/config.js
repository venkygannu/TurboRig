// Replace with your WhatsApp number: country code + number, no + or spaces
// e.g. 919876543210 (India), 447123456789 (UK)
export const WHATSAPP_NUMBER = '919876543210'

export const ENQUIRY_MESSAGE = (productName) =>
  `Hi, I'm interested in ${productName}. Please contact me.`

export function getWhatsAppUrl(productName) {
  const text = encodeURIComponent(ENQUIRY_MESSAGE(productName))
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
