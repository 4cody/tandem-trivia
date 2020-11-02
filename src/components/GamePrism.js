import React, { useContext, useEffect } from 'react';

import Button from './Button';
import Screen from './Screen';
import { QuestionControl } from './QuestionControl';
import GameContext from '../contex/game-context';

import { generateQuestions } from '../utils/generateQuestions';

export const GamePrism = () => {
  const context = useContext(GameContext);

  useEffect(() => {
    context.genQuestions();
  }, []);

  return (
    <div className={`${context.prismClass}`}>
      <Screen>
        <Button
          cn='switchBtn al'
          action={() => {
            context.rotatePrism(2);
          }}
        >
          About
        </Button>
        <Button
          cn='switchBtn ar'
          action={() => {
            context.rotatePrism(3);
          }}
        >
          Play
        </Button>
        The Trivia Box
      </Screen>
      <Screen>{context.questions && <QuestionControl />}</Screen>
      <Screen>
        <div className='final-screen'>
          <p>You got {context.total} right</p>
          <button
            className='homeBtn'
            onClick={() => {
              // not working!!>!>!>!
              context.reset(generateQuestions([]));
            }}
          >
            Home
          </button>
        </div>
      </Screen>
      <Screen>
        <Button
          cn='switchBtn ar'
          action={() => {
            context.rotatePrism(1);
          }}
        >
          Back
        </Button>
        <div className='about-screen'>
          <p>
            Thanks for taking a look at The Trivia Box, this is an application
            project for Tandem!
          </p>
        </div>
      </Screen>
    </div>
  );
};
