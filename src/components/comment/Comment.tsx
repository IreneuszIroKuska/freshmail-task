import React, { FC, memo } from 'react';
import { CommentWrapper } from './Comment.styles';

interface props {
    name: string,
    email: string,
    body?: string, 
}

const Comment:FC<props> = memo(({ name, email, body}) => (
    <CommentWrapper>
        <span>{name}</span>
        <span>{email}</span>
        <span>{body}</span>
    </CommentWrapper>
));

export default Comment;
