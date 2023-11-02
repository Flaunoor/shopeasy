import React from 'react';
import { useNavigate } from 'react-router-dom';


import {images} from '../../Constants';
import { ProductCart } from '../../Componants';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleClickProduct = () =>{
   navigate("/products");
  }
 


  return (
    <div className='app__home'>
      <div className='app__home-header'>
        <img src={images.home} alt='home image'/>
        <div>
          <p className='p-title' style={{fontSize:'80px'}}>ONLINE <span>SHOPPING</span></p>
          <p className='p-title' style={{fontSize:'50px'}}>BUYING HAS BECOME EVEN <span>EASIER</span></p>
          <button className='shop-now-btn' onClick={handleClickProduct}>SHOP NOW</button>
        </div>
      </div>

      <div className='app__home-section1 app__flex'>
        <p className='p-text'>Popular Product</p> 
        <p  style={{fontSize:'60px', fontFamily:'normal serif'}}>TRENDING NOW </p>

         <div style={{width:'100%' ,height:'400px', margin:'  2rem 0'}}>
          <ProductCart/>
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
          <p className='p-title'>WHY CHOOSE US</p>
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