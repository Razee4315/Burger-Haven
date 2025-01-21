import { motion, AnimatePresence } from 'framer-motion'
import { useAppContext } from '../context/AppContext'

const Notifications = () => {
  const { notifications } = useAppContext()

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <AnimatePresence>
        {notifications.map(notification => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20, x: 100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="bg-dark text-white px-4 py-2 rounded-lg shadow-lg mb-2"
          >
            {notification.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default Notifications
