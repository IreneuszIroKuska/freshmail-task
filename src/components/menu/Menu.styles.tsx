import styled from 'styled-components';

interface props {
    isCurrentPath: boolean;
}

interface isOpen {
    isOpen: boolean;
}

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    min-height: 100px;
    background-color: ${({ theme }) => theme.colors.white};
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
        color: ${({ theme }) => theme.colors.black};
    }

    &:hover {
        a {
            font-weight: 800;
        }
    } 
`;

const StyledDropdown = styled(StyledListElement)<isOpen>`
    position: relative;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};

    ul {
        display: ${({ isOpen }) => isOpen ? 'flex' : ''};
    }

    &:hover {
        > ul {
            justify-content: center;
            align-items: center;
            width: 100%;

            a {
                font-weight: 400;
            }
        }
    }
`;

const DropdownWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledArrow = styled.span<isOpen>`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transition: transform .3s;
    margin-right: 3px;
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(-135deg)'};
`

const StyledSubitem = styled(StyledList)`
    display: none;
    position: absolute;
    z-index: 1;
    bottom: -85px;
    transition: opacity .3s;
    background-color: white;
    border: 1px solid black;
    border-radius: ${({ theme }) => theme.radius.siteRadius};
    
    li {
        a {
            &:hover { 
                font-weight: 700;
            }
        }
    }
`;

const StyledSubListElement = styled(StyledListElement)`
    width: 110px;
    padding: 20px;
    font-weight:${({ isCurrentPath }) => isCurrentPath ? 700 : 400} !important;    
`;

export {
    StyledHeader,
    StyledList,
    StyledListElement,
    StyledSubitem,
    StyledDropdown,
    StyledSubListElement,
    StyledArrow,
    DropdownWrapper,
};
