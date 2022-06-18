import React from 'react'
import Nav from './components/Navbar/Nav';
import "./App.css";
import Banner from './components/Banner/Banner';
import Rowpost from './components/Bottem/Bottem';

function App() {
  return (
    <div className='App' >
     <Nav/>
     <Banner/>
     <Rowpost/>
    </div>
  );
}

export default App;



