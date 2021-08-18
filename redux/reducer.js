import {SET_ROLE} from "./types";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_ROLE:
            return {
                ...state,
                role: action.role
            };
        default:
            return state;
    }
};

export default reducer