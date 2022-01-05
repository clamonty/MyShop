import { Add, Remove } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import {mobile} from '../responsive'
import { publicRequest, adminToken } from '../requestMethods'
import axios from 'axios'


const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection: 'column', padding: '10px'})}

`
const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    max-width: 100%;
    height: 90vh;
    object-fit: contain;
    ${mobile({height: '40vh'})}

`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: '0px 10px'})}

`

const Title = styled.h1`
    font-weight: 200;
`

const Description = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 60%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: '100%'})}

`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 5px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: '75%'})}

    
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
`

const Button = styled.button`
    cursor: pointer;
    padding: 10px;
    border: 2px solid teal;
    font-weight: 500;
    background-color: white;

    &:hover {
        background-color: #f8f4f4;
    }
`



const Product = () => {
    const location = useLocation();
    const productId = location.pathname.split('/')[2];
    
    console.log(productId);

    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');

    // useEffect to fetch product with specific ID
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:5001/api/products/find/${productId}`, {
                    headers: {
                        token: `Bearer ${adminToken}`
                    }
                });
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                
            }
        }

        getProduct();
    }, [productId])

    // Increment or decrement item quantity from [1, 100]
    const handleQuantity = (action) => {
        if (action === "decrease") {
            if (quantity > 1)
                setQuantity(quantity - 1);
        } else if (action === "increase" ) {
            if (quantity <= 100)
                setQuantity(quantity + 1);
        }
    }


    const handleClick = () => {
        // Update cart
    }

    if(!loading) {
        return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src={product.image}/>
                </ImageContainer>
                <InfoContainer>
                        <Title>{product.title}</Title>
                        <Description>{product.description}</Description>
                        <Price>$ {product.price}</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                {product.color.map(color=>(
                                    <FilterColor color={color} key={color} onClick={() => setColor(color)}/>
                                ))}
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize onChange={(e) => setSize(e.target.value)}>
                                    {product.size.map(size => (
                                        <FilterSizeOption key={size}>{size}</FilterSizeOption>
                                    )) }
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove onClick={() => handleQuantity('decrease')} style={{cursor: 'pointer'}}/>
                                <Amount>{quantity}</Amount>
                                <Add onClick={() => handleQuantity('increase')} style={{cursor: 'pointer'}}/>
                            </AmountContainer>
                            <Button onClick={handleClick}>Add to Cart</Button>
                        </AddContainer>
                    </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
        )
    } else {
        return <Container>Loading...</Container>
    }
}

export default Product
