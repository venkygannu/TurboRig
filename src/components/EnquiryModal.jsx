import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEnquiry } from '../context/EnquiryContext'
import { getFormspreeEndpoint, getMailtoUrl, RECIPIENT_EMAIL } from '../config'

export default function EnquiryModal() {
  const { open, productName, closeEnquiry } = useEnquiry()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const formspree = getFormspreeEndpoint()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    if (formspree) {
      try {
        const res = await fetch(formspree, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            message: message || '(No message)',
            product: productName || 'General enquiry',
          }),
        })
        if (res.ok) {
          setStatus('success')
          setName('')
          setEmail('')
          setMessage('')
          setTimeout(closeEnquiry, 1500)
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
    } else {
      const body = `Name: ${name}\nEmail: ${email}\n${productName ? `Product: ${productName}\n` : ''}\nMessage: ${message || '—'}`
      window.location.href = getMailtoUrl(productName, body)
      setName('')
      setEmail('')
      setMessage('')
      setStatus('idle')
      closeEnquiry()
    }
  }

  const handleClose = () => {
    if (status === 'sending') return
    setStatus('idle')
    setName('')
    setEmail('')
    setMessage('')
    closeEnquiry()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md rounded-2xl border border-glass-border bg-dark-800 p-6 shadow-glass"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-lg p-1 text-gray-400 hover:bg-dark-600 hover:text-white"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-lg font-semibold text-white">
              {productName ? 'Enquire about this product' : 'Contact us'}
            </h3>
            {productName && (
              <p className="mt-1 text-sm text-neon-cyan">{productName}</p>
            )}

            {status === 'success' ? (
              <p className="mt-4 text-neon-green">Thanks! We’ll get back to you soon.</p>
            ) : status === 'error' ? (
              <p className="mt-4 text-red-400">Something went wrong. Try emailing us directly at {RECIPIENT_EMAIL}.</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label htmlFor="enq-name" className="block text-sm font-medium text-gray-400">Name *</label>
                  <input
                    id="enq-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-glass-border bg-dark-700 px-3 py-2 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="enq-email" className="block text-sm font-medium text-gray-400">Email *</label>
                  <input
                    id="enq-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-glass-border bg-dark-700 px-3 py-2 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="enq-msg" className="block text-sm font-medium text-gray-400">Message</label>
                  <textarea
                    id="enq-msg"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="mt-1 w-full rounded-lg border border-glass-border bg-dark-700 px-3 py-2 text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none resize-none"
                    placeholder="Your message or questions..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded-xl bg-neon-cyan py-3 font-semibold text-dark-900 transition hover:bg-neon-cyan/90 disabled:opacity-50"
                >
                  {formspree ? (status === 'sending' ? 'Sending...' : 'Send enquiry') : 'Open email'}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
