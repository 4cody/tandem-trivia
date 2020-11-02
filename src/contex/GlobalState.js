import React, { useReducer } from 'react';

import { generateQuestions } from '../utils/generateQuestions';
import GameContext from './game-context';
import {
  gameReducer,
  RECORD_ANSWER,
  TEMP_ANSWER,
  PROGRESS_QUESTION,
  ROTATE_PRISM,
  SET_TOTAL,
  GENERATE_QUESTION_SET,
  RESET,
  START,
} from './reducers';

const GlobalState = ({ children }) => {
  const [gameState, dispatch] = useReducer(gameReducer, {
    questoins: [],
    prismFace: 1,
    prismClass: 'prism',
    qIndex: 0,
    tempAnswer: '',
    selectedAnswers: [],
    total: 0,
  });

  const rotatePrism = (face) => {
    dispatch({
      type: ROTATE_PRISM,
      payload: face,
    });
  };

  // obj contains questionSet and face#
  const startGame = (obj) => {
    dispatch({
      type: START,
      payload: obj,
    });
  };

  const setTempAnswer = (temp) => {
    dispatch({
      type: TEMP_ANSWER,
      payload: temp,
    });
  };

  const selectAnswer = () => {
    dispatch({
      type: RECORD_ANSWER,
      payload: gameState.tempAnswer,
    });

    dispatch({
      type: PROGRESS_QUESTION,
    });
  };

  const sumTotal = () => {
    let t = gameState.selectedAnswers.reduce(
      (acc, cv) => parseInt(acc) + parseInt(cv)
    );

    dispatch({
      type: SET_TOTAL,
      payload: {
        total: t,
        face: 4,
      },
    });
  };

  const genQuestions = () => {
    let q = generateQuestions([]);

    dispatch({
      type: GENERATE_QUESTION_SET,
      payload: q,
    });
  };

  const reset = () => {
    let q = generateQuestions([]);

    dispatch({
      type: RESET,
      payload: q,
    });
  };

  return (
    <GameContext.Provider
      value={{
        questions: gameState.questions,
        qIndex: gameState.qIndex,
        tempAnswer: gameState.tempAnswer,
        selectedAnswers: gameState.selectedAnswers,
        prismClass: gameState.prismClass,
        prismFace: gameState.prismFace,
        total: gameState.total,
        startGame,
        genQuestions,
        rotatePrism,
        setTempAnswer,
        selectAnswer,
        sumTotal,
        reset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GlobalState;
