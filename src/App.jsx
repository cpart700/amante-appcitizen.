import React from 'react';
import Citizens from './components/Citizens';
import './App.css';


const App = () => {
  return (
    <div className="app-container">
      <h1>Citizen List</h1>
      <Citizens />
    </div>
  );
};

export default App;
