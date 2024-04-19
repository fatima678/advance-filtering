import React from 'react'

export default function Input({handleChange, value, title, name, color}) {
  return (
    
      <label className='sidebar-lable-container'>
          <input  onChange={handleChange} type='radio' value={value} name={name}></input>
          <span className='checkmark' style={{backgroundColor:color}}></span>
          {title}
        </label>
      
    
  )
}
