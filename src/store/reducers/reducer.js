const initialState = {
    a: 1,
    b: 1,
    age: 21,
    history: []
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case "AGE_UP":
            return {
                ...state,
                age: state.age + action.value,
                history: state.history.concat({ id: Math.random(), age: state.age + action.value })
            }
        case 'AGE_DOWN':
            return {
                ...state,
                age: state.age - action.value,
                history: state.history.concat({ id: Math.random(), age: state.age - action.value })
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                history: state.history.filter(el => el.id !== action.key)
            }
        case 'Update_A':
            return {
                ...state,
                a: state.a + state.b,

            }

        case 'Update_B':
            return {
                ...state,
                b: state.b + state.a,

            }
        case 'LOADING':
            newState.loading = true;
            break;
    }
    return newState;
}

export default reducer;