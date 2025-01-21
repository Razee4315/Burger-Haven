import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-[url('https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-4">
              The Best Burgers in Town
            </h1>
            <p className="text-xl mb-8">
              Handcrafted burgers made with premium ingredients and lots of love.
            </p>
            <Link
              to="/menu"
              className="btn btn-primary inline-block"
            >
              View Our Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="heading">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 rounded-lg shadow-lg"
              >
                <div className="text-primary text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="heading">Popular Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">${item.price}</span>
                    <Link to="/menu" className="btn btn-primary">
                      Order Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Dummy Data
const features = [
  {
    icon: '🍔',
    title: 'Quality Ingredients',
    description: 'We use only the finest and freshest ingredients in all our burgers.',
  },
  {
    icon: '⚡',
    title: 'Fast Service',
    description: 'Quick service without compromising on quality.',
  },
  {
    icon: '💝',
    title: 'Made with Love',
    description: 'Each burger is crafted with passion and dedication.',
  },
]

const popularItems = [
  {
    name: 'Classic Cheese Burger',
    description: 'Juicy beef patty with melted cheddar cheese and fresh vegetables.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3',
  },
  {
    name: 'BBQ Bacon Burger',
    description: 'Smoky BBQ sauce, crispy bacon, and onion rings.',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3',
  },
  {
    name: 'Veggie Supreme',
    description: 'Plant-based patty with fresh avocado and special sauce.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3',
  },
]

export default Home
