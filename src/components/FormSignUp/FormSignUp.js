import React from "react";
import './FormSignUp.css';
import Title from "../Title";
import Subtitle from "../Subtitle";

const FormSignUp = ({changePage}) => {

  return (
      <div className='form-sign'>
        <Title title={'Sign Up'}/>
        <form onSubmit={()=> changePage('map')} id='form-sign'>
          <div className='form-sign-subtitle'>
            <Subtitle changePage={changePage}
                      subtitle={'Already Signed Up?'}
                      subtitleLink={'Come In'}/>
          </div>
          <div className='form-sign-input'>
            <input className='input-sign'
                   type="text"
                   placeholder='E-mail Address*'/>
          </div>
          <div className='form-sign-input form-sign-inputs'>
            <input className='input-sign input-sign-first'
                   type="text"
                   placeholder='Name*'/>
            <input className='input-sign input-sign-second'
                   type="text"
                   placeholder='Last Name*'/>
          </div>
          <div className='form-sign-input'>
            <input className='input-sign'
                   type="text"
                   placeholder='Password*'/>
          </div>
          <div className='form-sign-button'>
            {/*<Button onClick={()=> changePage('map') label={'Log In'}/>*/}
            <input className='button' type="submit" value='Submit'/>
          </div>
        </form>
      </div>
  )
};

export default FormSignUp;
