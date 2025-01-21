import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading">About BurgerHaven</h1>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2023, BurgerHaven started with a simple mission: to serve
                the most delicious and high-quality burgers in town. What began as
                a small family-owned restaurant has grown into a beloved
                establishment known for its unique flavors and welcoming atmosphere.
              </p>
              <p className="text-gray-600">
                We take pride in using only the freshest ingredients, sourced from
                local suppliers whenever possible. Our commitment to quality and
                customer satisfaction has earned us a loyal following and numerous
                accolades in the local food scene.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3"
              alt="Restaurant Interior"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Dummy Data
const values = [
  {
    icon: '🌟',
    title: 'Quality First',
    description: 'We never compromise on the quality of our ingredients or service.',
  },
  {
    icon: '🤝',
    title: 'Community',
    description: 'We believe in building strong relationships with our community and suppliers.',
  },
  {
    icon: '♻️',
    title: 'Sustainability',
    description: 'We are committed to environmentally friendly practices.',
  },
]

const team = [
  {
    name: 'John Smith',
    role: 'Head Chef',
    description: 'With 15 years of culinary experience, John leads our kitchen team.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3',
  },
  {
    name: 'Sarah Johnson',
    role: 'Restaurant Manager',
    description: 'Sarah ensures smooth operations and exceptional customer service.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3',
  },
  {
    name: 'Mike Wilson',
    role: 'Sous Chef',
    description: 'Mike brings creativity and passion to our burger creations.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3',
  },
]

export default About
