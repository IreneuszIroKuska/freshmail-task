import { 
    ADD_TO_FAVORITE,
    REMOVE_FROM_FAVORITE,
} from '../../types/favorite';

const addToFavoriteAction = (id: number) => {
    return {
        type: ADD_TO_FAVORITE,
        id,
    }
};

const removeFavorite = (id: number) => {
    return {
        type: REMOVE_FROM_FAVORITE,
        id,
    }
}

export {
    addToFavoriteAction,
    removeFavorite,
};
