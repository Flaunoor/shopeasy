import React from 'react';
import {images} from '../../Constants';
import {MUI} from '../../Constants';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <div className='app__aboutus'>
      <div className='app__aboutus-header'>
        <img src={images.home} alt='home image'/>
        <div>
          <p className='p-title few-words'>Few Words</p> 
          <p className='p-big aboutus-p' >ABOUT US</p>
      </div>

      
      </div>
      <div className='aboutus-founder'>
       
       <div className='founder-description'>
          <h3 className='p-text'>Layan Yildirim</h3>
          <h2 className='p-text'>ABOUT THE FOUNDER</h2>
          <h3 className='p-text'>Lorem ipsum dolor sit amet consectetur,
           adipisicing elit. Voluptate laborum praesentium exercitationem
          </h3>
          <MUI.Divider/>
          <p className='p-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis aut iusto quia ad pariatur, optio voluptates
            quasi quo nemo suscipit, deleniti numquam? Voluptatibus,
            id. Dicta veritatis error recusandae fuga eaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis aut iusto quia ad pariatur, optio voluptates
            quasi quo nemo suscipit, deleniti numquam? Voluptatibus,
            id. Dicta veritatis error recusandae fuga eaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis aut iusto quia ad pariatur, optio voluptates
            quasi quo nemo suscipit, deleniti numquam? Voluptatibus,
            id. Dicta veritatis error recusandae fuga eaque.
          </p>
       </div>
       <img src={images.founder} alt='founder image'/>
      </div>
     <div className='about-us-all-started'>
      <img src={images.home_pic_2} alt='company info pic'/>
      <div>
        <h2 className='p-text'>How it all started</h2>
        <h3 className='p-text'>ETIAM VENENATIS MATTIS MAURIS, ET TEMPOR ERAT ULTRICIES NON.</h3>
        <p className='p-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis aut iusto quia ad pariatur, optio voluptates
            quasi quo nemo suscipit, deleniti numquam? Voluptatibus,
            id. Dicta veritatis error recusandae fuga eaque.
        </p>
        <p className='p-bold'>1924 - ESTABLISHED</p>
        <p className='p-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis aut iusto quia ad pariatur, optio voluptates
            quasi quo nemo suscipit, deleniti numquam? Voluptatibus,
            id. Dicta veritatis error recusandae fuga eaque.
        </p>
        <p className='p-bold'>1950 - VIVAMUS ELEMENTUM</p>
        <p className='p-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis aut iusto quia ad pariatur, optio voluptates
          quasi quo nemo suscipit, deleniti numquam? Voluptatibus,
          id. Dicta veritatis error recusandae fuga eaque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis aut iusto quia ad pariatur, optio voluptates
          quasi quo nemo suscipit, deleniti numquam? Voluptatibus,
          id. Dicta veritatis error recusandae fuga eaque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis aut iusto quia ad pariatur, optio voluptates
          quasi quo nemo suscipit, deleniti numquam? Voluptatibus,
          id. Dicta veritatis error recusandae fuga eaque.
        </p>
        <p className='p-bold'>2010 - INTERDUM MAURIS</p>
        <p className='p-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis aut iusto quia ad pariatur, optio voluptates
          quasi quo nemo suscipit, deleniti numquam? Voluptatibus,
          id. Dicta veritatis error recusandae fuga eaque.
        </p>
      </div>
      </div> 
   </div> 
  )
}

export default AboutUs