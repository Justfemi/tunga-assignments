// import React from 'react'
import './Hero.css';
// import Header from "../Header/Header";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <section className="hero-container">
      {/* <Header /> */}
      <div>
        <div className="content">
          <h1>DEVLOOP</h1>
          <p>by TIA</p>
        </div>
        <div className='icon-wrapper'>
          <IoIosArrowDown className='arrow-down'/>
        </div>
      </div>
    </section>
  )
}

export default Hero