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

export { 
    FavoriteWrapper,
    StyledFigure,
}