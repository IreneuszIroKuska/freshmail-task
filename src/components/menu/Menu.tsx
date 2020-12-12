import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { 
    StyledHeader, 
    StyledList, 
    StyledListElement, 
    StyledSubitem,
    StyledDropdown,
    StyledSubListElement, 
} from './Menu.styles';

import { AppRoutes } from '../../routing/AppRoutes.enum';

const Menu = () => {
    const currentPath = useLocation();
    const isCurrentPath = (path: string) => currentPath.pathname === path;

    return (
        <StyledHeader>
                <StyledList>
                    <StyledListElement isCurrentPath={isCurrentPath(AppRoutes.home)}>
                        <Link to={AppRoutes.home}>Home</Link>                        
                    </StyledListElement>
                    <StyledDropdown isCurrentPath={isCurrentPath(AppRoutes.favorite)}>
                        <Link to={AppRoutes.favorite}>ulubione</Link>
                        <StyledSubitem>
                            <StyledSubListElement isCurrentPath={isCurrentPath(AppRoutes.addNewComment)}>
                                <Link to={AppRoutes.addNewComment}>Dodaj nowy komentarz</Link>
                            </StyledSubListElement>
                        </StyledSubitem>
                    </StyledDropdown>
                    <StyledListElement isCurrentPath={isCurrentPath(AppRoutes.filter)}>
                        <Link to={AppRoutes.filter}>Filtr</Link>
                    </StyledListElement>
                </StyledList>
        </StyledHeader>
    )
};

export default Menu;
