import React from 'react'
import { useRoutes } from 'react-router-dom'
import About from '../About/About'
import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/SignUp'
import ContactUs from '../Contact/ContactUs'
import HomeScreen from '../HomeScreen/HomeScreen'
import Services from '../Services/Services'


const Routes = () => {
    const element = useRoutes([
        {path: "/", element: <HomeScreen />},
        {path:"/services", element: <Services />},
        {path: "/signup", element: <SignUp />},
        {path: "/signin", element: <SignIn />},
        {path: "/about", element: <About />},
        {path: "/contacts", element: <ContactUs />}
    ])
  return (
    element
  )
}

export default Routes