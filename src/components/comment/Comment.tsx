import React, { FC, memo } from 'react';
import { 
    CommentWrapper, 
    CommentTitle, 
    TitleWrapper,
    ContentWrapper,
    Separator,
    ContentSeparator,
} from './Comment.styles';

interface props {
    name: string,
    email: string,
    body?: string, 
}

const Comment:FC<props> = memo(({ name, email, body}) => (
    <CommentWrapper>
        <TitleWrapper>
            <CommentTitle>Comment: </CommentTitle>
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
