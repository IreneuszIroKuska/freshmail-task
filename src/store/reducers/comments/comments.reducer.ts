import {    
    COMMENTS_GET_FAILURE,
    COMMENTS_GET_SUCCESS,
    COMMENTS_GET_REQUEST,
} from '../../types/comments'

const initialState = {
    loadingState: {},
    comments: [],
};

export const LOADING_STATES = {
    INITIAL: 'INITIAL',
    LOADING: 'LOADING', 
    LOADED: 'LOADED',
    FAILDED: 'FAILED',
}


const commentsReducer = (state = initialState, action) => {
    const newLoadingState = { ...state.loadingState };

    switch(action.type) {
        case COMMENTS_GET_REQUEST: {
            return {
                ...state,
                loadingState: {
                    ...state.loadingState,
                    [action.type]: LOADING_STATES.LOADING,
                }
            }
        }
        case COMMENTS_GET_SUCCESS:
            delete newLoadingState.COMMENTS_GET_REQUEST;
            return {
                ...state,
                comments: action.payload,
                loadingState: newLoadingState,
            }

        case COMMENTS_GET_FAILURE: 
            delete newLoadingState.COMMENTS_GET_REQUEST;
            
            return {
                ...state,
                comments: {},
                loadingState: newLoadingState,
            }

        default: 
            return state;
        }
}

export default commentsReducer;
