import { cloneDeep } from 'lodash';
const initialState = {
    timeLimit: 60,
};

const appReducer = (state = initialState, action) => {
    let newState = cloneDeep(state);
    switch (action.type) {

        case 'TIME_LIMIT_UPDATED':
            newState.timeLimit = action.timeLimit;
            return newState;


        default:
            return state;
    }
}

export default appReducer;