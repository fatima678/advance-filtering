import React from 'react'
import './Category.css'

export default function Category() {
  return (
    <div>
      <h3 className='sidebar-title'>Category</h3>
      <div>
      <lable className='sidebar-lable-container'>
          <input type='radio' name='test'></input>
          <span className='checkmark'></span>All
        </lable>
        <lable className='sidebar-lable-container'>
          <input type='radio' name='test'></input>
          <span className='checkmark'></span>Sneakers
        </lable>
        <lable className='sidebar-lable-container'>
          <input type='radio' name='test'></input>
          <span className='checkmark'></span>Flats
        </lable>
        <lable className='sidebar-lable-container'>
          <input type='radio' name='test'></input>
          <span className='checkmark'></span>Sandals
        </lable>
        <lable className='sidebar-lable-container'>
          <input type='radio' name='test'></input>
          <span className='checkmark'></span>Heels
        </lable>
      </div>
    </div>
  )
}
