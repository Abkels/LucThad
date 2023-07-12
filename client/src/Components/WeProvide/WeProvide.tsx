import React from 'react'
import styled from 'styled-components'
import road from '../Hero/HeroImages/road.webp'

const WeProvide = () => {
  return (
    <Container>
        <Container>
       <TextCard>
            <Text> <Text>WE MOVE YOUR PRODUCTS <br /> OUTSIDE AND WITHIN</Text></Text>
            <Button><a href="https://api.whatsapp.com/send?phone=2349022780760">Book Now</a></Button>       
        </TextCard>
    </Container>
    </Container>
  )
}

export default WeProvide

const Container = styled.div`
 
    width: 100%;
    /* height: 70vh; */
    background-image:url(${road});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding-bottom: 60px;
    background-color: red;
    margin-top: -30px;
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

margin-top: 50px;
display: flex;
flex-direction: column;
align-items: center;
z-index: 1;
`
const Text = styled.h2`
text-align: center;
color: white;

@media screen and (max-width: 520px ) {
  font-size: 30px
}
`

const Button = styled.button`
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
