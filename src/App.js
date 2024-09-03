
import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-container'>
        <Nav />
        <Footer />
      </div>
    </div>
  );
}

export default App;
