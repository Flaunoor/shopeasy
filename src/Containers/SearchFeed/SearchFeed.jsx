import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { ProductCart } from '../../Componants';

import './SearchFeed.scss';
import { Box, Stack } from '@mui/material';
import { wrap } from 'framer-motion';
const SearchFeed = () => {

  const {searchTerm} = useParams();
  const [products , setProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () => {
        try{
            const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
            if(!response.ok){
                throw new Error('Did not receive expected Data');
            }
            const jsondata = await response.json();
            setProducts(jsondata?.products)
        }
        catch(error){
            console.error('Error fetching data:', error);
        }
       
    }
    getProducts();

  },[searchTerm])

  return (
    <Stack
        direction='row'
        gap={1}
        flexWrap='wrap'
        justifyContent='center'
        alignContent='center'
        alignItems='center'
        marginTop='8rem'
        padding='3rem'
    >
        {products.map((product, index)=>(
            <Box key={index}>
                {product.id && <ProductCart product={product}/>}
            </Box>
        ))}
    </Stack>
  )
}

export default SearchFeed