import React from 'react';
import './Searchbar.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Paper, IconButton,Input } from '@mui/material';
import { Search } from '@mui/icons-material';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
     e.preventDefault();
     navigate(`${searchTerm}`);
  }
  return (
    <Paper 
     component='form'
     onSubmit={handleSubmit} 
     className='app__searchbar-paper'
    >

      <IconButton 
        
        className='app__seachbar-btn'
      >
          <Search />
      </IconButton>
      
      <Input placeholder='Search for products...'
              className='app__searchbar-input'
              sx={{fontSize:'20px'}}
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              >
      </Input>

    </Paper>
  )
}

export default Searchbar