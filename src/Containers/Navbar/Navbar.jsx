import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {MUI} from '../../Constants';

import { Stack } from '@mui/material';


import {Searchbar} from '../../Componants';

import './Navbar.scss'
const Navbar = () => {

  
  return (
    <Stack direction={'row'} gap={1} className='app__navbar app__flex'>

      <Stack direction={'row'} gap={3} className='app__navbar-links app__flex-start'>

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
        
      </Stack> 

      <div className='app__navbar-logo app__flex'>
        <MUI.StoreIcon className='storeIcon'/>
        <p className='p-title'style={{fontStyle:'italic'}} ><Link to='/' style={{textDecoration: 'none', color:'black'}}>Shopeasy</Link></p>
      </div> 

      <Searchbar/>

      <div className=' app__navbar-right-div'>

        <MUI.ShoppingCartIcon  className='shop-icon' fontSize='large' />
        <MUI.FavoriteIcon className='favorate-icon' fontSize='large'/> 

        <button className='sign-out-btn'>Sign Out</button> 

        <MUI.Avatar>
         <MUI.AccountCircleIcon fontSize="large"/> 
        </MUI.Avatar> 

      </div>
      
    </Stack>
  )
}

export default Navbar