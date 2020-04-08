import React from "react";
import './FormLogin.css';
import Title from "../Title";
import Subtitle from "../Subtitle";

const FormLogin = ({changePage}) => {
  return (
      <div className='form-login'>
        <Title title={'Log In'} />
        <form onSubmit={() => changePage('map')} id='form-login'>
          <div className='form-login-subtitle'>
            <Subtitle changePage={changePage}
                      subtitle={'New User?'}
                      subtitleLink={'Sign Up'} />
          </div>
          <div className='form-login-input'>
            <input className='input-login'
                   type="text"
                   placeholder='User name*' />
          </div>
          <div className='form-login-input'>
            <input className='input-login'
                   type="password"
                   placeholder='Password*' />
          </div>
          <div className='form-login-button'>
            {/*<Button onClick={()=> changePage('map') label={'Log In'}/>*/}
            <input className='button' type='submit' value='Come In' />
          </div>
        </form>
      </div>
  )
};

export default FormLogin;
