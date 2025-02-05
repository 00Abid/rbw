import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, CheckCircle } from 'lucide-react'

const Home = () => {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    // Reset the animation state after 2 seconds
    setTimeout(() => setIsDownloading(false), 2000)
  }

  return (
    <div className='pt-16'>
      {/* Hero Section */}
      <section className='relative h-screen'>
        <div className='absolute inset-0'>
          <img
            src='/assets/home.png'
            alt='Polished utensils'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black opacity-80'></div>
        </div>
        <div className='relative h-full flex items-center justify-center text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-zinc-200 px-4'
          >
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
              RAJA BUFFING WORKS
            </h1>
            <p className='text-xl md:text-2xl max-w-2xl mx-auto text-zinc-300'>
              Bringing the Shine Back - Precision Buffing for Perfect Utensils!
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className='py-20 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-bold text-center mb-12 text-zinc-200'>
              About Us
            </h2>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div>
                <img
                  src='/assets/about.png'
                  alt='Factory worker'
                  className='rounded-lg shadow-2xl'
                />
              </div>
              <div className='space-y-6'>
                <p className='text-zinc-300'>
                  With over 30 years of expertise, RAJA BUFFING WORKS leads the
                  way in cutting-edge utensil buffing technology. Our advanced
                  machinery, paired with skilled craftsmen, delivers an
                  unmatched finish that makes your utensils shine like new.
                </p>
                <p className='text-zinc-300'>
                  Powered by a vast array of state-of-the-art machines, we offer
                  precision and perfection with every buff and press. Experience
                  where Bringing the Shine Back - Precision Buffing for Perfect
                  Utensils!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className='py-20 bg-zinc-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-bold text-center mb-12 text-zinc-200'>
              Our Capabilities
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {[
                {
                  title: 'High Volume Processing',
                  description:
                    'Capacity to handle large-scale buffing requirements'
                },
                {
                  title: 'Premium Finish',
                  description: 'Advanced techniques for mirror-like shine'
                },
                {
                  title: 'Quick Turnaround',
                  description: '24-48 hour processing for standard orders'
                }
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='bg-black border border-zinc-800 p-6 rounded-lg shadow-2xl'
                >
                  <CheckCircle className='h-8 w-8 text-zinc-400 mb-4' />
                  <h3 className='text-xl font-semibold mb-2 text-zinc-200'>
                    {capability.title}
                  </h3>
                  <p className='text-zinc-400'>{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Catalogue Download Section */}
      <section className='h-[50vh] bg-zinc-900 flex items-center'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-zinc-200'
          >
            <h2 className='text-3xl font-bold mb-4'>Download Our Catalogue</h2>
            <p className='text-xl mb-8 text-zinc-300'>
              Get detailed information about our services
            </p>
            <motion.a
              href='/catalogue.pdf'
              download
              onClick={handleDownload}
              className='inline-flex items-center px-6 py-3 bg-zinc-200 text-black font-semibold rounded-lg shadow-2xl hover:bg-zinc-300 transition-all duration-300 relative overflow-hidden group'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode='wait'>
                {isDownloading ? (
                  <motion.div
                    key='downloading'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='absolute inset-0 bg-zinc-300 flex items-center justify-center'
                  >
                    <motion.div
                      className='h-1 w-full bg-black/10 absolute bottom-0'
                      initial={{ scaleX: 0, transformOrigin: '0%' }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 2, ease: 'easeInOut' }}
                    />
                    <span>Downloading...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key='download'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='flex items-center'
                  >
                    <Download className='mr-2' />
                    Download Catalogue
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                className='absolute inset-0 bg-zinc-400/20'
                initial={{ scale: 0, borderRadius: '100%' }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
