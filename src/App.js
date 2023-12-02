import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import {Navbar, Home, AllProducts , AboutUs,Contact, SearchFeed , ProductDetails , SignIn, Cart, Footer} from'./Containers';
import { NotFound } from './Componants';
import { useState, useEffect } from 'react';

const App = () => {
  
  const [cartItems, setCartItems] = useState(0);

  useEffect(()=>{
    const userCartInfo = JSON.parse(localStorage.getItem('cart-products'));
    if(userCartInfo){
      setCartItems(userCartInfo.length);
    }else{
      localStorage.setItem('cart-products',JSON.stringify([]));
    }
    
  },[cartItems]);

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar  cartItems={cartItems}/>
      
        
        <Routes>
          <Route path='/' exact element={<Home setCartItems={setCartItems} cartItems={cartItems}/>}/>
          <Route path='/:searchTerm' element={<SearchFeed/>}/>
          
          
          <Route path="/products" element={<AllProducts setCartItems={setCartItems}/>}/>
          <Route path="/products/:id" element={<ProductDetails setCartItems={setCartItems} />}/>

          <Route path="/cart" element={<Cart setCartItems={setCartItems}/>}/>

          <Route path="/signIn" element={<SignIn/>} />
          
          
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='*' element={<NotFound/>}/>


            
        </Routes>
        <Footer/> 

      </div>

    </BrowserRouter> 
  );
}

export default App