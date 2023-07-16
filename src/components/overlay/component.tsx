import { motion } from 'framer-motion'
import React from 'react'

// styles
import { containerVariants, itemVariants } from '@/styles/variants'
import './component.scss'


type OverlayType = {
  title: string
  text: string
}
const Overlay = ({ title, text }: OverlayType) => {
    return (
        <motion.div 
          className='overlay_container'
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >

          {/* title */}
          <motion.p variants={itemVariants} className='overlay_title'>
            { title }
          </motion.p>

          {/* text */}
          <motion.p variants={itemVariants} className='overlay_text'>
            { text }
          </motion.p>

        </motion.div>
    )
}

export default Overlay