import React from 'react'

import SignUp from "../Auth/SignUp"
import Footer from "../Footers/Footer"
import Hero from "../Hero/Hero"
import OurService from "../OurServices/OurServices"
import Products from "../Products/Products"
import WeProvide from "../WeProvide/WeProvide"

const HomeScreen = () => {
  return (
    <div>
      <Hero />
     <OurService />
     <WeProvide />
     <Products />
    </div>
  )
}

export default HomeScreen
