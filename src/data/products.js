export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'gpu', label: 'GPUs' },
  { id: 'ram', label: 'RAM' },
  { id: 'psu', label: 'PSU' },
  { id: 'storage', label: 'Storage' },
]

export const PRODUCTS = [
  {
    id: '1',
    name: 'RTX 5070 Gigabyte',
    category: 'gpu',
    price: 71000,
    featured: true,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&h=600&fit=crop',
    ],
    specs: [
      { label: 'Brand', value: 'Gigabyte' },
      { label: 'Model', value: 'GeForce RTX 5070' },
      { label: 'Outputs', value: 'DisplayPort, HDMI' },
    ],
    description: 'NVIDIA GeForce RTX 5070 by Gigabyte. High performance for gaming and content creation.',
  },
  {
    id: '2',
    name: 'G.Skill Ripjaws 16GB DDR5 RAM',
    category: 'ram',
    price: 18000,
    featured: true,
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&h=400&fit=crop',
    gallery: [],
    specs: [
      { label: 'Capacity', value: '16GB' },
      { label: 'Type', value: 'DDR5' },
      { label: 'Form', value: 'DIMM' },
    ],
    description: 'G.Skill Ripjaws DDR5 16GB. Fast, reliable memory for modern builds.',
  },
  {
    id: '3',
    name: 'Cooler Master 1050 SMPS',
    category: 'psu',
    price: 16000,
    featured: true,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&h=400&fit=crop',
    gallery: [],
    specs: [
      { label: 'Wattage', value: '1050W' },
      { label: 'Form', value: 'ATX' },
      { label: 'Efficiency', value: '80 Plus' },
    ],
    description: 'Cooler Master 1050W power supply. Reliable power for high-end systems.',
  },
  {
    id: '4',
    name: 'WD 1TB SSD',
    category: 'storage',
    price: 15300,
    featured: true,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&h=400&fit=crop',
    gallery: [],
    specs: [
      { label: 'Capacity', value: '1TB' },
      { label: 'Interface', value: 'NVMe / SATA' },
      { label: 'Form', value: '2.5" / M.2' },
    ],
    description: 'Western Digital 1TB SSD. Fast storage for OS, games, and files.',
  },
]
