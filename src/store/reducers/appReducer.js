import { cloneDeep } from 'lodash';
const initialState = {
};

const appReducer = (state = initialState, action) => {
    let newState = cloneDeep(state);
    switch (action.type) {

        default:
            return state;
    }
}

export default appReducer;