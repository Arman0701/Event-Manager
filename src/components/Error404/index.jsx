import React from 'react'
import { Link } from 'react-router-dom'
import Sad from '../../assets/img/sad.svg'
import './style.scss'

export default function Error404() {
  return (
    <section className='errSection'>
      <div className='errorContainer'>
        <div className='errorRow'>
            <div className='colErr'>
                <img className='imgErr' src={Sad}></img>
            </div>
            <div className='errContent'>
               <h2 className='h2Err'>404</h2>
               <h3 className='h3Err'>error-page not found</h3>
               <p className='pErr'>something went wrong</p>
               <nav>
                 <Link to='contacts'>Go Home Page</Link>
               </nav>
            </div>
        </div>
      </div>
    </section>
      
  )
}
