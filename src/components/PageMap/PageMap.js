import React from "react";
import './PageMap.css';
import Header from "../Header/Header";
import EnterCard from "../EnterCard/EnterCard";

const PageMap = ({changePage}) => {
  return (
      <div className='page-map'>
        <Header changePage={changePage}/>
        <EnterCard/>
      </div>
  )
};

export default PageMap;
