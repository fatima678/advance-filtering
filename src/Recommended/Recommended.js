import React from 'react'
import './Recommended.css'
import Buttons from '../components/Buttons'

export default function Recommended({handleClick}) {
  return (
    <>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-flex'>
        {/* <button className='btns'>All Products</button> */}
        <Buttons onClickHandler={handleClick} value="" title="All Products"></Buttons>
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike"></Buttons>
        <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas"></Buttons>
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma"></Buttons>
        <Buttons onClickHandler={handleClick} value="Vans" title="Vans"></Buttons>

      </div>

    </div>
    
    
    
    
    </>
  )
}
