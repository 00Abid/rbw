import React from 'react'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Sauce Pot',
    description: 'Expert Buffing for a Smooth, Mirror-Like Finish!.',
    image: '/assets/saucepot.png',
    features: ['Custom handling', 'Restoration', 'Preservation']
  },
  {
    id: 2,
    name: 'Milk Pot',
    description: 'Expert Buffing for a Smooth, Mirror-Like Finish!.',
    image: '/assets/milkpot.png',
    features: ['Custom handling', 'Restoration', 'Preservation']
  },
  {
    id: 3,
    name: 'Wok / Deep Frying Pan',
    description: 'Expert Buffing for a Smooth, Mirror-Like Finish!.',
    image: '/assets/kadhai.png',
    features: ['Custom handling', 'Restoration', 'Preservation']
  },
  {
    id: 4,
    name: 'Silverware Collection',
    description: 'Expert Buffing for a Smooth, Mirror-Like Finish!.',
    image: '/assets/silverware.png',
    features: ['Custom handling', 'Restoration', 'Preservation']
  },
  {
    id: 5,
    name: 'Commercial Utensils',
    description: 'Expert Buffing for a Smooth, Mirror-Like Finish!.',
    image: '/assets/commercial.png',
    features: ['Custom handling', 'Restoration', 'Preservation']
  },
  {
    id: 6,
    name: 'Specialty Items',
    description: 'Expert Buffing for a Smooth, Mirror-Like Finish!.',
    image: '/assets/special.png',
    features: ['Custom handling', 'Restoration', 'Preservation']
  }
]

const Products = () => {
  return (
    <div className='pt-24 pb-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-3xl font-bold text-center mb-12 text-zinc-200'>
            Our Products
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-black border border-zinc-800 rounded-lg shadow-2xl overflow-hidden'
              >
                <div className='relative h-48'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2 text-zinc-200'>
                    {product.name}
                  </h3>
                  <p className='text-zinc-400 mb-4'>{product.description}</p>
                  <div className='space-y-2'>
                    {product.features.map((feature, i) => (
                      <p
                        key={i}
                        className='text-sm text-zinc-400 flex items-center'
                      >
                        <span className='w-2 h-2 bg-zinc-500 rounded-full mr-2'></span>
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products
