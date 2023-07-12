import React from 'react'
import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import {NavLink} from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

    const [show, setShow] = useState (false);
    const toggle = ( ) =>{
        setShow(!show)
    }
  return (
    <Container>
        <NavLink to = "/">
            <Logo>LUCTHAD <br /> RESOURCES .</Logo>
        </NavLink>
        
        <NavBar>
            <Navs to = "/">Home</Navs>
            <Navs to = "/services">Services</Navs>
            <Navs to = "/about">About</Navs>
            <Navs to = "/contacts">Contact us</Navs> 
            <Navs to = "/signup">Sign Up</Navs> 
            <Navs to = "/signIn">Sign In</Navs> 
        </NavBar>

        <BurgerMenu onClick={toggle}>
                <GiHamburgerMenu />
         </BurgerMenu>

         {show?(<DropDown>
            <Holder>
                <SideNavs to = "/">Home</SideNavs>
                <SideNavs to = "/services">Services</SideNavs>
                <SideNavs to = "/about">About</SideNavs>
                <SideNavs to = "/contacts">Contact us</SideNavs>
                <SideNavs to = "/signup">Sign Up</SideNavs>
                <SideNavs to = "/signIp">Sign In</SideNavs>
            </Holder>
         </DropDown>):null}
    </Container>
  )
}

export default Header

const Holder = styled.div`
margin-left: 40px;
display:flex;
flex-direction: column;
`

const SideNavs = styled(NavLink)`
border-radius: 0 0 5px 5px;
width: 100px;
border-bottom: 1px solid black;
margin-top: 10px;
font-weight: bold;
color:darkgray;
text-decoration: none
;
:hover{
    cursor: pointer;
    transition: all 350ms;
    transform: scale(0.9)
}
`


const DropDown = styled.div`
height: 50vh;
width: 100%;
background-color:white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
position: absolute;
top:16%;
z-index: 8;

`

const BurgerMenu = styled.div`
    display: none;
    margin-right: 20px;
    color: white;
    cursor: pointer;
    @media screen and (max-width:768px) {
        display: flex
    }

`
const Container = styled.div`
    height: 80px;
    width: 100%;
    /* position: fixed; */
    background: #a51d0d;
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-top: 30px;

    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    /* position: fixed;
    z-index: 1; */
`

const Logo = styled.div`
    height: 50px;
    width: 100px;
    color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    /* text-align: center; */
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 10px;
    text-decoration: none;
    
`

const Navs = styled(NavLink)` 
color  : white;
margin-left: 30px;
font-weight: bold;
text-decoration: none;
margin-top: 10px;

cursor: pointer;
 padding: 10px;
 border: 1px solid transparent;

:hover{
    border-radius: 10px;
    background: #d44e3f;
    border: 1px solid white;
    transform: scale(0.99);
    transition: all 350ms
}

@media screen and (max-width:768px) {
        display: none
    }
`

const NavBar = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-right: 40px;
`
