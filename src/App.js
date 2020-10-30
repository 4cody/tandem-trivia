import React, { useState, useEffect } from 'react';
import './App.css';

import Button from './components/Button';
import Screen from './components/Screen';

import data from './data/Apprentice_TandemFor400_Data.json';

function App() {
  let [dynamicClass, setClasses] = useState(1);
  let [randomOrder, setOrder] = useState([]);

  const genOrder = (seq) => {
    if (seq.length === 10) {
      setOrder(seq.map((e) => data[e]));
      return;
    }

    let r = Math.floor(Math.random() * 21);
    seq.indexOf(r) === -1 && seq.push(r);
    genOrder(seq);
  };

  const handleClass = () => {
    switch (dynamicClass) {
      case 1:
        return '';

      case 2:
        return 'setToAbout';

      case 3:
        return 'setToRound';

      default:
        return '';
    }
  };

  useEffect(() => {
    genOrder([]);
  }, []);

  return (
    <div className='game-wrap'>
      <div className={`prism ${handleClass()}`}>
        <Screen type={'g'}>
          <Button
            cn='switchBtn al'
            action={() => {
              setClasses(2);
            }}
          >
            About
          </Button>
          <Button
            cn='switchBtn ar'
            action={() => {
              setClasses(3);
            }}
          >
            Push
          </Button>
          test
        </Screen>
        <Screen type={'g'}>
          <Button
            cn='switchBtn al'
            action={() => {
              setClasses(1);
            }}
          >
            Push
          </Button>
        </Screen>
        <Screen type={'g'}>3</Screen>
        <Screen type={'n'}>
          <Button
            cn='switchBtn ar'
            action={() => {
              setClasses(1);
            }}
          >
            Push
          </Button>
          test
        </Screen>
      </div>
    </div>
  );
}

export default App;
