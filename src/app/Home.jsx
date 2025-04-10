import React from 'react'
import Header from '../assets/components/home-components/Header'
import HeroSection from '../assets/components/home-components/HeroSection'
import HeroTwo from '../assets/components/home-components/HeroTwo'
import Stats from '../assets/components/home-components/Stats'
import TopCategories from '../assets/components/home-components/TopCategories'
import TopCourses from '../assets/components/home-components/TopCourses'
import Testimonia from '../assets/components/home-components/Testimonia'
import BecomeInstructor from '../assets/components/home-components/BecomeInstructor'
import Footer from '../assets/components/home-components/Footer'

function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <Stats />
    <TopCategories />
    <TopCourses />
    <Testimonia />
    <BecomeInstructor />
    <Footer />
    </>
  )
}

export default Home