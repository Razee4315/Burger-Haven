import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaShoppingCart, FaTimes, FaPlus, FaMinus } from 'react-icons/fa'
import { useAppContext } from '../context/AppContext'

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { cart, removeFromCart, updateQuantity, calculateTotal } = useAppContext()

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition-colors"
      >
        <div className="relative">
          <FaShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </div>
      </button>

      {/* Cart Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="bg-white w-full max-w-md h-full overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Cart Header */}
              <div className="p-4 border-b sticky top-0 bg-white z-10">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Your Cart</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>
              </div>

              {/* Cart Items */}
              <div className="p-4">
                {cart.length === 0 ? (
                  <p className="text-center text-gray-500">Your cart is empty</p>
                ) : (
                  <>
                    <div className="space-y-4">
                      {cart.map(item => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-bold">{item.name}</h3>
                            <p className="text-primary font-bold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                              >
                                <FaMinus size={12} />
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                              >
                                <FaPlus size={12} />
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTimes size={20} />
                          </button>
                        </motion.div>
                      ))}
                    </div>

                    {/* Cart Total */}
                    <div className="mt-8 border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">Total:</span>
                        <span className="text-xl font-bold text-primary">
                          ${calculateTotal().toFixed(2)}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          setIsOpen(false)
                          window.location.href = '/checkout'
                        }}
                        className="w-full btn btn-primary"
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Cart
