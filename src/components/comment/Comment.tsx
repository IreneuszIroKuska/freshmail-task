import React, { FC, memo } from 'react';
import AddToFavorite from '../addToFavorite';
import { 
    CommentWrapper, 
    CommentTitle, 
    TitleWrapper,
    ContentWrapper,
    Separator,
    ContentSeparator,
} from './Comment.styles';

interface props {
    id: number,
    name: string,
    email: string,
    body?: string, 
    disableCheckbox?: boolean,
}

const Comment:FC<props> = memo(({ id, name, email, body, disableCheckbox}) => (
    <CommentWrapper>
        <TitleWrapper>
            <CommentTitle>Comment: </CommentTitle>
            Dodaj do ulubionych: {!disableCheckbox && <AddToFavorite id={id} />}
        </TitleWrapper>
        <ContentWrapper>
            <Separator>Nick:</Separator>
            <ContentSeparator>{name.length > 15 ? name.slice(0, 15) : name}</ContentSeparator>
            <Separator>email:</Separator>
            <ContentSeparator>{email}</ContentSeparator>
            <Separator>comment:</Separator>
            <ContentSeparator>{body ? body.slice(0, 20) : ''}</ContentSeparator>
        </ContentWrapper>

    </CommentWrapper>
));

export default Comment;
