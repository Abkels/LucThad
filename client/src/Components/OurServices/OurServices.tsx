import React from 'react'
import styled from 'styled-components'
import GlobalCard from '../GlobalCard'
import image1 from '../Hero/HeroImages/image1.jpg'
import Truck from '../Hero/HeroImages/Truck.jpeg'
import freight from '../Hero/HeroImages/freight.webp'
import {GrFormNext} from 'react-icons/gr'

const OurServices = () => {
  return (

    <Container>
        <GlobalCard 
    img = {image1}
    title = 'Imports and Exports'
    txt = {`We offer exports and import services  to and from any part of the world`}
    />
    
    <GlobalCard 
    img = {image1}
    title = 'hi'
    txt =  'jjjj'
    />
    <GlobalCard 
    img = {image1}
    title = 'hell'
    txt =  'kdkdk'
    />
    <GlobalCard 
    img = {image1}
    title = 'kdkdk'
    txt =  ''
    />
    <GlobalCard 
    img = {image1}
    title = ''
    txt =  ''
    />
    <GlobalCard 
    img = {image1}
    title = ''
    txt =  ''
    />
    <GlobalCard 
    img = {image1}
    title = ''
    txt =  ''
    />
    </Container>
    

  )
}

export default OurServices

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
overflow: hidden;
margin-top: 30px;
`
