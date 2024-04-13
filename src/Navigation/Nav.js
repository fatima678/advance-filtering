import React from 'react'
import './Nav.css'
import { CiHeart } from "react-icons/ci";
// import {AiPOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function Nav() {
  return (
    <nav>
      <div className='nav-container'>
        <input type='text'  className='search-input' placeholder='Enter your search shoes'></input>
      </div>
      <div className='profile-container'>
        <a href='#'>
          <CiHeart  className='nav-icons'/>
        </a>
        <a href='#'>
          <FaShoppingCart className='nav-icons'/>
        </a>
        <a href='#'>
          <AiOutlineUserAdd className='nav-icons'/>
        </a>
      </div>



    </nav>
  )
}
