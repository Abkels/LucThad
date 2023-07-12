import React from 'react'
import styled from 'styled-components'
import Van from '../Hero/HeroImages/Van.webp'


const About = () => {
    
  return (
    <Container>
        <Holder>
            <Heading>About LUCTHAD RESOURCES</Heading>
            {/* <SubHeading>OVERVIEW</SubHeading> */}
           
                <Left>
                    <p> <i>LUC-THAD INT’L RESOURCES LTD</i> (RC1536815) is a company incorporated 
                        under <br /> the “Company and allied matters act.’
                    </p>

                    <p>
                         Manned by professionals with a wealth of experience and reputable, we <br /> continue to 
                        provide outstanding services delivery to our clients.
                    </p>

                    <p>
                            We are specialized in the following services which include, importation, <br /> exportation of 
                            cashew nuts, charcoal briquettes, sesame seeds, hibiscus flowers, <br /> ginger, Arabic gum, 
                            food stuff, shea butter, industrial machineries, personal effect, <br /> etc.
                    </p>

                    <p>
                            This profile would discuss more on our services and core competences.
 
                    </p>

                </Left>
                {/* <Right>
                    <img src={Van} />
                </Right> */}

                <Vission>
                    <Title>
                        MISSION, VISSION, VALUES
                    </Title>
                    <p>
                       <span>VALUES</span>  Customer-centricity, Reliability, Transparency, teamwork & integrity 
                    </p>

                    <p>
                   <span>MISSION </span> 
                         We aim to build a brand that will be one of the biggest exporters of <br /> cashew nuts,
                        charcoal briquettes, sesame seed, hibiscus flowers, ginger, Arabic gum, <br /> food stuff, shea 
                        butter, industrial machineries, personal effects (Addition) from Africa <br /> to other parts of 
                        the world.
                  </p>

                  <p>
                       <span>VISSION </span>  
                        To create a sustainable business by delivering consistently great customer <br /> expectation.

                  </p>
                </Vission>

            

        </Holder>
    </Container>
  )
}

export default About

const Vission = styled.div` 
span{
    font-weight: bold
}
`
const Title = styled.h3``

// const TextHold = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// margin-left: 60px;
// gap: 40px;

// @media screen and (max-width: 768px) {
//     flex-direction: column
// }
// `
const Right = styled.div`

`

const Left = styled.div`
/* width: 250px;
height: 450px */
i{
    font-weight: bold;
}
`

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
/* background-color: red; */
padding-bottom: 50px;
`
const Heading = styled.div`
text-align: center;
font-weight: bold;
font-size: 30px;
margin-top: 20px;
`
const SubHeading = styled.div`
font-weight: bold;
`
const Holder = styled.div`
width: 93%;
`
const Text = styled.div``
const Image = styled.div``
