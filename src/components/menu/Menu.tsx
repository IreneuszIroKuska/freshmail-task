import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { 
    StyledHeader, 
    StyledList, 
    StyledListElement, 
    StyledSubitem,
    StyledDropdown,
    StyledSubListElement, 
} from './Menu.styles';

import { AppRoutes } from '../../routing/AppRoutes.enum';

interface props {
    favorite: Array<any>;
}

const Menu:FC<props> = ({ favorite }) => {
    const currentPath = useLocation();
    const isCurrentPath = (path: string) => currentPath.pathname === path;
    const likedElementsCount = favorite.favorite.length ? favorite.favorite.length : '0';

    return (
        <StyledHeader>
                <StyledList>
                    <StyledListElement isCurrentPath={isCurrentPath(AppRoutes.home)}>
                        <Link to={AppRoutes.home}>Home</Link>                        
                    </StyledListElement>
                    <StyledDropdown isCurrentPath={isCurrentPath(AppRoutes.favorite)}>
                        <Link to={AppRoutes.favorite}>ulubione: {likedElementsCount}</Link>
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

const mapStateToProps = state => ({
    favorite: state.favorite,
});

export default connect(mapStateToProps, {})(Menu);
