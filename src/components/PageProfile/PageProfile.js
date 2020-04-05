import React from "react";
import './PageProfile.css';
import Header from "../Header";
import FormProfile from "../FormProfile";

const PageProfile = ({changePage}) => {
  return (
      <div className='page-profile'>
        <Header changePage={changePage}/>
        <FormProfile/>
      </div>
  )
};

export default PageProfile;
