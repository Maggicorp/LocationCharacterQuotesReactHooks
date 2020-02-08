import React, { useState } from 'react';
import Button from './Button';
import './App.css';

function App() {
  const [selected, setSelected] = useState([]);
  console.log('selected in app is', selected)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Characters and Quotes and Locations
        </p>
      </header>
      <div>
        {["These", "Button", "Tyoes"].map(button => <Button buttonName={button} selected={selected} setSelected={setSelected} key={button}/>
        )}
      </div>
    </div>
  );
}

export default App;
