import React from 'react';
import './App.css';

import GlobalState from './contex/GlobalState';
import { GamePrism } from './components/GamePrism';

function App() {
  return (
    <GlobalState>
      <div className='game-wrap'>
        <GamePrism />
      </div>
    </GlobalState>
  );
}

export default App;
