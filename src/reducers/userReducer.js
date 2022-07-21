const initState = '';

const userReducer = (state = initState, action) => {
    switch(action.type){
        case 'SIGN_IN':
            const newUser = action.payload;
            return [...state, newUser];
        default:
            return state;
    }
}

export default userReducer;
