import React from "react";
import './Header.css';
import Logo from "../Logo";
import NavBar from "../NavBar";

const Header = ({changePage}) => {
  return (
      <div className='header'>
        <Logo/>
        <NavBar changePage={changePage}/>
      </div>
  )
};

export default Header;
