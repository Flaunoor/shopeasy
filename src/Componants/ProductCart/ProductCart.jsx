import React from 'react';
import {Stack  , Box} from '@mui/material';


import './ProductCart.scss';

const ProductCart = () => {
  return (
    <Stack
        className='app__product-cart app__flex'
    >
      <img/>
      <p className='p-text'>Product Title</p>
      <p className='p-text'>Price</p> 
    </Stack>
  )
}

export default ProductCart