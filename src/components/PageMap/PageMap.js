import React from "react";
import './PageMap.css';
import Header from "../Header";
import EnterCard from "../EnterCard";

const PageMap = ({changePage}) => {
  return (
      <div className='page-map'>
        <Header changePage={changePage}/>
        <EnterCard/>
      </div>
  )
};

export default PageMap;
