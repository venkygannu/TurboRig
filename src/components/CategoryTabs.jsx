import { motion } from 'framer-motion'

export default function CategoryTabs({ categories, activeId, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <motion.button
          key={cat.id}
          type="button"
          onClick={() => onChange(cat.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
            activeId === cat.id
              ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan'
              : 'border-glass-border bg-glass text-gray-400 hover:border-gray-500 hover:text-white'
          }`}
        >
          {cat.label}
        </motion.button>
      ))}
    </div>
  )
}
