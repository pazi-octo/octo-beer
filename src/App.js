import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BearList from "./BearList";

function App() {

    const [value, setValue] = useState(1)

    const prev = () => { setValue(value - 1) }
    const next = () => { setValue(value + 1) }

  return (
    <div className="App">

        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>

      <BearList value={value}/>
    </div>
  );
}

export default App;
