"use client"
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'


// components
import FastFurious from '@/components/fast_furious/component'
import FormulaOne from '@/components/formula_one/component'
import Overlay from '@/components/overlay/component'
import Footer from '@/components/footer/component'


// styles
import { containerVariants, itemVariants } from '@/styles/variants'
import './page.scss'


export default function Home() {
  const [showCanvas, setShowCanvas] = useState(false)
  const [isShowingFormulaOne, setIsShowingFormulaOne] = useState(true)

  useEffect(()=> {
    setTimeout(()=> setShowCanvas(true), 500)
  }, [])

  return (
    <div className='page home_page'>


      {/* content */}
      <motion.div
        className="home_page__content_container"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >

        {/* content */}
        <motion.div
          className="home_page__content"
          variants={itemVariants}
          initial="initial"
          animate="animate"
        >
          {
            showCanvas && isShowingFormulaOne &&
              <FormulaOne />
          }
          {
            showCanvas && !isShowingFormulaOne &&
              <FastFurious />
          }
        </motion.div>


        {/* appbar */}
        <motion.div className="home_page__app_bar" variants={itemVariants}>
          <motion.div variants={itemVariants} className='home_page__app_bar_item'>
            Formula One Meets Fast & Furious
          </motion.div>
        </motion.div>

        {/* footer */}
        <Footer />
      </motion.div>


      {/* side nav */}
      <div className="home_page__side_nav">
        <motion.div
          className='home_page__side_nav_items'
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
        
          {/* selected if we are seeing furious */}
          <SideNavItem
            selected={!isShowingFormulaOne}
            onClick={
              ()=> setIsShowingFormulaOne(false)
            }
          />

          {/* selected if we are seeing formula 1 */}
          <SideNavItem
            selected={isShowingFormulaOne}
            onClick={
              ()=> setIsShowingFormulaOne(true)
            }
          />
          
        </motion.div>
      </div>

      {/* text content */}
      {
        isShowingFormulaOne && 
          <Overlay
            title='Formula 1'
            text='The racing season is upon us and the thrill is on. I am ready now.'
          />
      }
      {
        !isShowingFormulaOne && 
          <Overlay
            title='Fast & Furious'
            text='The whole clan is coming for my family but I have a message for them, I am ready now.'
          />
      }

    </div>
  )
}


type SideNavItemType = {
  selected: boolean
  onClick: ()=> void
}
const SideNavItem = ({  selected, onClick }: SideNavItemType)=> {

  return (
    <motion.div
      variants={itemVariants}
      className={
        clsx([
          'home_page__side_nav_item',
          {
            'home_page__side_nav_item__selected': selected,
          }
        ])
      }
      onClick={
        ()=> onClick()
      }
    />
  )
}
