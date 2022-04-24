import * as React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import { Suspense } from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const Container  = () => {
    return(<>
      <Navbar/>
      <Outlet/> 
      <Footer/>
    </>);
}

export default Container;