import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu} from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const location = useLocation()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/machinery', label: 'Machinery' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav className='bg-black shadow-sm fixed w-full z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Link
              to='/'
              className='flex items-center space-x-2 text-xl font-bold text-zinc-200'
            >
              <img
                src='/assets/logo.png'
                alt='RAJA BUFFING WORKS Logo'
                className='h-8 w-auto'
              />
              <span>RAJA BUFFING WORKS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden sm:flex sm:items-center'>
            {links.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.href
                    ? 'text-zinc-200'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='sm:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-zinc-400 hover:text-zinc-200'
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className='sm:hidden'
        >
          <div className='px-2 pt-2 pb-3 space-y-1 bg-black border-t border-zinc-800'>
            {links.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.href
                    ? 'text-zinc-200'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
