import React from 'react'
import './Price.css'

export default function Price() {
  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title'>Price</h2>
      <lable className='sidebar-lable-container'>
          <input type='radio' name='test2'></input>
          <span className='checkmark'></span>All
        </lable>

        <lable className='sidebar-lable-container'>
          <input type='radio' name='test2'></input>
          <span className='checkmark'></span>$0 - $50
        </lable>

        <lable className='sidebar-lable-container'>
          <input type='radio' name='test2'></input>
          <span className='checkmark'></span>$50 - $100
        </lable>

        <lable className='sidebar-lable-container'>
          <input type='radio' name='test2'></input>
          <span className='checkmark'></span>$100 - $150
        </lable>

        <lable className='sidebar-lable-container'>
          <input type='radio' name='test2'></input>
          <span className='checkmark'></span>Over $150
        </lable>
      
    </div>
  )
}
