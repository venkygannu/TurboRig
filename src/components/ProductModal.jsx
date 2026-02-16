import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProductModal({ product, open, onClose, onEnquire }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose()
    if (open) window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [open, onClose])

  if (!product) return null

  const images = [product.image, ...(product.gallery || [])].filter(Boolean)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-glass-border bg-dark-800 shadow-glass"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-lg bg-dark-700/80 p-2 text-gray-400 transition hover:bg-dark-600 hover:text-white"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              <div className="grid gap-6 p-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <div className="aspect-square overflow-hidden rounded-xl bg-dark-700">
                    <img
                      src={images[0]}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {images.slice(0, 4).map((src, i) => (
                        <div
                          key={i}
                          className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-dark-700"
                        >
                          <img src={src} alt="" className="h-full w-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">{product.name}</h2>
                  <p className="mt-1 font-mono text-neon-green">₹{product.price.toLocaleString('en-IN')}</p>
                  <p className="mt-3 text-sm text-gray-400">{product.description}</p>
                  {product.specs && product.specs.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Specs
                      </h4>
                      <dl className="mt-2 space-y-2">
                        {product.specs.map(({ label, value }) => (
                          <div key={label} className="flex justify-between gap-4 text-sm">
                            <dt className="text-gray-500">{label}</dt>
                            <dd className="font-medium text-white">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={onEnquire}
                    className="mt-6 w-full rounded-xl bg-neon-green/20 py-3 font-semibold text-neon-green transition hover:bg-neon-green/30 hover:shadow-neon-green"
                  >
                    Enquire via email
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
