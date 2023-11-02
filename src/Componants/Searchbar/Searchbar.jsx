import React from 'react';
import './Searchbar.scss';

import { Paper, IconButton,Input } from '@mui/material';
import { Search } from '@mui/icons-material';

const Searchbar = () => {
  return (
    <Paper component='form'
           className='app__searchbar-paper'>

        <IconButton className='app__seachbar-btn'>
            <Search />
        </IconButton>
        
        <Input placeholder='Search for products...'
               className='app__searchbar-input'
               sx={{fontSize:'20px'}}>
        </Input>

    </Paper>
  )
}

export default Searchbar