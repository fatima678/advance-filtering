import React from 'react'
import './Sidebar.css'
import { TiShoppingCart } from "react-icons/ti";
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'


export default function Sidebar({handleChange}) {
  // console.log(handleChange);
  return (
    <>
    <section className='sidebar'>
        <div className='logo-container'>
            <h1><TiShoppingCart /></h1>
        </div>
   
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </section>
    
    
    
    </>
  )
}
