import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '../context/AppContext'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const { addToCart } = useAppContext()

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="section">
      <div className="container">
        <h1 className="heading">Our Menu</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-dark hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-primary font-bold">${item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button 
                  onClick={() => addToCart(item)}
                  className="btn btn-primary w-full"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Dummy Data
const categories = [
  { id: 'all', name: 'All' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'sides', name: 'Sides' },
  { id: 'drinks', name: 'Drinks' },
]

const menuItems = [
  {
    id: 1,
    name: 'Classic Cheese Burger',
    description: 'Juicy beef patty with melted cheddar cheese, lettuce, tomato, and our special sauce.',
    price: 8.99,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3',
  },
  {
    id: 2,
    name: 'BBQ Bacon Burger',
    description: 'Smoky BBQ sauce, crispy bacon, caramelized onions, and cheddar cheese.',
    price: 10.99,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3',
  },
  {
    id: 3,
    name: 'Veggie Supreme',
    description: 'Plant-based patty with fresh avocado, lettuce, tomato, and vegan mayo.',
    price: 9.99,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3',
  },
  {
    id: 4,
    name: 'French Fries',
    description: 'Crispy golden fries seasoned with our special blend of spices.',
    price: 3.99,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3',
  },
  {
    id: 5,
    name: 'Onion Rings',
    description: 'Crispy battered onion rings served with ranch dipping sauce.',
    price: 4.99,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3',
  },
  {
    id: 6,
    name: 'Milkshake',
    description: 'Creamy vanilla milkshake topped with whipped cream.',
    price: 4.99,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3',
  },
  {
    id: 7,
    name: 'Double Cheeseburger',
    description: 'Two beef patties with double cheese, lettuce, and special sauce.',
    price: 12.99,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3',
  },
  {
    id: 8,
    name: 'Sweet Potato Fries',
    description: 'Crispy sweet potato fries with honey mustard dipping sauce.',
    price: 4.99,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1604182667775-44f1c06dd2c7?ixlib=rb-4.0.3',
  },
  {
    id: 9,
    name: 'Craft Soda',
    description: 'Artisanal craft soda made with natural ingredients.',
    price: 3.49,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?ixlib=rb-4.0.3',
  },
]

export default Menu
