import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import navOptions from './assets/nav.json'

function App() {
  const [selectedNav, setSelectedNav] = useState('dashboard');

  const changePage = (newPage) => {
    setSelectedNav(newPage)
  }
  
  let content = (<div className='text-center my-4 text-lg font-semibold'>{selectedNav.toLocaleUpperCase() + ' page unavailable at the moment! Please go back to the Dashboard.'}</div>);
  if(selectedNav === 'dashboard') content = <Dashboard />;

  return (
    <div>
      <Navbar options={navOptions} selectedNav={selectedNav} changePage={changePage} />
      { content }
    </div>
  );
}

export default App;
