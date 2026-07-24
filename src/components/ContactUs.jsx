import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion } from "framer-motion"

function ContactUs() {

  const [loading, setLoading] = useState(false)

  const onSubmit = async (event) => {

    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.target)

    formData.append(
      "access_key",
      "53af8c95-7c1c-4201-ad48-a99634bb659c"
    )

    try {

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData
        }
      )

      const data = await response.json()

      if (data.success) {

        toast.success('Thank you for your submission!')
        event.target.reset()

      } else {
        toast.error(data.message)
      }

    } catch (error) {

      toast.error('Something went wrong.')

    } finally {

      setLoading(false)

    }
  }

  return (
    <motion.div
      id='contact-us'
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      className='flex flex-col items-center gap-8
      px-4 sm:px-12 lg:px-24 xl:px-40
      pt-32 text-gray-700 dark:text-white'
    >

      <Title
        title='Reach out to us'
        desc='From strategy to execution, we craft digital solutions that move your business forward.'
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className='grid sm:grid-cols-2 gap-4 sm:gap-6
        max-w-2xl w-full'
      >

        {/* Name */}
        <div>

          <p className='mb-2 text-sm font-medium'>
            Your Name
          </p>

          <div className='flex items-center pl-3 rounded-xl
          border border-gray-300 dark:border-gray-600
          focus-within:border-blue-500 transition-all'>

            <img
              src={assets.person_icon}
              alt=''
              className='w-5 opacity-70'
            />

            <input
              name="name"
              type='text'
              placeholder='Enter your name'
              required
              className='w-full p-3 text-sm bg-transparent outline-none'
            />
          </div>
        </div>

        {/* Email */}
        <div>

          <p className='mb-2 text-sm font-medium'>
            Email Address
          </p>

          <div className='flex items-center pl-3 rounded-xl
          border border-gray-300 dark:border-gray-600
          focus-within:border-blue-500 transition-all'>

            <img
              src={assets.email_icon}
              alt=''
              className='w-5 opacity-70'
            />

            <input
              name="email"
              type='email'
              placeholder='Enter your email'
              required
              className='w-full p-3 text-sm bg-transparent outline-none'
            />
          </div>
        </div>

        {/* Message */}
        <div className='sm:col-span-2'>

          <p className='mb-2 text-sm font-medium'>
            Message
          </p>

          <textarea
            name="message"
            rows={8}
            placeholder='Enter your message'
            required
            className='w-full p-4 text-sm bg-transparent
            outline-none rounded-xl
            border border-gray-300 dark:border-gray-600
            focus:border-blue-500 transition-all'
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          disabled={loading}
          className='w-max flex items-center gap-2
          bg-blue-600 hover:bg-blue-700
          text-white text-sm
          px-10 py-3 rounded-full
          transition-all duration-300
          hover:scale-105 disabled:opacity-70'
        >

          {loading ? 'Submitting...' : 'Submit'}

          <img
            src={assets.arrow_icon}
            alt=''
            className='w-4'
          />
        </button>

      </motion.form>

    </motion.div>
  )
}

export default ContactUs