import './App.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Routing from './routes/Routing';

function App() {
  return (
    <>
      <Routing />
      <ToastContainer />

    </>
    
  );
}

export default App;
