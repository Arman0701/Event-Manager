import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EventTitle from '../EventTitle';
import './style.scss'

const ContactUs = () => {
    const [customerContact, setCustomerContact] = useState(
        { name:'',email: '', phonNumber:'',country:'',message:''}
    );
  

    const handleChange = (event) => {
        setCustomerContact({...customerContact, [event.target.name]: event.target.value})
        
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:5500/api/contact', customerContact)
        .then(function (response) {
            console.log(response)
           
        })
        .catch(function (error) {
            console.log(error)
        }) 
       
       ;
    
        }
          return (
            <div className='contact'>
            <div className='cntTitle'>
            <small className='cntSmall'>contact us</small>
           <EventTitle title2='Keep In Touch'  strongtitle=' With Harmoni'/>
            </div>
                <form  onSubmit={handleSubmit}>
{/*                                            
                    <div className='contactContainer'>
                    <div>
                    <div className='itemInp'>
                       
                        <input type="text" name="name" value={customerContact.name} onChange={handleChange} required />
                        </div>
                        <div className='itemInp'>  
                      
                        <input type="text" name="country" value={customerContact.country} onChange={handleChange} required />
                       </div>
                       </div>
                       <div>
                       <div className='itemInp'>
                        
                      
                        <input type="text" name="phonNumber" value={customerContact.phonNumber} onChange={handleChange} required />
                       </div>
                       <div className='itemInp'>
                      
                        <input type="text" name="email" value={customerContact.email} onChange={handleChange} required />
                       </div>
                    </div>
                       <div className='txtContainer'>
                        
                        <textarea type="text" name="message" value={customerContact.message} onChange={handleChange} required />
                      </div>
                    </div>
                   */}
                        {/* <button className='contactBut' type="submit">Send mail</button> */}
                        <div className='contactContainer'>
          <div>
          <div className='itemInp'>
          <input type="text" name="name" value={customerContact.name} onChange={handleChange} required  placeholder='Name'/>
          </div>
          <div className='itemInp'>
          <input type="text" name="email" value={customerContact.email} onChange={handleChange} required placeholder='Email'/>
          </div>
          </div>
         <div>
         <div className='itemInp'>
         <input type="text" name="country" value={customerContact.country} onChange={handleChange} required placeholder='Country'/>
          </div>
          <div className='itemInp'>
          <input type="text" name="phonNumber" value={customerContact.phonNumber} onChange={handleChange} required placeholder='Phone Number'/>
          </div>
         </div>
      </div>
      <div className='txtContainer'>
      <textarea type="text" name="message" value={customerContact.message} onChange={handleChange} required placeholder='Message'/>
      <button className='contactBut' type="submit">Send mail</button>
      </div>
                </form>
            </div>
        );
    }
    export default ContactUs