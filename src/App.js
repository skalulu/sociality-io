import React from 'react';
import Home from './components/Home';
import SideMenu from './components/SideMenu';


const App = () => {
  return ( 
      <div className="container">
        <div className='empty-grid hidden'></div>
        <SideMenu />
        <Home />
      </div>
  );
};

export default App;
