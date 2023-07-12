import React from 'react'
import styled from 'styled-components'
import sesameSeeds from '../Hero/HeroImages/sesameSeeds.jpeg'
import industrialMachines from '../Hero/HeroImages/industrialMachines.jpg'
import Tractor from '../Hero/HeroImages/Tractor.jpeg'
import charcoal from '../Hero/HeroImages/charcoal.jpg'
import cashew from '../Hero/HeroImages/cashew.jpeg'
import Hibiscus from '../Hero/HeroImages/Hibiscus.jpeg'


const Products = () => {
  return (
    <Container>
       <Text>Products that We Export/Import</Text>
       <p>We are chiefly into Imports and Exports of Agricultural produce and Industrial Machinery</p>

       <Cards>
        
        <Card1>
            <Image src = {sesameSeeds} />
            <ProductName>Sesame Seed</ProductName>
        </Card1>

        <Card1>
            <Image src = {industrialMachines} />
            <ProductName>Industrial Machines</ProductName>
        </Card1>

        <Card1>
            <Image src = {Tractor} />
            <ProductName>Tractors</ProductName>
        </Card1>

        <Card1>
            <Image src = {charcoal} />
            <ProductName>Charcoal</ProductName>
        </Card1>

        <Card1>
            <Image src = {cashew} />
            <ProductName>Cashew</ProductName>
        </Card1>

        <Card1>
            <Image src = {Hibiscus} />
            <ProductName>Hibiscus</ProductName>
        </Card1>

        <Card1>
            <Image src = {sesameSeeds} />
            <ProductName>Sesame Seed</ProductName>
        </Card1>

        <Card1>
            <Image src = {sesameSeeds} />
            <ProductName>Sesame Seed</ProductName>
        </Card1>

       </Cards>
    </Container>
  )
}

export default Products

const Image = styled.img`
height: 70%;
`

const ProductName = styled.div`
height: 20%;
color: black;
margin-top:30px
`

const Card1 = styled.div`
height: 280px;
width: 300px;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding-bottom: 10px;
border-radius: 5px;
margin-right: 10px;
margin-left:10px
`

const Cards = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 20px;

@media screen and (max-width:375px ) {
    align-items: center;
}
`


const Text = styled.h3`
text-align: center;
display: flex;
color: red
`

const Container = styled.div`
/* height: 50vh; */
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
/* gap: 30px; */
p{
    text-align: center;
}
`