import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SignIn = () => {
  return (
    <Container>
        <Card>
            <Heading>
                <i> LUCTHAD RESOURCES</i>
            </Heading>

            <Inputs>
                
                <Email placeholder = 'Email' type = 'text' required/>
                <Password placeholder= 'Password' type= 'password' required/>
                <Button>Submit</Button>
                
                <NavLink to = 'signup'>
                <p> <span>Sign up</span>  if you dont have an account</p>
                </NavLink>
                
            </Inputs>
        </Card>
    </Container>
  )
}

export default SignIn


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
text-decoration: none
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
 `