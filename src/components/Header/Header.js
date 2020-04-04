import React from "react";
import './Header.css';
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

const Header = ({changePage}) => {
  return (
      <div className='header'>
        <Logo/>
        <NavBar changePage={changePage}/>
      </div>
  )
};

export default Header;
