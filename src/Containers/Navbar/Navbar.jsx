import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {MUI} from '../../Constants';

import { HiMenuAlt4, HiX } from 'react-icons/hi';


import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {Searchbar} from '../../Componants';
import {motion} from 'framer-motion';

import './Navbar.scss'
const Navbar = ({cartItems}) => {

  const [toggle, setToggle] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [user, setUser] = useState("");
  

  const navigate = useNavigate();


  useEffect(()=>{
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    if(userInfo){
      setUser(userInfo);
      setSignIn(true);
    }

   

  },[signIn]);


  

  


  /**Sign out Log In button  ______________*/
  const handleSignInClick = () =>{
    if(signIn){ /**if it is true  sign out*/
     localStorage.clear();
     setSignIn(false);
     window.location.reload();
     navigate("/"); 

    }else{ /**if it is false  login*/
      navigate('/signIn');
    }
    
  }
  /**_____________________________________ */
  



  
  return (
    <div  className='app__navbar'>

      <div  className='app__navbar-links'>

        <NavLink 
          to='/' 
          className='Navbar__NavLink p-text'>
          Home
        </NavLink>
          
        <NavLink 
          to='/about' 
          className='Navbar__NavLink p-text'>
          About
        </NavLink>
          
          
        <NavLink 
          to='/contact' 
          className='Navbar__NavLink p-text'>
          Contact
        </NavLink>
        
      </div> 

      <div className='app__navbar-logo app__flex'>
        <MUI.StoreIcon className='storeIcon'/>
        <p className='p-title'style={{fontStyle:'italic'}} ><Link to='/' style={{textDecoration: 'none', color:'black'}}>Shopeasy</Link></p>
      </div> 

      <div className='nav-searchbar'><Searchbar/></div>

      <div className=' app__navbar-right-div'>

        <div className='bin-div'>
        <p className='quantity'>{cartItems}</p> 
         <MUI.ShoppingCartIcon  className='shop-icon' fontSize='large' />
        </div>
        <MUI.FavoriteIcon className='favorate-icon' fontSize='large'/> 

        <button className='sign-out-btn' onClick={handleSignInClick}>{signIn ? 'Log Out' : 'Log In'}</button> 

        <MUI.Avatar
          alt="User Profile"
          src={user?.image || ''}
          sx={{backgroundColor:'rgba(128, 0, 128, 0.288)'}}
        >
          <MUI.AccountCircleIcon fontSize="large"/> 
        </MUI.Avatar> 

      </div>



      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick= {()=>setToggle(true)}/>
        
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className='motion-div'
          >
            <HiX onClick={() => setToggle(false)} />
            <div className='search-bar-div'><Searchbar/> </div> 
            
            <div className='icons-div'>
             
               
              <div className='bin-div'>
                <p className='quantity'>{cartItems}</p> 
                <MUI.ShoppingCartIcon  className='shop-icon' fontSize='large' />
              </div>
             
              <MUI.FavoriteIcon className='favorate-icon' fontSize='large'/> 

              <button className='sign-out-btn' onClick={handleSignInClick}>Sign Out</button> 

              <MUI.Avatar
                alt="User Profile"
                src={user?.image || ''}
                sx={{backgroundColor:'rgba(128, 0, 128, 0.288)'}}
              >
              <MUI.AccountCircleIcon fontSize="large"/> 
              </MUI.Avatar> 
            </div>

            <div className='navLink-div'>
              <NavLink 
                to='/' 
                className='Navbar__NavLink p-text'>
                Home
              </NavLink>
                
              <NavLink 
                to='/about' 
                className='Navbar__NavLink p-text'>
                About
              </NavLink>
                
                
              <NavLink 
                to='/contact' 
                className='Navbar__NavLink p-text'>
                Contact
              </NavLink>

            </div>
            
        
            
          </motion.div>
        )}
      </div>



      
    </div>
  )
}

export default Navbar


