import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


export default function Footer() {
    const {pathname}=useLocation();
    if(pathname==='/') {return ""}
    
  return (
    <div className='foot'>
    <div className="row">
        
        <div className="col-3">
            <h4>Information</h4>
            <Link className='info' to="/about">About Us</Link><br></br>
            <Link className='info' to="/about">Privacy And Policy</Link><br></br>
            <Link className='info' to="/">FAQ's</Link><br></br>
            <Link className='info' to="/">Delivary And Information</Link>

   
        </div>
        <div className="col-3">
            <h4>Coustomer And Service</h4>
            <Link className='info' to="/contact">Contact Us</Link><br></br>
            <Link className='info' to="/about">Gift Vouchers</Link><br></br>
            <Link className='info' to="/">Special</Link><br></br>
            <Link className='info' to="/">Returns</Link>
   
        </div>
        <div className="col-3">
            <h4>Categories</h4>
            <Link className='info' to="/collections">All Productes</Link><br></br>
            <Link className='info' to="/collections">x'mas special</Link><br></br>
            <Link className='info' to="/collections">Birthday Special</Link><br></br>
            <Link className='info' to="/collections">Ice Creams</Link>
            
   
        </div>
        <div className="col-3">
            <h4>My Account</h4>
            <Link className='info' to="/about"><i class="fa-solid fa-phone"></i> - +918876715375</Link><br></br>
            <Link className='info' to="/about"><i class="fa-solid fa-envelope"></i> - inf@foodhut.info

</Link><br></br>
            <Link className='info' to="/"><i class="fa-brands fa-square-whatsapp"></i> - +918876715375</Link><br></br>
            <Link className='info' to="/"><i class="fa-brands fa-twitter"></i>@foodhut</Link>
   
        </div>
        </div>
    </div>
  )
}


