import _ from 'lodash';
import { FETCH_LIVE_STREAMS } from '../actions/types';


export default (state = {}, action) => {
    console.log("live stream", action.type)
    switch (action.type) {
        case FETCH_LIVE_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, '_id') };
        default:
            return state;
    }
}
        
        
