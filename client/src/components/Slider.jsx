import React from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import styled from 'styled-components'
import {sliderItems} from '../data';
import {mobile} from '../responsive'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: 'none'})}

`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => (-100 * props.slide)}vw);
    transition: all 1.5s ease;

`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    display: flex;
    flex-direction: column;
    letter-spacing: 2px;
    align-items: flex-start;
`

const Title = styled.h1`
    font-size: 70px;
`;
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;


const Slider = () => {
    const [slide, setSlide] = React.useState(0);


    const handleClick = (direction) => {
    if (direction === "left") {
        setSlide(slide > 0 ? slide - 1 : 2)
    }

    if (direction === "right") {
        setSlide(slide < 2 ? slide + 1 : 0);
    }
}


    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slide={slide}>

                {sliderItems.map(item => {
                    return (
                        <Slide key={item.id} bg={item.bg}>
                            <ImageContainer>
                                <Image src={item.img}></Image>
                            </ImageContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Description>{item.desc}</Description>
                                <Button>Shop Now</Button>
                            </InfoContainer>
                        </Slide>
                    )
                })}
                
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
