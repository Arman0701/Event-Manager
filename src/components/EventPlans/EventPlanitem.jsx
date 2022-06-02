import React from 'react'

export default function EventPlanitem({amount,title,person,svg,outfit,minute,image,release,album,props}) {
  return (
  <>
                    <div className='pricing-header'>
                        <span className='amount'>{amount}</span>
                        <h3 className='price-table-title'>{title}</h3>
                    </div>
                    <div className='price-body'>
                        <ul>
                            <li className='item'>
                                <img className='svgItem' src={svg}></img>{person}</li>
                            <li className='item'>
                            <img className='svgItem' src={svg}></img>{outfit}</li>
                            <li className='item'>
                            <img className='svgItem' src={svg}></img>{minute}</li>
                            <li className='item'>
                            <img  className='svgItem' src={svg}></img>{image}</li>
                            <li className='item'>
                            <img className='svgItem' src={svg}></img>{release}</li>
                            <li className='item'>
                            <img className='svgItem' src={svg}></img>{album}</li>
                        </ul>
                    </div>
                    <div className='pricing-footer'>
                        <button className='Button'>get this</button>
                    </div>
                   
                </>
  )
}
