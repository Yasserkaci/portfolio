import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <section className="parent flex">
      <div className="left-section border">
        <div className="logo-section flex" >
          <img src="./me.png" alt=""  className='logo'/>
          <div className='icon-verified'></div>
        </div>
      </div>
      <div className="right-section border">animation</div>

    </section>
  )
}

export default Hero