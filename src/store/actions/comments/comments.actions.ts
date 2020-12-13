import { COMMENTS_GET } from '../../types/comments';

export const fetchComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')

    const promise = fetch('https://jsonplaceholder.typicode.com/comments');

    return {
        type: COMMENTS_GET,
        promise
    };
};