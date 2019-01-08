import _ from 'lodash';
import { FETCH_GAMES, FETCH_GAME } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_GAMES:
            return { ...state, ..._.mapKeys(action.payload, '_id') };
        case FETCH_GAME:
            return { ...state,  [action.payload.id]: action.payload };
        default:
            return state;
    }
}
