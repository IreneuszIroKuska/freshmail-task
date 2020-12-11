import styled from 'styled-components';

const CommentWrapper = styled.figure`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: blue;
    padding: 8px;
    border-radius: 12px;
    transition: all .3s;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0px 0px 39px 10px rgba(0,0,0,0.53);
    }
`;

export {
    CommentWrapper,
};
