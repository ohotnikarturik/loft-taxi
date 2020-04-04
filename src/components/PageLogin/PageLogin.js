import React from "react";
import './PageLogin.css';
import Logo from "../Logo";
import FormLogin from "../FormLogin";

const PageLogin = ({changePage}) => {
  return (
      <div className='page-login'>
        <div className='login-content'>
          <div className='login-content-column'>
            <Logo/>
          </div>
          <div className='login-content-column'>
            <FormLogin changePage={changePage}/>
          </div>
        </div>
      </div>
  )
};

export default PageLogin;
