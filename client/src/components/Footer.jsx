import { EmailOutlined, Facebook, Instagram, PhoneOutlined, Pinterest, RoomOutlined, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'


const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: 'column'})}

`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``

const Description = styled.div`
    margin: 20px 0px;
    font-size: 15px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
`
const Center = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({display: 'none'})}

`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({backgroundColor: '#fff8f8'})}

`

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Payment = styled.img`
    width: 75%;
`



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>MyShop</Logo>
                <Description>I'm baby shaman keytar pinterest bitters. Humblebrag narwhal health goth, twee hexagon shabby chic authentic. Heirloom leggings try-hard meh plaid direct trade taxidermy.</Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men's Fashion</ListItem>
                    <ListItem>Women's Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms of Service</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomOutlined style={{marginRight: '10px'}}/>
                    123 Hipster Lane, Mumblerap 5
                </ContactItem>
                <ContactItem>
                    <PhoneOutlined style={{marginRight: '10px'}}/>
                    +1 234 567 8910
                </ContactItem>
                <ContactItem>
                    <EmailOutlined style={{marginRight: '10px'}}/>
                    example@example.com
                </ContactItem>
                <Payment src={'https://i.ibb.co/Qfvn4z6/payment.png'}/>
            </Right>
        </Container>
    )
}

export default Footer
