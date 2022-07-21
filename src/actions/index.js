export const signIn = username => {
    return{
        type: 'SIGN_IN',
        payload: username
    }
}


export const addScore = e => ({ 
    type: "ADD_A_SCORE",
    payload: { name: e.target.name, score: e.target.score }
})
