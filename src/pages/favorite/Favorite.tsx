import React, { FC } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Comment from '../../components/comment';
import { removeFavorite } from '../../store/actions/favortie/favorite.actions';
import { FavoriteWrapper, StyledFigure } from './Favorite.styles';

interface props {
    favorite: any;
    comments: any;
    removeFavorite: (id: number) => {};
}

const elementMapper = (data:data[], callback) => {
    return data.map(item => {
        return (
            <StyledFigure key={item.id}>
                <Comment id={item.id} name={item.name} email={item.email} body={item.body} disableCheckbox />
                <Button onClick={() => callback(item.id)}> remove item </Button>
            </StyledFigure>
        )
    })
}

const Favorite:FC<props> = ({ favorite, comments, removeFavorite }) => {
    const data:Array<any> = [];
    if (favorite.length && comments.length) {
        favorite.forEach(item => {
            const search = comments.find(items => items.id === item);
            data.push(search);
        })
    }
    

    return (
        <FavoriteWrapper>
            {elementMapper(data, removeFavorite)}
        </FavoriteWrapper>
    )

};

const mapStateToProps = state => ({
    favorite: state.favorite.favorite,
    comments: state.commentsReducer.comments,
});

export default connect(mapStateToProps, { removeFavorite })(Favorite);
