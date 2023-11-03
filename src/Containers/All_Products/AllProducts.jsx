import React from 'react'
import { useState, useEffect } from 'react';
import { Stack, Box } from '@mui/material';
import { ProductCart } from '../../Componants';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './AllProducts.scss';


const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    const getCategories = async()=>{
      try{
          const response = await fetch('https://dummyjson.com/products/categories');
          if(!response.ok){
              throw new Error('Did not receive expected Data');
          }
          const jsondata = await response.json();
          setCategories(jsondata)

      }catch(error){

      }
  }
  getCategories();


  },[])


  
  useEffect(()=>{
    const getProducts = async() =>{
      try{
        const response = await fetch('https://dummyjson.com/products');
        if(!response.ok){
          throw new Error('Did not receive expected Data');          
        }
        const jsonData = await response.json();
        setAllProducts(jsonData?.products)

      }catch(error){
        console.error('Error fetching data:', error);
      }
    
    }
    getProducts();
  },[])

  const settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3500,
    
    
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
   <Stack
      direction='column'
      gap={2}
      className='app__allProducts'
    >

     <div className='slider-container '>
      <Slider  {... settings}  className='sliderCategories'>
          {categories.map((category, index)=>(
            <div className='category-item p-text '  key={index}>
              <p className='p-dot'>.</p>
              <p>{category}</p>
            </div>
          ))}
        </Slider>
     </div> 
      
      
     <Stack
        direction='row'
        gap={1}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        
      >
        {allProducts.map((item ,index)=>(
            <Box key={index}>
              {item.id && <ProductCart product ={item} /> }

            </Box> 

          ))}

      </Stack>
   </Stack>
  )
}

export default AllProducts