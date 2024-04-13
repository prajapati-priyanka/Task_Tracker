import React from 'react';
// import Header from './components/Header';
import Main from './components/Main/Main';
import Sidenav from './components/Sidenav/Sidenav';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className='flex'>
      
      <Sidenav />
      <Main />
    </div>
  );
};

export default App;
