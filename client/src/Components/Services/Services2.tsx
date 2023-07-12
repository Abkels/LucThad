import React from 'react'
import styled from 'styled-components'
import image1 from '../Hero/HeroImages/image1.jpg'
import Truck from '../Hero/HeroImages/Truck.jpeg'
import freight from '../Hero/HeroImages/freight.webp'
import {GrFormNext} from 'react-icons/gr'

const OurService = () => {
  return (
    <Container>
            <GlobalProvider>
                <Text>Our Services</Text>
            </GlobalProvider>

            <Cards>
                <Card1>
                  <Img src= {image1}/>
                  <MainText>
                    <SubHeading>
                      <Title>Imports and Exports</Title>
                    </SubHeading>

                    <Txt>We offer exports and import services <br /> to and from any part of the world</Txt>

                  </MainText>
                </Card1>

                <Card1>
                  <Img src= {Truck}/>
                  <MainText>
                    <SubHeading>
                      <Title>Haulage</Title>
                    </SubHeading>

                    <Txt>We offer Haulage services any <br /> destination in Nigeria</Txt>

                  </MainText>
                </Card1>

                <Card1>
                  <Img src= {freight}/>
                  <MainText>
                    <SubHeading>
                      <Title>Freights Forwarding</Title>
                    </SubHeading>

                    <Txt>We offer exports and import services <br /> to and from any part of the world</Txt>

                  </MainText>
                </Card1>

                
                <Card1>
                  <Img src= {freight}/>
                  <MainText>
                    <SubHeading>
                      <Title>Freights Forwarding</Title>
                    </SubHeading>

                    <Txt>We offer exports and import services <br /> to and from any part of the world</Txt>

                  </MainText>
                </Card1>

                
                <Card1>
                  <Img src= {freight}/>
                  <MainText>
                    <SubHeading>
                      <Title>Freights Forwarding</Title>
                    </SubHeading>

                    <Txt>We offer exports and import services <br /> to and from any part of the world</Txt>
                  </MainText>
                </Card1>

                
                <Card1>
                  <Img src= {freight}/>
                  <MainText>
                    <SubHeading>
                      <Title>Maritime and Consulting</Title>
                    </SubHeading>

                    <Txt>We offer exports and import services <br /> to and from any part of the world</Txt>
                  </MainText>
                </Card1>
   
                <Card1>
                  <Img src= {freight}/>
                  <MainText>
                    <SubHeading>
                      <Title>Freights Forwarding</Title>
                    </SubHeading>
                    <Txt>We offer exports and import services <br /> to and from any part of the world</Txt>
                  </MainText>
                </Card1>

                <Card1>
                  <Img src= {freight}/>
                  <MainText>
                    <SubHeading>
                      <Title>Ship Chandelling</Title>
                    </SubHeading>
                    <Txt>We deal in supplying required commodities for a shipping <br />  vessel and its crew</Txt>
                  </MainText>
                </Card1>
            </Cards>
    </Container>
  )
}

export default OurService

const Icn = styled.div`
  margin-top: 7px;
  font-size: 20px;
  color: red;
`
const Title = styled.h3`
  font-size : 20px;
  font-weight: bold;
  text-align: center;
  border-bottom: 2px solid #d51d07 ;
 width: 200px;
  margin-left: 40px
`

const SubHeading = styled.div`
margin-left: 5px;
`
const Txt = styled.div`
text-align: center;
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
const Card1 = styled.div`
height: 290px ;
width: 300px;
display: flex;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding-bottom: 10px;
border-radius: 5px;
margin-right: 10px;
margin-left: 10px
`

const GlobalProvider = styled.div`
height: 100px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
/* background-color:green; */
`
const Img = styled.img`
height: 50%
`



