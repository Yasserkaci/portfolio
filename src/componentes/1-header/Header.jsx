import React from 'react'
import './header.css'


const Header = () => {
  return (
    <header className='flex'>
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


      <button>
        light
      </button>
    </header>
  )
}

export default Header