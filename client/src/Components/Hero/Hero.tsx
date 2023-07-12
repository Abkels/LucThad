import React from 'react'
import styled from 'styled-components'
import image from '../Hero/HeroImages/img2.jpg'
// import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <Container>
       <TextCard>
            <Text> <Text>WE MOVE YOUR PRODUCTS <br /> OUTSIDE AND WITHIN</Text></Text>
            
            <Button><a href="https://api.whatsapp.com/send?phone=2349022780760">Book Now</a></Button>
       </TextCard>
    </Container>
  )
}

export default Hero

const Container = styled.div`
    width: 100%;
    /* height: 70vh; */
    background-image:url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding-bottom: 120px;
    background-color: red;
    margin-top:-10px;
    /* margin-bottom: ; */
    background-attachment: fixed;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    ::before{
        content: "";
        height: 100%;
        width: 100%;
        background:rgba(3%, 16%, 16%, 0.6) ;
        position: absolute;
        top:0
    }
`
const TextCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
z-index: 1;
`
const Text = styled.h2`
text-align: center;
color: white;

@media screen and (max-width: 538px) {
  font-size: 20px;
}
`

const Button = styled.div`
height: 40px;
width: 140px;
padding: 10px;
border-radius: 30px;
background-color:#a51d0d ;
border:1px solid white ;
color: white;
font-weight: bold;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
 a{
  text-decoration: none;
  color:white;

 }

:hover{
  background: #d44e3f;
}

@media screen and (max-width: 425px) {
  align-items: center;
}
`



