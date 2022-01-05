import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'


const Container = styled.div`
    font-size: 14px;
    font-weight: 500;
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({padding: '5px'})}

`

const Announcement = () => {
    return (
        <Container>
            Asymmetrical brooklyn skateboard, blog swag selvage shoreditch tattooed. 
        </Container>
    )
}

export default Announcement
