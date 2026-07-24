import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

function Services() {

 const servicesData = [
    {
    title: "Advertising",
    description: "We turn bold into powerful and digital solution that connect, engage...",
    icon: assets.ads_icon,
    },
    {
  title: "Content Marketing",
  description: "Create valuable content to attract and engage audience.",
  icon: assets.marketing_icon,
 },
 {
   title: "Content Writing",
   description: "Write engaging and SEO-friendly content for websites and blogs.",
   icon: assets.content_icon
 },
 {
    title: "Social Media Management",
    description: "Manage and grow your social presence.",
    icon: assets.social_icon,
  },
    
 ]

  return (
    <motion.div
    initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{once: true}}
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12
    lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} alt='' className='absolute -top-110 -left-70 
        -z-1 dark:hidden' />

        <Title title='How can we help?' desc='From strategy to execution, we craft digital solution that move your business forward.'/>
    
    <div className='flex flex-col md:grid grid-cols-2'>
      {servicesData.map((service, index)=>(
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
    
    </motion.div>
  )
}

export default Services