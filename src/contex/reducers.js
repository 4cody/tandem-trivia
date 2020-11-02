export const RECORD_ANSWER = 'RECORD_ANSWER';
export const TEMP_ANSWER = 'TEMP_ANSWER';
export const PROGRESS_QUESTION = 'PROGRESS_QUESTION';
export const ROTATE_PRISM = 'ROTATE_PRISM';
export const GENERATE_QUESTION_SET = 'GENERATE_QUESTION_SET';
export const SET_TOTAL = 'SET_TOTAL';
export const RESET = 'RESET';

const handleClass = (face) => {
  switch (face) {
    case 1:
      return 'prism';

    case 2:
      return 'prism setToAbout';

    case 3:
      return 'prism setToRound';

    case 4:
      return 'prism setToScore';

    default:
      return 'prism';
  }
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case ROTATE_PRISM:
      return { ...state, prismClass: handleClass(action.payload) };

    case GENERATE_QUESTION_SET:
      console.log(action.payload);
      return { ...state, questions: action.payload };

    case TEMP_ANSWER:
      return { ...state, tempAnswer: action.payload };

    case RECORD_ANSWER:
      return {
        ...state,
        selectedAnswers: [...state.selectedAnswers, state.tempAnswer],
      };

    case PROGRESS_QUESTION:
      return {
        ...state,
        tempAnswer: '',
        qIndex: state.qIndex + 1,
      };

    case SET_TOTAL:
      return {
        ...state,
        total: action.payload.total,
        prismClass: handleClass(action.payload.face),
      };

    case RESET:
      console.log(action.payload);
      return {
        ...state,
        questoins: action.payload,
        prismFace: 1,
        prismClass: handleClass(1),
        qIndex: 0,
        tempAnswer: '',
        selectedAnswers: [],
        total: 0,
      };

    default:
      return state;
  }
};
