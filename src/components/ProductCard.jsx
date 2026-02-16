import { motion } from 'framer-motion'
import ProductModal from './ProductModal'
import { getWhatsAppUrl } from '../config'
import { useState } from 'react'

export default function ProductCard({ product, index = 0, showPrice = true }) {
  const [modalOpen, setModalOpen] = useState(false)

  const handleEnquire = (e) => {
    e?.preventDefault?.()
    e?.stopPropagation?.()
    window.open(getWhatsAppUrl(product.name), '_blank')
    setModalOpen(false)
  }

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: index * 0.05 }}
        whileHover={{ y: -4 }}
        className="group relative overflow-hidden rounded-2xl border border-glass-border bg-dark-800/50 backdrop-blur-sm transition hover:border-neon-cyan/30 hover:shadow-neon-cyan"
        onClick={() => setModalOpen(true)}
      >
        <div className="absolute inset-0 bg-card-glow opacity-0 transition group-hover:opacity-100 pointer-events-none" />
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden bg-dark-700">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-white line-clamp-2 group-hover:text-neon-cyan transition">
              {product.name}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-gray-500">{product.description}</p>
            {showPrice && (
              <p className="mt-2 font-mono text-sm font-medium text-neon-green">
                ${product.price}
                <span className="ml-1 text-gray-500 font-sans font-normal">— enquire for availability</span>
              </p>
            )}
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setModalOpen(true)
                }}
                className="rounded-lg border border-glass-border bg-glass px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-neon-cyan/50 hover:text-neon-cyan"
              >
                Details
              </button>
              <button
                type="button"
                onClick={handleEnquire}
                className="rounded-lg bg-neon-green/20 px-4 py-2 text-sm font-semibold text-neon-green transition hover:bg-neon-green/30 hover:shadow-neon-green"
              >
                Enquire
              </button>
            </div>
          </div>
        </div>
      </motion.article>

      <ProductModal
        product={product}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onEnquire={handleEnquire}
      />
    </>
  )
}
