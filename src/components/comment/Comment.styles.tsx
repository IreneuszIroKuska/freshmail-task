import styled from 'styled-components';

const CommentWrapper = styled.figure`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: ${({ theme }) => theme.colors.blue};
    padding: 8px;
    border-radius: ${({ theme }) => theme.radius.siteRadius};
    transition: all .3s;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0px 0px 39px 10px rgba(0,0,0,0.53);
    }
`;

const CommentTitle = styled.h3`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
`;

const TitleWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
    padding-bottom: 5px;
    color: ${({ theme }) => theme.colors.orange};
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    margin-top: 10px;
`;

const Separator = styled.div`
    font-size: 20px;
    margin-top: 5px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.white};
`;

const ContentSeparator = styled(Separator)`
    font-size: 14px;
    margin-top: 5px;
    font-weight: 400;
    word-wrap: break-word;
`;

export {
    CommentWrapper,
    CommentTitle,
    TitleWrapper,
    ContentWrapper,
    Separator,
    ContentSeparator,
};
