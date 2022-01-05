import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import {mobile} from '../responsive'


const Container = styled.div`

`

const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({margin: '0px 20px', display: 'flex', flexDirection: 'column'})}

`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: '0px'})}

`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: '10px 0px'})}

`
const Option = styled.option`
    
`

const ProductList = () => {
    
    const location = useLocation();

    // Get category url parameter using pathname property of useLocation hook
    const category = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    /**
     * Helper method to update filters object when color or size dropdown menu selection is changed
     */
    const handleFilter = (e) => {
        // Get name and value of select option
        const value = e.target.value;
        const name = e.target.name;
        // Update filters
        setFilters({
            ...filters,
            [name]: value
        });
    }

    /**
     * Helper method to update sort value when selection on dropdown menu is changed
     *  
     */
    const handleSort = (e) => {
        setSort(e.target.value);
    }

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                    <Select name="color" onChange={handleFilter}>
                        <Option disabled>Color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilter}>
                        <Option disabled>Size</Option>
                        <Option>XS
                            
                        </Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select name="sort" onChange={handleSort}>
                        <Option value="newest">Newest</Option>    
                        <Option value="high">Price (highest)</Option>
                        <Option value="low">Price (lowest)</Option>
                    </Select>    
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
