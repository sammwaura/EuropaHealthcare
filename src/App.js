import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import aboutimage from './images/hero.jpg';
import aboutimage2 from './images/hero2.webp';
import Products from './components/Products';
import productimage from './images/products.jpg';
import Bronchures from './components/Bronchures';
import bronchureimage from './images/bronchures.jpg'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <About image={aboutimage} title ='Our Story'/>
      <Features/>
      <Products image={productimage} title ='Leading Pharma and Drugs Suppliers'
       button='Our Products' />
       <Bronchures image={bronchureimage} title = 'Download our Bronchures'
       button='Download Now'/>
     

    </div>
  );
}

export default App;
