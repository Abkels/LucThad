import React from 'react'
import styled from 'styled-components'

const SignUp = () => {
  return (
    <Container>
        <Card>
            <Heading>
                <i>Get started with LUCTHAD RESOURCES <br /> today!</i>
            </Heading>

            <Inputs>
                <Name placeholder = 'FullName' type = 'text' required/>
                <Email placeholder = 'Email' type = 'text' required/>
                <Password placeholder= 'Password' type= 'password' required/>
                <Button>Sign Up</Button>
                <p>By signing up you agree to Terms of service & <br /> Privacy Policy</p>
            </Inputs>
        </Card>
    </Container>
  )
}

export default SignUp

const Name = styled.input`
margin-top: 30px;
padding: 10px;
width: 200px;
outline: none;
border: none;
border-bottom: 1px solid grey;
border-radius: 0 0 5px 5px;
`

const Email = styled.input`
margin-top: 30px;
padding: 10px;
width: 200px;
outline: none;
border: none;
border-bottom: 1px solid grey;
border-radius: 0 0 5px 5px;
`
const Password = styled.input`
margin-top: 30px;
padding: 10px;
width: 200px;
outline: none;
border: none;
border-bottom: 1px solid grey;
border-radius: 0 0 5px 5px;
`
const Button = styled.button`
width: 190px;
padding:10px;
margin-top: 30px;
background-color:#d51d07 ;
border-radius: 10px;
border: 1px solid #d51d07;
color: white;
width: 220px;
`

const Inputs = styled.form` 
display: flex;
align-items: center;
flex-direction: column;
p{
    font-size: 11px;
}
`

const Heading = styled.div`
text-align: center;
margin-top: 40px;
font-weight: bold;
font-size: 14px;
`

const Card = styled.div`
height: 420px;
width: 300px;
background-color: #ffffff;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 5px;
`

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color:#eaebf5;
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-direction: column */
`