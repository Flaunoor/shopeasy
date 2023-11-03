import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import './App.scss';
import {Navbar, Home, AllProducts , AboutUs,Contact, SearchFeed} from'./Containers';
import { NotFound } from './Componants';

const App = () => {
  return (
    <BrowserRouter>
    <div className='app'>
      <Navbar/>
    
      
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/:searchTerm' element={<SearchFeed/>}/>
          <Route path='/products' element={<AllProducts/>}/> 
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='*' element={<NotFound/>}/>
            
        </Routes>
      
    </div>
    </BrowserRouter> 
  );
}

export default App