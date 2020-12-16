import React from 'react';
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
} from './Menu.styles';


const HOME = 'Strona Główna';
const FAVORITE = 'Ulubione ';
const ADD_COMMENT = 'Dodaj nowy komentarz';
const FILTER = 'Filtruj';


const Menu = () => {
    const favorite = useSelector(store => store.favorite);
    const currentPath = useLocation();
    const isCurrentPath = (path: string) => currentPath.pathname === path;
    const likedElementsCount = favorite.favorite.length ? favorite.favorite.length : '0';

    return (
        <StyledHeader>
                <StyledList>
                    <StyledListElement isCurrentPath={isCurrentPath(AppRoutes.home)}>
                        <Link to={AppRoutes.home}>{HOME}</Link>                        
                    </StyledListElement>
                    <StyledDropdown isCurrentPath={isCurrentPath(AppRoutes.favorite)}>
                        <Link to={AppRoutes.favorite}>{FAVORITE}{likedElementsCount}</Link>
                        <StyledSubitem>
                            <StyledSubListElement isCurrentPath={isCurrentPath(AppRoutes.addNewComment)}>
                                <Link to={AppRoutes.addNewComment}>{ADD_COMMENT}</Link>
                            </StyledSubListElement>
                        </StyledSubitem>
                    </StyledDropdown>
                    <StyledListElement isCurrentPath={isCurrentPath(AppRoutes.filter)}>
                        <Link to={AppRoutes.filter}>{FILTER}</Link>
                    </StyledListElement>
                </StyledList>
        </StyledHeader>
    )
};

export default Menu;
