import React from 'react'
import Nav from './components/Navbar/Nav';
import "./App.css";
import Banner from './components/Banner/Banner';
import Bottom from './components/Bottom/Bottom';

function App() {
  return (
    <div className='App' >
     <Nav/>
     <Banner/>
     <Bottom/>
    </div>
  );
}

export default App;



