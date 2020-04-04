import React from "react";
import './PageSignUp.css';
import Logo from "../Logo/Logo";
import FormSignUp from "../FormSignUp/FormSignUp";

const PageSignUp = ({changePage}) => {
  return (
      <div className='page-sign'>
        <div className='sign-content'>
          <div className='sign-content-column'>
            <Logo/>
          </div>
          <div className='sign-content-column'>
            <FormSignUp changePage={changePage}/>
          </div>
        </div>
      </div>
  )
};

export default PageSignUp;
