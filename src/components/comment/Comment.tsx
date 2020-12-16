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

const TEXT: string = "Dodaj do ulubionych: ";
const COMMENT: string = "Komentarz: ";
const NICK: string = 'Nazwa:';
const EMAIL: string = 'Email';

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
            <CommentTitle>{COMMENT}</CommentTitle>
            {!disableCheckbox && <AddToFavorite id={id} text={TEXT} />}
        </TitleWrapper>
        <ContentWrapper>
            <Separator>{NICK}</Separator>
            <ContentSeparator>{name.length > 15 ? name.slice(0, 15) : name}</ContentSeparator>
            <Separator>{EMAIL}</Separator>
            <ContentSeparator>{email}</ContentSeparator>
            <Separator>{COMMENT}</Separator>
            <ContentSeparator>{body ? body.slice(0, 20) : ''}</ContentSeparator>
        </ContentWrapper>
    </CommentWrapper>
));

export default Comment;
