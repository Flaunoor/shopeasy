import React from 'react';
import {images} from '../../Constants';
import {MUI} from '../../Constants';

import './Contact.scss';




const Contact = () => {
  return (
    <div app__contact>
       <div className='app__contact-header'>
          <img src={images.home} alt='home image'/>
          <div>
            <p className='p-title get-in-touch'>Get in Touch</p> 
            <p className='p-big contact-us-p' >Contact us</p>
        </div>
       </div>

       <div className='app__contact-section'>
        <div className='app__contact-info'>
          <h2 className='p-title'>Message us</h2>
          <p className='p-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Magnam reprehenderit optio beatae vitae? Voluptatibus eum
            ipsum aperiam necessitatibus optio voluptatem.

          </p> 
          <div className='p-text'><MUI.LocationOnIcon className='icon'/> 123 Fifth Avenue, New York,NY 10160</div>
          <div className='p-text'><MUI.EmailIcon className='icon'/>contact@info.com</div>
          <div className='p-text'><MUI.PhoneIcon className='icon'/>929-242-6868</div>
        </div>
        <div className='app__contact-form'>

          <div className='first-last-name-div'>
            <MUI.Paper className='paper'>
              <MUI.Input 
                placeholder='First name'
                className='input' 
              /> 
           </MUI.Paper>
            <MUI.Paper className='paper'>
                <MUI.Input 
                  placeholder='Last name'
                  className='input' 
                /> 
            </MUI.Paper>
          </div>
         <MUI.Paper className='paper'>
            <MUI.Input 
              placeholder='Email'
              className='input' 
            /> 
         </MUI.Paper>

         <MUI.Paper className='description-paper'>
            <textarea/>
         </MUI.Paper>

         <button className='shop-now-btn' >SEND</button>
        </div>

       </div>
    </div>
  )
}

export default Contact