import React from 'react'
import './Colors.css'

export default function Colors() {
  return (
    <div>
       <label className='sidebar-lable-container color-title'>
          <input type='radio' name='test'></input>
          <span className='checkmark'></span>All
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test'></input>
          <span className='checkmark'></span>Black
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test'></input>
          <span className='checkmark'></span>Blue
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test'></input>
          <span className='checkmark'></span>Red
        </label>
        <label className='sidebar-lable-container'>
          <input type='radio' name='test'></input>
          <span className='checkmark'></span>White
        </label>
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
          <span className='checkmark'></span>Green
        </label>
    </div>
  )
}
