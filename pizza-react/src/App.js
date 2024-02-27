import React from 'react';
import './App.css';
import Header from './components/Header';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Offer from './components/Offer';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <Header />
        <Logo />
        <Menu />
        <Offer />
        <Footer />
      </div>
  );
}

export default App;
