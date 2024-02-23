import React from 'react'
import { useState } from "react";
import './header.css'


const Header = () => {
  const [showmodel, setshowmodel] = useState(false);
  return (
    <header className='flex'>
      <button className='menu icon-menu' onClick={() => { setshowmodel(true) }} ></button>

      <div></div>
      <nav>
        <ul className="flex">
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>


      <button ><span className='icon-moon-o'></span></button>

      {showmodel &&
        <div className="fixed">
          <ul className="model">
            <li><button onClick={() => { setshowmodel(false) }} className='icon-close'></button></li>
            <li><a href="">About</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>}


    </header>
  )
}

export default Header