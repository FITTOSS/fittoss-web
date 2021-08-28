import {SET_ROLE, REGISTER_USER} from "./types";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_ROLE:
            return {
                ...state,
                role: action.role
            };
        case REGISTER_USER:
            return {
                ...state,
                register: action.payload
            };
        default:
            return state;
    }
};

export default reducer;