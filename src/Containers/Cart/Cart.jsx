import React from 'react';
import {useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';

import './Cart.scss';

const Cart = ({setCartItems}) => {
 
  const [cartData , setCartData] = useState([]);
  let total=0;
  let discountTotal=0;

  const hundletotalProduct = (cartData) =>{
    cartData.map((product)=>(
      total =  total + product.total
    ))
    setTotalPrice(total);

    cartData.map((product)=>(
      discountTotal =  discountTotal + product.discountedPrice
    ))
    setTotalDiscountPrice(discountTotal);
  }
  

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscountPrice, setTotalDiscountPrice] = useState(0);
  useEffect(()=>{
    const cart_data = JSON.parse(localStorage.getItem('cart-products'));
    if(cart_data){
      setCartData(cart_data);
    }

    hundletotalProduct(cart_data);
    
   
  },[])

  const handleDeleteProduct = (productId) =>{
    const cartData_updated = [...cartData];
    const indexToDelete = cartData_updated.findIndex((i) => i.id === productId);
    if (indexToDelete !== -1) {
      cartData_updated.splice(indexToDelete, 1);
      setCartData(cartData_updated);
      setCartItems(cartData_updated.length);
      localStorage.setItem("cart-products", JSON.stringify(cartData_updated));
      hundletotalProduct(cartData_updated);
    } 
    
    
  };

  return (
    <div className='app__cart'>
     <p className='p-big'>Cart</p>
     <p className='p-title'>Shopping cart</p>
    
      
     
     <div className='div_tables'>
        <table className='product_table'>
          <tr className='p-text tr-title'>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Discounted Price</td>
            <td>Subtotal</td>
            <td> </td> 
          </tr> 
          
          
          
          {
            cartData.map((product, index)=>(
              
              <tr key={index} className='tr-items'>
              
              <td className='p_pic_title'>   
                  <div>
                    <img src={product?.thumbnail} alt={product?.title}/>
                    <NavLink to={product?.id && `/products/${product.id}`} style={{textDecoration: 'none'}}>
                      <p className='p-text'>{product?.title}</p>
                    </NavLink>
                  </div>
              </td>
              <td className='p-text'>{'$' + product?.price}</td> 
              <td className='p-text'>{product?.quantity}</td> 
              <td className='p-text'>{product?.discountedPrice}</td>
              <td className='p-text'>{product?.total}</td>
              <td><div onClick={() => handleDeleteProduct(product?.id)}><CancelIcon className='cancelicon'/></div> </td>
              </tr> 
              
            ))
          } 
       </table> 

        <table className='price_table'>
          <tr className='p-text tr-title'>
            <td>Cart Totale</td>
            <td></td>
          </tr>
          
          <tr className='p-text tr-items'>
            <td>Totale Price</td>
            <td>{'$'+ totalPrice}</td>
          </tr>

          <tr className='p-text tr-items'>
            <td>Discounted Price</td>
            <td> {'$' + totalDiscountPrice} </td>
          </tr>

        </table>
     </div>

    </div>
    
  )
}

export default Cart