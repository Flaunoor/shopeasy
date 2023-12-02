import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {MUI} from '../../Constants';

import './Footer.scss';
const Footer = () => {
    const navigate = useNavigate();

    const handleClickProduct = () =>{
        navigate("/products");
    }

  return (
    <div className='footer'>
      <div className='app__footer'>
            <div className='app__navbar-logo app__flex'>
                <MUI.StoreIcon className='storeIcon'/>
                <p className='p-title'style={{fontStyle:'italic'}} ><Link to='/' style={{textDecoration: 'none', color:'black'}}>
                    Shopeasy</Link>
                </p>
            </div> 
            <div className='app__footer-aboutUs'>
                    <p>ABOUT US</p>
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
            <div className='app__footer-address'>
                <p className='address'>ADDRESS</p>
                <p className='p-text'>123 Fifth Avenue, New York,NY 10160</p>
                <p className='p-text'>contact@info.com</p>
                <p className='p-text'>929-242-6868</p>

            </div>
            <button className='shop-now-btn' onClick={handleClickProduct}>SHOP NOW</button>
      </div>
      <p className='p-text'>Copyright © 2023 Shopeasy | Powered by Shopeasy</p>
    </div>
  )
}

export default Footer