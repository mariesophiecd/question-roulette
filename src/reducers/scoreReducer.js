const initState = [
  { name: "Smith", score: 500 },
  { name: "Quizzard", score: 300 },
  { name: "E=MC ", score: 400 },
  { name: "Bigwin", score: 100 },
  { name: "Google", score: 900 },
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
