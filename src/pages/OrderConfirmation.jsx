import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import { useAppContext } from '../context/AppContext'

const OrderConfirmation = () => {
  const { orderId } = useParams()
  const { orders } = useAppContext()
  const order = orders.find(o => o.id === parseInt(orderId))

  if (!order) {
    return (
      <div className="section">
        <div className="container text-center">
          <h2 className="heading">Order not found</h2>
          <Link to="/menu" className="btn btn-primary">
            Back to Menu
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
          <h1 className="heading">Order Confirmed!</h1>
          <p className="text-xl mb-8">
            Thank you for your order. Your order number is #{order.id}
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
            <h2 className="text-xl font-bold mb-4">Order Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Delivery Information</h3>
                <p>Name: {order.details.name}</p>
                <p>Email: {order.details.email}</p>
                <p>Phone: {order.details.phone}</p>
                <p>Address: {order.details.address}</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Order Summary</h3>
                {order.items.map(item => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-2"
                  >
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total:</span>
                    <span className="text-xl font-bold text-primary">
                      ${order.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">Payment Method</h3>
                <p className="capitalize">{order.details.paymentMethod}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
            <Link to="/menu" className="btn btn-primary">
              Order More
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OrderConfirmation
