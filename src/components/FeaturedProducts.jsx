import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

const featured = PRODUCTS.filter((p) => p.featured)

export default function FeaturedProducts() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="featured" ref={ref} className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        >
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Featured <span className="text-neon-cyan">Products</span>
            </h2>
            <p className="mt-2 text-gray-500">Hand-picked performance parts</p>
          </div>
          <Link
            to="/catalog"
            className="rounded-xl border border-neon-cyan/50 px-5 py-2.5 text-sm font-semibold text-neon-cyan transition hover:bg-neon-cyan/10"
          >
            View all
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} showPrice={true} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
