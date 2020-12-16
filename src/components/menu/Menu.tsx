import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoutes } from '../../routing/AppRoutes.enum';
import { 
    StyledHeader, 
    StyledList, 
    StyledListElement, 
    StyledSubitem,
    StyledDropdown,
    StyledSubListElement, 
    StyledArrow,
    DropdownWrapper,
} from './Menu.styles';
import { bool } from 'prop-types';


const HOME: string = 'Strona Główna';
const FAVORITE: string = 'Ulubione ';
const ADD_COMMENT: string = 'Dodaj nowy komentarz';
const FILTER: string = 'Filtruj';


const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<bool>(false);
    const favorite = useSelector(store => store.favorite);
    const currentPath = useLocation();
    const isCurrentPath = (path: string) => currentPath.pathname === path;
    const likedElementsCount: boolean = favorite.favorite.length ? favorite.favorite.length : '0';

    return (
        <StyledHeader>
                <StyledList>
                    <StyledListElement isCurrentPath={isCurrentPath(AppRoutes.home)}>
                        <Link to={AppRoutes.home}>{HOME}</Link>                        
                    </StyledListElement>
                    <DropdownWrapper>
                        <StyledArrow onClick={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} />
                        <StyledDropdown isOpen={isMenuOpen} isCurrentPath={isCurrentPath(AppRoutes.favorite)}>
                            <Link onClick={() => setIsMenuOpen(false)} to={AppRoutes.favorite}>{FAVORITE}{likedElementsCount}</Link>
                            <StyledSubitem>
                                <StyledSubListElement isCurrentPath={isCurrentPath(AppRoutes.addNewComment)}>
                                    <Link style={{ fontWeight: isCurrentPath ? 700 : 400}} 
                                          onClick={() => setIsMenuOpen(false)}
                                          to={AppRoutes.addNewComment}>
                                            {ADD_COMMENT}
                                    </Link>
                                </StyledSubListElement>
                            </StyledSubitem>
                        </StyledDropdown>
                    </DropdownWrapper>
                    <StyledListElement isCurrentPath={isCurrentPath(AppRoutes.filter)}>
                        <Link to={AppRoutes.filter}>{FILTER}</Link>
                    </StyledListElement>
                </StyledList>
        </StyledHeader>
    )
};

export default Menu;
