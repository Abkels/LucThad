import React from 'react'
import styled from 'styled-components'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FcNext} from 'react-icons/fc'
import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <Container>
            <Card>
                <Logo>LUCTHAD <br /> RESOURCES .</Logo>
                <Div>
                    <Icn>
                        <AiOutlinePhone />
                    </Icn>
                    <Number>+2349027386356, +2348034940336 </Number>
                </Div>
                
                <Div>
                    <Icn>
                        <AiOutlineMail />
                    </Icn>
                    <Number>lucthadinternationalresourcesltd@gmail.com</Number>
                </Div>

                <SocialMediaHandle>
                    <Icns>
                        <FaFacebook />
                    </Icns>
                    <Icns>
                        <AiFillTwitterCircle />
                    </Icns>

                    <Icns>
                        <AiFillYoutube />
                    </Icns>

                    <Icns>
                        <BsInstagram />
                    </Icns>
                </SocialMediaHandle>
            </Card> 

            <Card>
                <h3>QUICK LINKS</h3>
                <Div>
                    <NavLink to = "about">
                     <Number>Company Overview </Number>
                    </NavLink>
                    
                </Div>
                
                <Div>
                    <NavLink to = 'services'>
                        <Number>Our Services</Number>
                    </NavLink>
                    
                </Div>

                <Div>
                    <NavLink to = 'contacts' >
                        <Number>Contact Us</Number>
                    </NavLink>
                    
                </Div>

                <Div>
                    <NavLink to = 'about'>
                        <Number>About Us</Number>
                    </NavLink>
                    
                </Div>
            </Card>

            <Card>
                <h3>Opening Hours</h3>
                
                <Div>                
                   Mon to Fri: 9:30Am to 5:30pm
                </Div>

                <Div>                
                   Sunday: Closed
                </Div>
                
                
            </Card>
    </Container>
  )
}

export default Footer


const SocialMediaHandle = styled.div`
display: flex;
`
const Icns = styled.div`
margin-top: 20px;
margin-left: 18px;
font-size: 30px;
height: 20px;
width: 20px;
border-radius: 50%;
color: white;
`

const Icn = styled.div`
margin-left: 10px;
margin-top: 3px;
color: white;
`
const Number = styled.div`
margin-left: 10px;
color: white;
text-decoration: none
`

const Logo = styled.div`
 height: 50px;
    width: 100px;
    color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    /* text-align: center; */
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 10px;
`

const Container = styled.div`
/* height: 70vh; */
width: 100%;
background-color: black;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
gap: 20px;

`

const Card = styled.div`
height: 330px;
width: 310px;
margin-left: 40px;

h3{
    color: white;
    /* margin-left: 12px; */
}
/* background-color: green; */
`
const Div = styled.div`
display: flex;
align-items: center;
margin-top: 30px;
font-size: 14px;
color: white

`