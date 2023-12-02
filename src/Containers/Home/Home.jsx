import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect , useState } from 'react';

import {images} from '../../Constants';
import { ProductCart } from '../../Componants';
import './Home.scss';

import Slider from "react-slick";
import { Box } from '@mui/material';



const Home = ({cartItems, setCartItems}) => {
  const navigate = useNavigate();

  const handleClickProduct = () =>{
   navigate("/products");
  }

  

  const [products , setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
        try{
            const response = await fetch('https://dummyjson.com/products');
            if(!response.ok){
                throw new Error('Did not receive expected Data');
            }
            const jsondata = await response.json();
            setProducts(jsondata.products);
        }
        catch(error){
            console.error('Error fetching data:', error);
        }
       
    }
    getProducts();
  },[]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
 


  return (
    <div className='app__home'>
      <div className='app__home-header'>
        <img src={images.home} alt='home image'/>
        <div>
          <p className='p-title home-title1' >ONLINE <span>SHOPPING</span></p>
          <p className='p-title home-title2' >BUYING HAS BECOME EVEN <span>EASIER</span></p>
          <button className='shop-now-btn' onClick={handleClickProduct}>SHOP NOW</button>
        </div>
      </div>

      <div className='app__home-section1 app__flex'>
        <p className='p-text section1-p1'>Popular Product</p> 
        <p className='section1-p2'>TRENDING NOW </p>

        <div className='sliderContainer'>
          <Slider {... settings}>
          {products.map((product , index)=>(
          <Box key={index}>  {product.id && <ProductCart product={product} setCartItems={setCartItems}  /> }</Box>
          ))}
          </Slider>
        </div>
          
      </div>

      <div className='app__home-section2'>

        <div className='img-container'>
          <img src={images.home_pic_3}/>
          
        </div>
        

        <div className='p-container'>
          <p className='p-big'>BE ALWAYS ON TREND</p>
          <p className='p-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis,
              pulvinar dapibus leo.
          </p>
          <button className='shop-now-btn' onClick={handleClickProduct}>SHOP NOW</button>
        </div>  

      </div>  


      <div className='app__home-section3'>
        <div className='why-us-div'>
          <p className='p-text'>BEST IN BUSINESS</p>
          <p className='p-big'style={{textAlign:'center'}}>WHY CHOOSE US</p>
          <p className='p-text' style={{textAlign:'center'}}>
            we believe and uphold a policy that the
            customer is always right, which is why we
            worked hard to dedicate a team specifically 
            to focus on understanding our customer needs ... etc
          </p>
        </div>

        
        <div className='services-div'>

          <div>
            <img src={images.discount}/>
            <p className='p-title'>BIG DISCOUNTS</p>
            <p className='p-text'>Lorem, ipsum dolor sit amet consectetur
               adipisicing elit. Expedita, corporis iure
                adipisci non temporibus, sapiente reiciendis </p>
          </div>

          <div>
            <img src={images.shipping}/>
            <p className='p-title'>FREE SHIPPING</p>
            <p className='p-text'>Lorem, ipsum dolor sit amet consectetur
               adipisicing elit. Expedita, corporis iure
                adipisci non temporibus, sapiente reiciendis </p>
            
          </div>

          <div>
            <img src={images.payment}/>
            <p className='p-title'>SECURE PAYMENTS</p>
            <p className='p-text'>Lorem, ipsum dolor sit amet consectetur
               adipisicing elit. Expedita, corporis iure
                adipisci non temporibus, sapiente reiciendis </p>
            
          </div>

          <div>
            <img src={images.order_tracking}/>
            <p className='p-title'>ORDER TRACKING</p>
            <p className='p-text'>
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Expedita, corporis iure
                adipisci non temporibus, sapiente reiciendis 
            </p>
          </div>

        </div>
      </div>  
    </div>
      
   
  )
}

export default Home;