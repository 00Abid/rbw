import React from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className='pt-24 pb-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-3xl font-bold text-center mb-12 text-zinc-200'>
            Contact Us
          </h1>

          <div className='grid md:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='bg-black border border-zinc-800 p-8 rounded-lg shadow-2xl'
            >
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-zinc-300'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='mt-1 block w-full rounded-md bg-zinc-900 border-zinc-700 text-zinc-200 shadow-sm focus:border-zinc-500 focus:ring-zinc-500'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-zinc-300'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='mt-1 block w-full rounded-md bg-zinc-900 border-zinc-700 text-zinc-200 shadow-sm focus:border-zinc-500 focus:ring-zinc-500'
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-zinc-300'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows={4}
                    className='mt-1 block w-full rounded-md bg-zinc-900 border-zinc-700 text-zinc-200 shadow-sm focus:border-zinc-500 focus:ring-zinc-500'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='w-full flex justify-center items-center px-4 py-2 bg-zinc-200 text-black rounded-md hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-black'
                >
                  <Send className='mr-2' size={18} />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map and Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='space-y-8'
            >
              {/* Map */}
              <div className='h-64 bg-zinc-900 rounded-lg overflow-hidden shadow-2xl'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3762.906718117142!2d72.869743!3d19.416435999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI0JzU5LjIiTiA3MsKwNTInMTEuMSJF!5e0!3m2!1sen!2sin!4v1738732379239!5m2!1sen!2sin'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
                '
              </div>

              {/* Contact Info */}
              <div className='bg-black border border-zinc-800 p-6 rounded-lg shadow-2xl'>
                <h3 className='text-xl font-semibold mb-4 text-zinc-200'>
                  Contact Information
                </h3>
                <div className='space-y-4'>
                  <p className='flex items-center text-zinc-400'>
                    <Phone className='mr-2 text-zinc-300' size={18} />
                    +91 9096769473 , 9323269821
                  </p>
                  <p className='flex items-center text-zinc-400'>
                    <Mail className='mr-2 text-zinc-300' size={18} />
                    rajabuffingworks@gmail.com
                  </p>
                  <p className='flex items-center text-zinc-400'>
                    <MapPin className='mr-2 text-zinc-300' size={18} />
                    Behind Bengali Chawl
                    <br />
                    Naikpada Vasai - 401208 Palghar
                    <br />
                    MAHARASHTRA
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
