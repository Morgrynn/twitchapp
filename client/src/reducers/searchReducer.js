import { SEARCH_FIELD } from "../actions/types";

const INITIAL_STATE = {
    searchField: ''
}

export default (state=INITIAL_STATE, action={}) => {
    // console.log("reducer", action.type)
    switch (action.type) {
        case SEARCH_FIELD:
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
}