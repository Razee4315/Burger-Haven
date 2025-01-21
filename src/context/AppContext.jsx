import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })
  
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders')
    return savedOrders ? JSON.parse(savedOrders) : []
  })

  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders))
  }, [orders])

  const addToCart = (item) => {
    setCart(prev => {
      const existingItem = prev.find(i => i.id === item.id)
      if (existingItem) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
    addNotification(`Added ${item.name} to cart!`)
  }

  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId))
    addNotification('Item removed from cart')
  }

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      removeFromCart(itemId)
      return
    }
    setCart(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const placeOrder = (orderDetails) => {
    const newOrder = {
      id: Date.now(),
      items: [...cart],
      details: orderDetails,
      status: 'processing',
      date: new Date().toISOString(),
      total: calculateTotal()
    }
    setOrders(prev => [newOrder, ...prev])
    clearCart()
    addNotification('Order placed successfully!')
    return newOrder.id
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const addNotification = (message) => {
    const id = Date.now()
    setNotifications(prev => [...prev, { id, message }])
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }, 3000)
  }

  return (
    <AppContext.Provider
      value={{
        cart,
        orders,
        notifications,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        placeOrder,
        calculateTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
