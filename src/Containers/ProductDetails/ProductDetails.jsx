import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';

import {MUI} from '../../Constants';

import './ProductDetails.scss'

const ProductDetails = ({setCartItems}) => {

  const {id} = useParams();
  const [product, setProduct] = useState([]);

  const [quantity, setQuantity] = useState(0);

  useEffect(()=>{
     const getDetails = async () => {
        try{
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            if(!response.ok){
                throw new Error('Did not receive expected Data');
            }
            setProduct(await response.json());
            
        }
        catch(error){
            console.error('Error fetching data:', error);
        }
       
    }
     getDetails();
  },[id]);

  /**handling the visibility of the picture ______________________*/
  const [isPictureVisible, setisPictureVisible] = useState(false);
  const [selectedPic, setSelectedPic] = useState();
  const handlePictureClick = (item) =>{
    setSelectedPic(item);
    setisPictureVisible(true);
  };
  /**____________________________________________________________ */


  const handleAddClick = () =>{
    setQuantity(quantity+1);

  }
  const handleremoveClick = () =>{
    if(quantity<=0){
      return 0;
    }
    setQuantity(quantity-1);
  }

  const handleAddToCartClick = () =>{
    const userCartItems = JSON.parse(localStorage.getItem('cart-products'));
        const updatedUserCartItems = userCartItems.concat(product);
        localStorage.setItem("cart-products", JSON.stringify(updatedUserCartItems));
        setCartItems(updatedUserCartItems.length);
  }
   

  return (
    <div className='app__productDetails'>
      <div className='app__product-img'>
       <img src={isPictureVisible ? selectedPic : product?.thumbnail} alt={product?.title} /> 
        <div className='product-img-set'>
          {product?.images?.map((image,index)=>(
            <div key={index} onClick={() => handlePictureClick(image)}>
              <img src={image} alt={product?.title} style={{ borderColor : selectedPic === image ? 'purple' : 'transparent'}}/>
            </div>
          ))}
        </div> 

      </div>

     <div className='app__product-info'>
       <p className='p-text pro-category'>{product?.category}</p>
       <p className='p-text pro-title'>{product?.title + " | " + product?.brand}</p> 
       <p className='p-text '> <span className='p-text pro-price'>
        {'$ '+ product?.price}</span>  & Free shipping
       </p>
       <p className='p-text'> Discount:  <span className='pro-discount'>{product?.discountPercentage + '%'}</span>  </p>
       <p className='p-text'>Quantity: {product?.stock +" items "} <span className='inStock'>In Stock</span></p>
       <p className='p-text'>Description: {product?.description}</p>
       <MUI.Divider className='devider'/>

       <div className='quantity-div'>
          <div>
              <button onClick={handleAddClick}>+</button>
              <input defaultValue={0}  onChange={(e) => setQuantity(e.target.value)} value={quantity}/>
              <button onClick={handleremoveClick}>-</button>
          </div>
          <button className='add-to-cart-btn'onClick={handleAddToCartClick} >ADD TO CART</button>

       </div> 


      </div> 
    </div>
  )
}

export default ProductDetails