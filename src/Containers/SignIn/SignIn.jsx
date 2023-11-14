import React from 'react';
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import  {images, MUI} from '../../Constants';


import './SignIn.scss';

const SignIn = () => {
  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');
  const [user, setUser] = useState('');
  const [userCart, setUserCart] = useState([]);
  const navigate = useNavigate();

  const handleLogin = async() =>{
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: username,
        password: password,
        
      })
    });

    const jsondata = await response?.json();
    setUser(jsondata);
    localStorage.setItem("user-info", JSON.stringify(jsondata));

    /**To get the list of the user's products _________________________________________________*/
    const responseP = await fetch(`https://dummyjson.com/carts/user/${jsondata?.id}`);
    const jsonDataCart = await responseP.json();
    setUserCart(jsonDataCart?.carts[0]);
    if(userCart){
      localStorage.setItem("cart-products", JSON.stringify(jsonDataCart?.carts[0]?.products));
    }
    /**________________________________________________________________________________________ */
   
    
    navigate('/products');
    window.location.reload();
 
  }
  
  console.log('user is ', user);

  return (
    <div className='app__signin'>

      <div className='signInImg'><img src={images.login_pic} alt='login_pic'/></div>
      <h2>login</h2>
      <p>Please enter your Username and password! (kminchelle,0lelplR)</p>

      <MUI.Paper className='username_Paper'>
        <MUI.PersonIcon fontSize='medium' className='username-icon'/> 
        <MUI.Input 
          placeholder='Username'
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          className='input' 
        /> 
         
         
      </MUI.Paper>

      <MUI.Paper className='password_Paper'>
        <MUI.HttpsIcon fontSize='medium' className='password-icon' /> 
        <MUI.Input 
          placeholder='Password' 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className='input'/> 
      </MUI.Paper>

      <button className='login-btn' onClick={handleLogin}>Login</button> 
      

    </div>
  )
}

export default SignIn