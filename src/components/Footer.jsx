import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEnquiry } from '../context/EnquiryContext'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/catalog', label: 'Catalog' },
]

export default function Footer() {
  const { openEnquiry } = useEnquiry()
  return (
    <footer className="relative mt-auto border-t border-glass-border bg-dark-950">
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link to="/" className="font-display text-2xl font-bold text-white">
              TURBORIG
            </Link>
            <p className="mt-3 max-w-md text-sm text-gray-500">
              Premium computer parts. No online payments — browse the catalog, enquire by email,
              and we’ll get back to you with availability and pricing. Built for builders.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Quick links</p>
            <div className="flex flex-col gap-2">
              {footerLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-gray-400 transition hover:text-neon-cyan"
                >
                  {label}
                </Link>
              ))}
            </div>
            <button
              type="button"
              onClick={() => openEnquiry('General enquiry')}
              className="inline-flex items-center gap-2 rounded-lg bg-neon-green/15 px-4 py-2 text-sm font-semibold text-neon-green transition hover:bg-neon-green/25 hover:shadow-neon-green"
            >
              <EmailIcon className="h-5 w-5" />
              Contact by email
            </button>
          </motion.div>
        </div>
        <div className="mt-10 border-t border-glass-border pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Turborig. Enquire by email for orders.
        </div>
      </div>
    </footer>
  )
}

function EmailIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}
