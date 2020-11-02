import React, { useContext } from 'react';
import QuestionCard from './QuestionCard';
import GameContext from '../contex/game-context';

export const QuestionControl = () => {
  const context = useContext(GameContext);

  const qRender = context.questions.map((e, i) => {
    return (
      <QuestionCard
        key={i}
        action={(e) => {
          context.setTempAnswer(e.target.getAttribute('iscorrect'));
        }}
        q={e.question}
        inc={e.incorrect}
        c={e.correct}
      />
    );
  });

  return context.selectedAnswers.length < 10 ? (
    <div className='question-container'>
      {qRender[context.qIndex]}
      <button
        onClick={() => {
          context.selectAnswer();
        }}
        className={`answer-submit ${!context.tempAnswer && 'noDisplay'}`}
      >
        Final Answer
      </button>
    </div>
  ) : (
    <div className='round-end'>
      Nice!
      <button onClick={context.sumTotal}>total</button>
    </div>
  );
};
