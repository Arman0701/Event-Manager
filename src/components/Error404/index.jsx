import React from 'react'
import Sad from '../../assets/img/sad.svg'

export default function Error404() {
  return (
      <div className='errorContainer'>
        <div className='errorRow'>
            <div className='colErr'>
                <img src={Sad}></img>
            </div>
        </div>
      </div>
  )
}
