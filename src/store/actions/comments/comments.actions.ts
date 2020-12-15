import { COMMENTS_GET, COMMENTS_POST } from '../../types/comments';

export const fetchComment = () => {
    const promise = fetch('https://jsonplaceholder.typicode.com/comments');

    return {
        type: COMMENTS_GET,
        promise
    };
};

export const addComment = ({ name, email, text }, id) => {
    const promise = fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify({
            postId: 100,
            id: `${id}`,
            name: `${name}`,
            email: `${email}`,
            body: `${text}`,
    }),

    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })

    return {
        type: COMMENTS_POST,
        promise
    };
};