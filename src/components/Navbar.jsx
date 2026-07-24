import React, { useState } from 'react'

import logo from "../assets/logo.svg"
import logo_dark from "../assets/logo_dark.svg"
import arrow_icon from "../assets/arrow_icon.svg"
import close_icon from "../assets/close_icon.svg"
import menu_icon_dark from "../assets/menu_icon_dark.svg"
import menu_icon from "../assets/menu_icon.svg"

import ThemeToggleBtn from "./ThemeToggleButton"

import { motion, AnimatePresence } from "framer-motion"

const Navbar = ({ theme, setTheme }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='sticky top-0 z-50 flex items-center justify-between
      px-4 sm:px-12 lg:px-24 xl:px-40 py-4
      backdrop-blur-xl bg-white/60 dark:bg-gray-900/70
      border-b border-gray-200 dark:border-gray-800'
    >

      {/* Logo */}
      <img
        src={theme === 'dark' ? logo_dark : logo}
        className='w-32 sm:w-40 cursor-pointer'
        alt='Logo'
      />

      {/* Desktop Menu */}
      <div className='hidden sm:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-white'>

        <a href='#Home' className='hover:text-blue-500 transition-colors'>
          Home
        </a>

        <a href='#services' className='hover:text-blue-500 transition-colors'>
          Services
        </a>

        <a href='#our-Work' className='hover:text-blue-500 transition-colors'>
          Our Work
        </a>

        <a href='#contact-Us' className='hover:text-blue-500 transition-colors'>
          Contact Us
        </a>
      </div>

      {/* Right Side */}
      <div className='flex items-center gap-3 sm:gap-5'>

        <ThemeToggleBtn
          theme={theme}
          setTheme={setTheme}
        />

        {/* Mobile Menu Button */}
        <img
          src={theme === 'dark' ? menu_icon_dark : menu_icon}
          alt='Menu'
          onClick={() => setSidebarOpen(true)}
          className='w-8 sm:hidden cursor-pointer'
        />

        {/* Desktop Button */}
        <a
          href='#contact-Us'
          className='hidden sm:flex items-center gap-2
          bg-blue-500 hover:bg-blue-600
          text-white px-6 py-2 rounded-full
          transition-all duration-300 hover:scale-105'
        >
          Connect
          <img src={arrow_icon} width={14} alt='' />
        </a>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className='fixed top-0 right-0 h-screen w-64
            bg-white dark:bg-gray-900
            shadow-2xl z-50
            flex flex-col pt-20 px-8 gap-6'
          >

            {/* Close Button */}
            <img
              src={close_icon}
              alt='Close'
              className='w-5 absolute top-5 right-5 cursor-pointer'
              onClick={() => setSidebarOpen(false)}
            />

            <a onClick={() => setSidebarOpen(false)} href='#Home'>
              Home
            </a>

            <a onClick={() => setSidebarOpen(false)} href='#services'>
              Services
            </a>

            <a onClick={() => setSidebarOpen(false)} href='#our-Work'>
              Our Work
            </a>

            <a onClick={() => setSidebarOpen(false)} href='#contact-Us'>
              Contact Us
            </a>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  )
}

export default Navbar