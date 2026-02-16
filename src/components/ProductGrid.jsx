import { motion } from 'framer-motion'
import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} showPrice={true} />
      ))}
    </div>
  )
}
