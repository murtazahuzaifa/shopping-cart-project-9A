import React from 'react';
import style from  './App.module.css';
import {NavBar, Cover} from '../';
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
      hello form react
    </div>
  );
}

export default App;
