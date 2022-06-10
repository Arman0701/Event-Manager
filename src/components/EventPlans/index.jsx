import React from 'react'
import EventTitle from '../EventTitle'
import EventPlanitem from './EventPlanitem'
import './style.scss'
import False from '../../assets/img/close.svg'
import True from '../../assets/img/ok.svg'

export default function EventPlans() {
  return (
    <div>
        <EventTitle title2="Event " strongtitle="pricing plans"/>
        <div>
            <ul className='pricing-list' >
            <li className='eventpalnsli'>
            <EventPlanitem 
                amount='19$'
                title='standart' 
                svg={False}
                 person='person'
                  outfit='outfit'
                minute='minute'
                image='image'
                release='release'
                album='album'/>
                </li>
                <li className='proff'>
                <span className='pofSpan'>Best Choice</span>
                <EventPlanitem 
                amount='99$'
                title='professional'
                svg={True} 
                 person='person'
                  outfit='outfit'
                minute='minute'
                image='image'
                release='release'
                album='album'>
                </EventPlanitem>
                </li>
                  <li className='eventpalnsli'>
                  <EventPlanitem 
                amount='59$'
                title='ENTERPRISE' 
                svg={False}
                 person='person'
                  outfit='outfit'
                minute='minute'
                image='image'
                release='release'
                album='album'/>
                  </li>
         
             </ul>
        </div>
    </div>
  )
}
