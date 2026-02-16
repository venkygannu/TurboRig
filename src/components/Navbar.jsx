import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CATEGORIES } from '../data/products'
import { useEnquiry } from '../context/EnquiryContext'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/catalog', label: 'Catalog' },
]

export default function Navbar() {
  const { openEnquiry } = useEnquiry()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  const categoryLinks = CATEGORIES.filter((c) => c.id !== 'all').map((c) => ({
    to: `/catalog?category=${c.id}`,
    label: c.label,
  }))

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-glass-border bg-dark-900/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-tight text-white transition hover:text-neon-cyan sm:text-2xl"
        >
          TURBORIG
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                location.pathname === to
                  ? 'text-neon-cyan'
                  : 'text-gray-400 hover:bg-glass hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
                dropdownOpen ? 'text-neon-cyan' : 'text-gray-400 hover:bg-glass hover:text-white'
              }`}
            >
              Categories
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-1 w-44 rounded-xl border border-glass-border bg-dark-800/95 py-2 shadow-glass backdrop-blur-xl"
                >
                  {categoryLinks.map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-300 transition hover:bg-glass hover:text-neon-cyan"
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            type="button"
            onClick={() => openEnquiry('General enquiry')}
            className="ml-2 rounded-lg bg-neon-green/20 px-4 py-2 text-sm font-semibold text-neon-green transition hover:bg-neon-green/30 hover:shadow-neon-green"
          >
            Contact
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-gray-400 hover:bg-glass hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-glass-border bg-dark-800/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2 font-medium ${
                    location.pathname === to ? 'text-neon-cyan' : 'text-gray-300'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <p className="mt-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Categories
              </p>
              {categoryLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-gray-300 hover:text-neon-cyan"
                >
                  {label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => { openEnquiry('General enquiry'); setMobileOpen(false) }}
                className="mt-2 rounded-lg bg-neon-green/20 px-3 py-2 font-semibold text-neon-green text-left w-full"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
