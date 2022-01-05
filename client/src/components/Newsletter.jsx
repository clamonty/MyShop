import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'


const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 30px;
    ${mobile({textAlign: 'center'})}

`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width: '80%'})}


`
const Input = styled.input`
    border: none;
    &:focus{
        outline: none;
    }
    padding-left: 20px;
    flex: 8;
`
const Button = styled.button`
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: teal;
    color: white;
`



const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>I'm baby chia bushwick raclette craft beer green juice lo-fi +1</Description>
            <InputContainer>
                <Input placeholder="Your email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
