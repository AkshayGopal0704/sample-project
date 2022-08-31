import React from 'react'
import Carddata from './Carddata'
import { useState } from 'react'

import './Style.css'

const Collections=()=>{
    const[data]=useState(Carddata);

    return(
        <div className='menu'>
        <div className='menulist'>
       {data.map((element,id)=>{
            return(
               
               
                <div className="card">
  <img className="card-img-top" src={element.image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{element.text}</h5>
    <p className="card-text">{element.price}</p>
   <center><button className="btn">Add to cart</button></center>
  </div>
</div>
               
                
                
            )
        })}</div>
        </div>

    )
}
export default Collections;
