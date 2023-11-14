import {MUI} from '../../Constants';
import {motion} from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {AiFillEye, AiOutlineShoppingCart} from 'react-icons/ai'

import './ProductCart.scss';

const ProductCart = ({product, setCartItems}) => {
  
  const hundleAddToCart =()=>{
        const userCartItems = JSON.parse(localStorage.getItem('cart-products'));

        const updatedUserCartItems = [...userCartItems, product];
        localStorage.setItem("cart-products", JSON.stringify(updatedUserCartItems));
        setCartItems(updatedUserCartItems.length);
  
    }

  return (
    
      <div className='app__productCart-SingleC app__flex'>
          <div className='app__productCart-img app__flex'>
                <img src={product?.thumbnail} alt={product?.title}/>

                <motion.div
                    whileInView={{opacity:[0,1]}}
                    transition={{duration:0.25, ease:'easeInOut',staggerChildren: 0.5}}
                    className='app__productCart-hover app__flex'
                >
                    <NavLink to={product?.id && `/products/${product.id}`}>
                        <motion.div
                            whileInView={{scale:[0,1]}}
                            whileHover={{scale:[1,0.9]}}
                            transition={{duration:0.25}}
                            className='app__flex'
                        >
                        <AiFillEye/>
                        </motion.div> 

                    </NavLink>
                
                    <motion.div
                        whileInView={{scale:[0,1]}}
                        whileHover={{scale:[1,0.9]}}
                        transition={{duration:0.25}}
                        onClick={hundleAddToCart}
                        className='app__flex'
                    >
                        <AiOutlineShoppingCart/>
                    </motion.div> 
                
                </motion.div>
          </div>


            <div className='app__productCart-info app__flex'>
                <h2>{product?.title.slice(0,17)}</h2>
                <MUI.Rating value={product?.rating} precision={0.5} size="small" readOnly  />
                <p className='p-text'>$ {product?.price}</p> 
                 
            </div>
            
      </div> 
   
  )
}

export default ProductCart