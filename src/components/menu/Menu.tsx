import React from 'react';
import { Link } from 'react-router-dom';

import { 
    StyledHeader, 
    StyledList, 
    StyledListElement, 
    StyledSubitem,
    StyledDropdown 
} from './Menu.styles';

import { AppRoutes } from '../../routing/AppRoutes.enum';

const Menu = () => {
    return (
        <StyledHeader>
                <StyledList>
                    <StyledListElement>
                        <Link to={AppRoutes.home}>Home</Link>                        
                    </StyledListElement>
                    <StyledDropdown>
                        <Link to={AppRoutes.favorite}>ulubione</Link>
                        <StyledSubitem>
                            <Link to={AppRoutes.addNewComment}>Dodaj nowy komentarz</Link>
                        </StyledSubitem>
                    </StyledDropdown>
                    <StyledListElement>
                        <Link to={AppRoutes.filter}>Filtr</Link>
                    </StyledListElement>
                </StyledList>
        </StyledHeader>
    )
};

export default Menu;
