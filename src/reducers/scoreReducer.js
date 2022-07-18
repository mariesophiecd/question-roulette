const initState = [
  ,
  { name: "playerA", score: 500 },
  { name: "playerB", score: 300 },
  { name: "playerC", score: 400 },
  { name: "playerD", score: 100 },
];

const scoreReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_A_SCORE":
      const newScore = action.payload;
      return [...state, newScore];
    default:
      return state;
  }
};

export default scoreReducer;
