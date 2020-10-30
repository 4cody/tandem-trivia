import React, { useState, useEffect } from 'react';
import './App.css';

import data from './data/Apprentice_TandemFor400_Data.json';

function App() {
  let [btnToggle, setToggle] = useState(true);

  const selectQs = (k) => {
    if (k.length === 10) return;

    let n = Math.floor(Math.random() * data.length);

    if (k.includes(n)) {
      console.log(n);
      console.log(k, 'here is the array');
    }
    k.push(n);
    selectQs(k);
    // console.log(k);
  };

  useEffect(() => {
    selectQs([]);
  });

  return (
    <div className='game-wrap'>
      <button
        className='switchBtn'
        onClick={() => {
          setToggle(!btnToggle);
        }}
      >
        Push
      </button>
      <div className={btnToggle ? 'gameCube' : 'gameCube gameCubeSwitch'}>
        <div className='screen'>Here is a screen</div>
        <div className='screen'>2</div>
        <div className='screen'>3</div>
        <div className='screen'>4</div>
      </div>
    </div>
  );
}

export default App;
