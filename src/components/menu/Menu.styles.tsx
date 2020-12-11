import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    min-height: 100px;
`;

const StyledList = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-around;
    list-style: none;
`;

const StyledListElement = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    width: 170px;
    height: 45px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        text-decoration: none;
        color: black;
    }
`;

const StyledDropdown = styled(StyledListElement)`
    position: relative;
    flex-direction: column;

    &:hover {
        > ul {
            display: flex;
            justify-content: center;
            opacity: 1;
        }
    }
`

const StyledSubitem = styled(StyledList)`
    display: none;
    opacity: 1;
    position: absolute;
    bottom: -30px;
    left: 32px;
    transition: opacity .3s;
`

export {
    StyledHeader,
    StyledList,
    StyledListElement,
    StyledSubitem,
    StyledDropdown,
};
