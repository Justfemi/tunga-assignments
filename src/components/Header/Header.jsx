// import React from 'react'
import './Header.css';
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <a href="/">
        <h2>DEVLOOP <br /> BLOG</h2>
      </a>

      <div>
        <a>HOME</a>
        <a>ABOUT ME</a>
        <a>DROPDOWN</a>
        <a>BLOG</a>
        <a>CONTACT ME</a>

        <FiSearch className="search-icon"/>
      </div>
    </header>
  )
}

export default Header