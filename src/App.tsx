import React from 'react';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Calculator from './components/Calculator/Calculator';
import './App.scss';


function App() {
  return (
    <div className="app">
      <Header/>
      <Banner/>
      <Calculator/>
    </div>
  );
}

export default App;
