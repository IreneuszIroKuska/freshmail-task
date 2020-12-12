import styled from 'styled-components';

interface props {
    isCurrentPath: boolean;
}

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

const StyledListElement = styled.li<props>`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    width: 170px;
    height: 45px;
    font-weight:${({ isCurrentPath }) => isCurrentPath ? 700 : 400};

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        text-decoration: none;
        color: black;
    }

    &:hover {
        a {
            font-weight: 800;
        }
    } 
`;

const StyledDropdown = styled(StyledListElement)`
    position: relative;
    flex-direction: column;

    &:hover {
        > ul {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
    }
`

const StyledSubitem = styled(StyledList)`
    display: none;
    position: absolute;
    z-index: 1;
    bottom: -85px;
    transition: opacity .3s;
    background-color: white;
    border: 1px solid black;
    border-radius: 12px;
`;

const StyledSubListElement = styled(StyledListElement)`
    width: 110px;
    padding: 20px;
`;

export {
    StyledHeader,
    StyledList,
    StyledListElement,
    StyledSubitem,
    StyledDropdown,
    StyledSubListElement,
};
