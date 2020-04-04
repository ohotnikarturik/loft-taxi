import React from "react";
import './PageProfile.css';
import Header from "../Header/Header";
import FormProfile from "../FormProfile/FormProfile";

const PageProfile = ({changePage}) => {
  return (
      <div className='page-profile'>
        <Header changePage={changePage}/>
        <FormProfile/>
      </div>
  )
};

export default PageProfile;
