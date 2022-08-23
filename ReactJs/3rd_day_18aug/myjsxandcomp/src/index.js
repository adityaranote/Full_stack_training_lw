  import React from "react";
  import  ReactDOM  from "react-dom/client";
  import './index.css'
  import  { Mylw } from './myapp.js'


  const root = ReactDOM.createRoot(document.getElementById("root"))
  
// React Component Props

  root.render(
    
    //<Mylw></Mylw>
    <div> 
    <Mylw  
    name = 'adi'  
    email = 'adityad@gmail.com' 
    likes = '20k'  
    />
    <Mylw 
    name = 'raj'  
    email = 'asdfdsfd@gmail.com' 
    likes = '40k' 
    />
    <Mylw 
    name = 'err'  
    email = 'rferferfxd@gmail.com' 
    likes = '90k' 
    />
   
    </div>
    
    
  )