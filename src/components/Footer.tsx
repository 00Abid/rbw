import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-black border-t border-zinc-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <div className='flex items-center space-x-2 mb-4'>
              <img
                src='/assets/logo.png'
                alt='RAJA BUFFING WORKS Logo'
                className='h-6 w-auto'
              />
              <h3 className='text-lg font-semibold text-zinc-200'>
                RAJA BUFFING WORKS
              </h3>
            </div>
            <p className='text-zinc-400'>
              Bringing the Shine Back - Precision Buffing for Perfect Utensils!
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4 text-zinc-200'>
              Contact
            </h3>
            <div className='space-y-2'>
              <p className='flex items-center text-zinc-400'>
                <Phone size={18} className='mr-2 text-zinc-300' />
                +91 9096769473 , 9323269821
              </p>
              <p className='flex items-center text-zinc-400'>
                <Mail size={18} className='mr-2 text-zinc-300' />
                rajabuffingworks@gmail.com
              </p>
              <p className='flex items-center text-zinc-400'>
                <MapPin size={18} className='mr-2 text-zinc-300' />
                Behind Bengali chawl , naikpada , Vasai - East 401208 Palghar ,
                MAHARASHTRA
              </p>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4 text-zinc-200'>Hours</h3>
            <div className='space-y-2 text-zinc-400'>
              <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-zinc-800'>
          <p className='text-center text-zinc-400'>
            © {new Date().getFullYear()} RAJA BUFFING WORKS All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
