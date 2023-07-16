import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'


// styles
import { containerVariants, itemVariants } from '@/styles/variants'
import './component.scss'

const Footer = () => {
    return (
        <motion.div
            className="home_page__footer"
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
          <motion.div variants={itemVariants} className='home_page__footer_item'>
          
            <Link href='https://www.linkedin.com/in/felix-ndunda-0ba841108/' target='_blank'>
              <motion.div variants={itemVariants} className='home_page__footer_icon'>
                <FaLinkedinIn />
              </motion.div>
            </Link>

            <Link href='https://github.com/efenstakes' target='_blank'>
              <motion.div variants={itemVariants} className='home_page__footer_icon'>
                <AiFillGithub />
              </motion.div>
            </Link>
            
          </motion.div>
        </motion.div>
    )
}

export default Footer