const initialState = {
    a: 1
};

const reducerA = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'Update_A':
            return {
                ...state,
                a: state.a + action.b,

            }
    }
    return newState;
}

export default reducerA;