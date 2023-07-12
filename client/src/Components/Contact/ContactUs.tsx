import React, {useState} from 'react'
import styled from 'styled-components'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {HiOutlineLocationMarker} from 'react-icons/hi'




const ContactUs = () => {

    const [Name, setName] = useState ("")
    const [Email, setEmail] = useState ("")
    const [phoneNumber, setPhoneNumber] = useState ("")
    const [message, setMessage] = useState ("")

  return (
    <Container>
        <Holder>
            
            <Div>
                    <Text>
                        Reachout to us!
                    </Text>

                    <Div2>
                            <Icn>
                                 <AiOutlinePhone />
                            </Icn>
                            <Number>+2349027386356, +2348034940336 </Number>
                    </Div2>

                    <Div2>
                            <Icn>
                            <AiOutlineMail />
                            </Icn>
                            <Number>+2349027386356, +2348034940336 </Number>
                    </Div2>

                    <Div2>
                            <Icn>
                            <HiOutlineLocationMarker />
                            </Icn>
                            <Number>Address: No. 4 Oniru Street Apapa Lagos </Number>
                    </Div2>
                    
                    
            </Div>
            
            <ContactForm>
                <Input onChange={(e )=>{setName(e.target.value)}} placeholder='Your Fullname' required/>
                <Input onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your Email' required/>
                <Input onChange={(e)=>{setPhoneNumber(e.target.value)}} placeholder='Enter your Phone Number' required/>
                <Message onChange={(e)=>{setMessage(e.target.value)}} placeholder='Message' required/>
                <Button type='submit'>Submit</Button>
            </ContactForm>
        </Holder>
    </Container>
  )
}

export default ContactUs

const Text = styled.h1`
@media screen and (max-width:768px) {
    text-align: center;
}
`

const Icn = styled.div`
margin-left: 5px;
color: red;
`
const Address = styled.div``
const Div = styled.div`
flex-direction: column;

`
const Div2 = styled.div`
display: flex;
align-items: center;
`
const Number = styled.div``

const Card = styled.div`

`

const Message = styled.input`
margin-top: 30px;
width: 180px;
height: 70px;
padding: 8px;
border-radius:5px;
border: 1px solid grey;
`

const Button = styled.button`
margin-top: 30px;
padding: 13px;
margin-right:110px;
background-color:#d51d07;
color: white;
border:1px solid white;
border-radius: 10px
`

const Input = styled.input`
margin-top: 40px;
width: 180px;
padding: 8px;
border-radius:5px;
border: 1px solid grey;
`

const  Container = styled.div`
    width:100%;
    /* height: 60vh; */
    background-color: #ffffff;
    padding-bottom: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Holder = styled.div`
width: 50%;

display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 768px){
    flex-direction: column;
}
`
const ContactForm = styled.form`
height: 480px;
width: 300px;
background-color: #ffffff;
display: flex;
align-items: center;
margin-top: 80px;
border: 1px solid grey;
/* justify-content: center; */
flex-direction: column;

`