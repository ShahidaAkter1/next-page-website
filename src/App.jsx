import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
   <div>
   {/* Header start */}

    <Header></Header>

    {/* Header end */}

    <Outlet></Outlet>

    {/* Footer */}
   </div>
  );
};

export default App;