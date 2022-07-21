export const signIn = (username) => {
  return {
    type: "SIGN_IN",
    payload: username,
  };
};

export const addScore = (username, score) => ({
  type: "ADD_A_SCORE",
  payload: { name: username, score: score },
});
