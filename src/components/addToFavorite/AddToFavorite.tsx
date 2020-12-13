import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { addToFavoriteAction, removeFavorite } from '../../store/actions/favortie/favorite.actions'

interface props {
    id: number;
    addToFavoriteAction: (id: number) => {};
    removeFavorite: (id: number) => {};
}

const AddToFavorite:FC<props> = ({ id, addToFavoriteAction, removeFavorite }) => {
    const [checked, setChecked] = useState<boolean>(false);
    const handleChange = () => {
        setChecked(!checked);
        if (!checked) {
            addToFavoriteAction(id)
        } else {
            removeFavorite(id)
        }
    }

    return (
        <input type="checkbox" checked={checked} onChange={handleChange} />
    )
}

export default connect(null, {
    addToFavoriteAction, 
    removeFavorite,
})(AddToFavorite);
