import React from 'react';
import image from './util/logos/HOTEL-TYBEE.jpg'
import './App.css';
import { useState } from 'react';
import { data } from './services/data';

function App() {
  const [isLoading,setIsLoading] =useState(false)
  const [query,setQuery ]= useState()

  const handleSubmit=async (e)=>{
    e.preventDefault()
    setIsLoading(true)
    const res = await data(query)
    console.log(res)
    setIsLoading(false)
  }
  return (
    <div className="App">
      <form className='form'>
        <section className='section'>
          <div className='image_wrapper'>
          <img src={image} className="form_image" alt="loading" />
          </div>
          <h3><i>Welcome to Hotel Tybee</i></h3 >
        </section>
        <p>By clicking to go online you agree to be bound by all these <a href='/'><i>Terms of Service</i></a></p>
        <p><b>Please enter your access code</b></p>
        <input type='text' placeholder='Access Code' className='input' onChange={(e)=>setQuery(e.target.value)}/>
        {isLoading?
          <div className='submit_loading'>
            <div className='submit_spinner'></div>
          </div>:

          <button className='submit' onClick={(e)=>handleSubmit(e)}>Login</button>}
        
      </form>
    </div>
  );
}

export default App;
