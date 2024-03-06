import React from 'react'
import './hero.css'
import Lottie from 'lottie-react'
import laptop from '../../../public/animation/laptop.json'

const Hero = () => {
  return (
    <section className="parent flex">
      <div className="left-section ">
        <div className="logo-section flex" >
          <img src="./me.jpg" alt=""  className='logo'/>
          <div className='icon-verified'></div>
        </div>
        <h1 className="title">Unixes ! <br/> All freelancing services in one place</h1>
        <p className="discreption">Welcome to Unixes! Your one-stop shop for freelance services. From writing to marketing, design, websites, and more, we've got you covered. Our team ensures quality results to bring your ideas to life. Let's work together and make it happen!</p>
        <div className="icons flex">
          <a href='https://www.linkedin.com/company/unixes'><div className="icon-linkedin-square"></div></a>
          <a href='https://www.instagram.com/unixesagency/'><div className="icon-instagram"></div></a>
          <a href='https://github.com/Yasserkaci'><div className="icon-github"></div></a>
        </div>
      </div>
      <div className="right-section "><Lottie animationData={laptop}></Lottie></div>

    </section>
  )
}

export default Hero