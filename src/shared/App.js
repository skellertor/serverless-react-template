import React from 'react';
import './App.css';

function App({initialData}) {
  return (
    <div className="app">
      {`Hey there ${initialData.name}`}
    </div>
  );
}

export default App;