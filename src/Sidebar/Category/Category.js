import React from 'react'
import './Category.css'

export default function Category() {
  return (
    <div>
      <h3 className='sidebar-title'>Category</h3>
      <div>
      <label className='sidebar-lable-container'>
          <input type='radio' name='test'></input>
          <span className='checkmark'></span>All
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test'></input>
          <span className='checkmark'></span>Sneakers
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test'></input>
          <span className='checkmark'></span>Flats
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test'></input>
          <span className='checkmark'></span>Sandals
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test'></input>
          <span className='checkmark'></span>Heels
        </label>
      </div>
    </div>
  )
}
