import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import SingleProduct from './SingleProduct';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`;

const Products = ({category, filters, sort}) => {
    const location = useLocation();
    const isHome = location.pathname.split('/').includes('home');
    console.log(isHome);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // UseEffect to fetch all products
    useEffect(() => {
        // Fetch all products or queried products based on category
        const getProducts = async () => {
            try {
                // Retrieve axios response based on url param and set products to that data
                const response = await axios.get(category ? `http://localhost:5001/api/products?category=${category}` : 'http://localhost:5001/api/products');
                setProducts(response.data);
                setFilteredProducts(response.data);
            } catch (error) {
                
            }
        }

        getProducts();
    }, [category]);

    // UseEffect to filter products
    useEffect(() => {
        if (filters) {
            let temp = products;
            // Array of filters [key, value] pairs
            let filterArr = Object.entries(filters);
    
            // For each pair of [key, value] filter pairs, filter down the product array
            // Check if the product[key] array includes the filter value
            // If it does, include it in the filtered array
            for (let i = 0; i < filterArr.length; i++) {
                temp = temp.filter(product => {
                    return product[filterArr[i][0]].includes(filterArr[i][1]);
                });
            }
            
            setFilteredProducts(temp);
        }
    }, [products, category, filters])

    // useEffect to sort products
    useEffect(() => {
        // Sorting functions based on sort value
        if(sort === "newest") {
            let newFilteredProducts = filteredProducts.sort((a, b) => {
                return a.createdAt - b.createdAt;
            });
            setFilteredProducts(newFilteredProducts);
        } else if (sort === "high") {
            let newFilteredProducts = filteredProducts.sort((a, b) => {
                return b.price - a.price;
            });
            setFilteredProducts(newFilteredProducts);
        } else if (sort === "low") {
            let newFilteredProducts = filteredProducts.sort((a, b) => {
                return a.price - b.price;
            });
            setFilteredProducts(newFilteredProducts);
        }
    }, [sort])

    // Display all filtered products if filtering
    // Else if homepage, display 8 products
    // Else if product page no filters, display all products
    return (
        <Container>
            {category ? filteredProducts.map(item => {
                return <SingleProduct key={item._id} item={item}/>
            }) : isHome ? filteredProducts.splice(0,8).map(item => {
                return <SingleProduct key={item._id} item={item}/>
            }) : filteredProducts.map(item => {
                return <SingleProduct key={item._id} item={item}/>
            })}
        </Container>
    )
}

export default Products
