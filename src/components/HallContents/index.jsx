import React from 'react'
import HallContent from '../HallContent'
import hall1 from '../../assets/img/1.hall.png'

export default function HallContents() {
  // const dates = ["2018-09-12", "2018-10-18", "2018-12-30"];
  // const filteredDates = dates.filter(d => new Date(d) - new Date() > 0);
  return (
    <div>     
        
          <HallContent  title="01. Greeting " strongtitle='Welcome' image={ hall1} text='  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque repellendus reprehenderit dicta saepe obcaecati nam quos? Dignissimos autem nemo, assumenda maiores sapiente modi, impedit iusto eveniet, ducimus repudiandae facere minima.
         '/>
                 <HallContent  title="02. Learn " strongtitle='Drink wine' image={ hall1} text='  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque repellendus reprehenderit dicta saepe obcaecati nam quos? Dignissimos autem nemo, assumenda maiores sapiente modi, impedit iusto eveniet, ducimus repudiandae facere minima.
         '/>
                 <HallContent  title="03. say " strongtitle='Goodbye' image={ hall1} text='  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque repellendus reprehenderit dicta saepe obcaecati nam quos? Dignissimos autem nemo, assumenda maiores sapiente modi, impedit iusto eveniet, ducimus repudiandae facere minima.
         '/>
    </div>
  )
}
