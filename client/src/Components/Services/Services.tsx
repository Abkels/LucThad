import React from 'react'
import { FaRoad } from 'react-icons/fa'
import styled from 'styled-components'
import image3 from '../Hero/HeroImages/containers.jpeg'
import Services2 from './Services2'

const Services = () => {
  return (
   <Div>
        <Container>
            <Container>
        <TextCard>
                <Text> We freight to all over the world, <br /> delivering your products in good time, and safely!!!</Text>
        </TextCard>
        </Container>
        </Container>

        <Services2 />
    </Div>
  )
}

export default Services

const Div = styled.div``
const Container = styled.div`
     width: 100%;
    /* height: 70vh; */
    background-image:url(${image3});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding-bottom: 40px;
    background-color: #a51d0d;
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
  font-size: 0px;
}
`

const Button = styled.button`
height: 60px;
width: 170px;
padding: 20px;
border-radius: 20px;
background-color:#a51d0d ;
border:1px solid white ;
color: white;
font-weight: bold;

:hover{
  background: #d44e3f;
}
`