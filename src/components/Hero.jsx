import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-transparent to-dark-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm uppercase tracking-[0.3em] text-neon-cyan"
        >
          Premium hardware
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Build what’s{' '}
          <span className="gradient-text">next</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-400"
        >
          GPUs, CPUs, motherboards, storage & more. No payments online — enquire via WhatsApp and we’ll sort the rest.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/catalog"
            className="group relative rounded-xl bg-neon-cyan px-8 py-4 font-semibold text-dark-900 transition hover:shadow-neon-cyan"
          >
            <span className="relative z-10">Browse Products</span>
            <span className="absolute inset-0 rounded-xl bg-neon-cyan opacity-0 transition group-hover:opacity-100 blur-xl" />
          </Link>
          <Link
            to="/catalog#featured"
            className="rounded-xl border border-glass-border bg-glass px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:border-neon-cyan/50 hover:text-neon-cyan"
          >
            Featured
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
