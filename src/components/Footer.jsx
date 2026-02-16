import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getWhatsAppUrl } from '../config'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/catalog', label: 'Catalog' },
]

export default function Footer() {
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
              Premium computer parts. No online payments — browse the catalog, enquire via WhatsApp,
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
            <a
              href={getWhatsAppUrl('general enquiry')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-neon-green/15 px-4 py-2 text-sm font-semibold text-neon-green transition hover:bg-neon-green/25 hover:shadow-neon-green"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Contact on WhatsApp
            </a>
          </motion.div>
        </div>
        <div className="mt-10 border-t border-glass-border pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Turborig. Enquire via WhatsApp for orders.
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
