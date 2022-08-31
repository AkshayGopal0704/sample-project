import React from 'react'




export default function Contact() {
  return (
   <>
   <center><h2 className='head'>Contact Us</h2></center><br></br>
   <div className='row'>
    <div className='col-6'>
    <div className="cont ">
        
        <h3 className='head3'>Ready for offers and cooperation</h3><br></br>
        <p>Contact No : +91 9167768888</p>



<p>Mail us : inf@foodhut.info</p><br></br>

<h3>We're listening</h3><br></br>
<form className="myform">
    <p>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<input name="myname" /></p>
    <p>Subject&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;<input name="mysubject" /></p>
    <p>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; <input type="email" name="myemail" /></p>
    <p>Message :&nbsp;&nbsp;&nbsp; <textarea name="msg" /></p>
    <button className="btn-1">Submitt</button>

</form>
    </div>
    </div>
    <div className='col-6'> 
    <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251482.44857921428!2d76.16084508763808!3d9.98268091865779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1661324809355!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
   </div>
  
   </>
  )
}
