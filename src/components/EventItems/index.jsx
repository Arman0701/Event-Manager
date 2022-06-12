import React from 'react'
import event1 from '../../assets/img/event-1.jpg'
import event2 from '../../assets/img/event-2.jpg'
import EventItem from '../EventItem'
import './style.scss'
import Pagination from '../Pagination'
import { useMemo } from 'react'
import { useState } from 'react'
import data from './data.json'
// import EventMenu from '../EventMenu'



//! get data from backend
let PageSize = 6;

export default function EventItems() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div className='divEvent'>
    <div className='flex'>
    <div className='column'>
      <div className='section'>
        <span className='LineStyle'></span>
        <small className='sub-title'>harmoni events</small>
        <h2 className='big-title'>
          <strong className='EvStrong'>event</strong>
            Listing
        </h2>
      </div>
    </div>
  
    </div>
   
    <div className='EventItemsStyled'>
    {currentTableData.map(item => {
            return ( 
              <>
                     <EventItem
                        key={item.id}
                       poster={event1}
                        title={item.title} 
                        description={item.description} 
                        date={item.date}
                        location={item.location}
                        />           
              </>
         
             );
          })}
     
    </div>
    <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  )
}
