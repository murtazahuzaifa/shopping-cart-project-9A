import React from 'react';
import style from  './App.module.css';
import {NavBar, Cover, Footer} from '../';
import BestSelling from './BestSelling';
import NewCollections from './NewCollections';
import AllProducts from './AllProducts';

function App() {
  return (
    <div className={`${style.appContainer}`} >
      <div className={`${style.navBar}`} ><NavBar/></div>
      <div><br/><br/></div>
      <Cover/>
      <NewCollections/>
      <BestSelling/>
      <AllProducts/>
      <Footer/>
    </div>
  );
}

export default App;
