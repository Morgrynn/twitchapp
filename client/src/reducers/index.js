import { combineReducers } from "redux";
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import streamReducer from './streamReducer';
import searchReducer from './searchReducer';
import liveStreamReducer from './liveStreamReducer';
import gameReducer from './gameReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    search: searchReducer,
    live: liveStreamReducer,
    games: gameReducer,
    streams: streamReducer
})