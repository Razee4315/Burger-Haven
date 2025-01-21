import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">BurgerHaven</h3>
            <p className="text-gray-300">
              Serving the juiciest and most delicious burgers in town since 2023.
              Quality ingredients, amazing taste!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-primary">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} BurgerHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
