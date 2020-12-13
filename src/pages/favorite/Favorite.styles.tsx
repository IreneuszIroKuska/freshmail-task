import styled from 'styled-components';

const FavoriteWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 6px;
`;

const StyledFigure = styled.figure`
    display: flex;
    flex-direction: column;
    margin-right: 12px;
`;

const StyledButton = styled.button`
    margin-top: 10px;
    padding: 25px;
    border-radius: 12px;
`

export { 
    FavoriteWrapper,
    StyledFigure,
    StyledButton,
}