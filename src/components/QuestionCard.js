import React, { useReducer } from 'react';

const init = (initialIndex) => {
  return { selection: initialIndex };
};

const localReducer = (state, action) => {
  switch (action.type) {
    case 'TEMP_SELECTION':
      return { selection: action.payload };

    case 'RESET':
      return { selection: undefined };

    default:
      return state;
  }
};

export default function QuestionCard({ q, inc, c, action }) {
  const [state, dispatch] = useReducer(
    localReducer,
    { selection: undefined },
    init
  );

  const answerSet = () => {
    let arr = [...inc, c];

    return arr.map((e, i) => (
      <li
        key={i}
        onClick={(e) => {
          dispatch({
            type: 'TEMP_SELECTION',
            payload: i,
          });
          action(e);
        }}
        className={`answer ${state.selection === parseInt(i) && 'selected'}`}
        iscorrect={e === c ? 1 : 0}
      >
        {e}
      </li>
    ));
  };

  return (
    <div className='question-card'>
      <p className='question'>{q}</p>
      <ul className='answer-set'>{answerSet()}</ul>
    </div>
  );
}
