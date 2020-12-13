import { 
    ADD_TO_FAVORITE,
    REMOVE_FROM_FAVORITE,
} from '../../types/favorite';

const initialState = {
    favorite: []
};

const favorite = (state = initialState, action: any) => {
    switch(action.type) {
        case ADD_TO_FAVORITE:
            return {
                ...state,
                favorite: [...state.favorite, action.id],
            }
        case REMOVE_FROM_FAVORITE:
            return {
                ...state,
                favorite: state.favorite.filter((id) => action.id !== id)
            }
        default:
            return {
                ...state
            }
    }
}

export default favorite;
