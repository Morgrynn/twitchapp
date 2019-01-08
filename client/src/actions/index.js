import { 
    SIGN_IN,
    SIGN_OUT, 
    FETCH_GAMES,
    FETCH_GAME,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM,
    FETCH_LIVE_STREAM,
    FETCH_LIVE_STREAMS,
    SEARCH_FIELD,
    CREATE_STREAM,
 } from "./types";
import twitch from "../api/twitch";
import streams from '../api/streams';
import history from '../history';


export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const fetchGames = () => async dispatch => {
    const response = await twitch.get(`/streams/?limit=20`);
    // console.log("action fetchGames", response.data.streams)
    dispatch({
        type: FETCH_GAMES,
        payload: response.data.streams
    })
}

export const fetchGame = (id) => async dispatch => {
    const response = await twitch.get(`/streams/${id}`);
    console.log(response.data)
    dispatch({
        type: FETCH_GAME,
        payload: response.data
    })
    // history.push("/streams/browse");
}



export const setSearchField = (text) => async dispatch => {
    await twitch.get(`/search/streams?query=${text}`);
    dispatch({
        type: SEARCH_FIELD,
        payload: text
    })
}

export const fetchLiveStreams = () => async dispatch => {
    const response = await twitch.get('/streams');
    // console.log("action streams ", response.data.streams)
    dispatch({
        type: FETCH_LIVE_STREAMS,
        payload:response.data.streams
    })
}

export const fetchLiveStream = (text) => async dispatch => {
    const response = await twitch.get(`/streams/?game=${text}`);
    dispatch({
        type: FETCH_LIVE_STREAM,
        payload: response.data.streams
    })
}

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    // console.log("action", response.data)
    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
}

export const createStream = formValues => async (dispatch, getState) => {
    // gets the userId from auth
    const { userId } = getState().auth;
//  const response = await streams.post('/streams', formValues);
//  combine userId and formValues in one object
    const response = await streams.post('/streams', { ...formValues, userId });

   dispatch({
       type: CREATE_STREAM,
       payload: response.data
   })

   // Do some programmatic navigation to 
   // get the user back to the root route
   history.push('/streams/channel')

};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })
};

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
    history.push('/streams/channel');
} 

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
    history.push("/streams/channel")
}
