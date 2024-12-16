import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'
import HeroSlider from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import LatestWork from '@/components/OurWorks'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSlider/>
      <LatestWork/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}

export default page
