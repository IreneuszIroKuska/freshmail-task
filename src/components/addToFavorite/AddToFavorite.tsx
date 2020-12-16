import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToFavoriteAction, removeFavorite } from '../../store/actions/favortie/favorite.actions'

interface props {
    id: number;
    text?: string;
}

const AddToFavorite:FC<props> = ({ id, text }) => {
    const [checked, setChecked] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleChange = () => {
        setChecked(!checked);
        if (!checked) {
            dispatch(addToFavoriteAction(id));
        } else {
            dispatch(removeFavorite(id));
        }
    }

    return (
        <>  
            {text}
            <input type="checkbox" checked={checked} onChange={handleChange} />
        </>
    )
}

export default AddToFavorite;
