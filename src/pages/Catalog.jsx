import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CATEGORIES, PRODUCTS } from '../data/products'
import CategoryTabs from '../components/CategoryTabs'
import ProductGrid from '../components/ProductGrid'

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get('category') || 'all'
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl)

  useEffect(() => {
    setActiveCategory(categoryFromUrl)
  }, [categoryFromUrl])

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS
    return PRODUCTS.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const handleCategoryChange = (id) => {
    setActiveCategory(id)
    if (id === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: id })
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Product <span className="text-neon-cyan">Catalog</span>
        </h1>
        <p className="mt-2 text-gray-500">Filter by category and enquire by email.</p>
        <div className="mt-8">
          <CategoryTabs
            categories={CATEGORIES}
            activeId={activeCategory}
            onChange={handleCategoryChange}
          />
        </div>
        <div className="mt-10">
          <ProductGrid products={filteredProducts} />
        </div>
      </motion.div>
    </div>
  )
}
