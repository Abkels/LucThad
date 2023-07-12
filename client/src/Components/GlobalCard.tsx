import React from 'react'
import styled from 'styled-components'

import image1 from '../Hero/HeroImages/image1.jpg'
import Truck from '../Hero/HeroImages/Truck.jpeg'
import freight from '../Hero/HeroImages/freight.webp'
import {GrFormNext} from 'react-icons/gr'
import {NavLink} from 'react-router-dom'

interface iprops {
    img : string;
    title : string;
    txt: string;
}

const GlobalCard : React.FC<iprops> = ({img, title, txt}) => {
  return (
    <Container>
        <Cards>
        <Card1 to="/services">
                  <Img src= {img}/>
                  <MainText>
                    <SubHeading>
                      <Title>{title}</Title>
                    </SubHeading>

                    <Txt>{txt}</Txt>

                    <ReadMore><p>Read more</p>
                      <Icn>
                      <GrFormNext/>
                      </Icn>
                       </ReadMore>
                  </MainText>
                </Card1>
        
        </Cards>
                
    </Container>
  )
}

export default GlobalCard

const Icn = styled.div`
  margin-top: 7px;
  font-size: 20px;
  color: red;
`
const Title = styled.h3`
  font-size : 18px;
  font-weight: bold;
  text-align: center;
  border-bottom: 2px solid #d51d07 ;
 width: 200px;
  margin-left: 40px;
`

const SubHeading = styled.div`
margin-left: 5px;
`
const Txt = styled.div`
text-align: center;
font-size: 14px;
`
const ReadMore = styled.div`
display: flex;
align-items: center;
justify-content: center;
/* margin-top: 18px; */
text-align: center;

p{
  color: #d51d07;
  font-weight: bold;
}
`

const MainText = styled.div`
height: 100%;
width: 100%;
/* background-color: blue ; */
display: flex;
flex-direction: column;
`

const SubHeadingHolder = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`

const Container = styled.div`
/* height   : 60vh; */
width: 100%;
/* background-color: green; */
margin-bottom: 120px;
`
const Text = styled. h3`
color: #d51d07 
`

const Cards = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 1rem;
`
const Card1 = styled(NavLink)`
height: 290px ;
width: 280px;
display: flex;
text-decoration: none;
color: black;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding-bottom: 25px;
border-radius: 5px;
margin-right: 10px;
margin-left: 10px;
cursor: pointer;

hover{
transform: scale(0.9);
transition: all 350ms;
}

@media screen and(max-width: 400) {
  align-items: center;
}
`

const Img = styled.img`
height: 50%
`
