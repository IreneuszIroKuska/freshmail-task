import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Homepage from '../pages/homepage';
import AddNewComment from '../pages/addNewComment';
import Favorite from '../pages/favorite';
import Filter from '../pages/filter';

import { AppRoutes as PageRoute } from './AppRoutes.enum';

const AppRoutes = () => {
    return (
        <Switch>
            <Route path={PageRoute.home} exact component={Homepage} />
            <Route path={PageRoute.favorite} component={Favorite} />
            <Route path={PageRoute.addNewComment} component={AddNewComment} />
            <Route path={PageRoute.filter} component={Filter} />

            {/* redirect to home if page not exist */}
            <Redirect to={PageRoute.home} />
        </Switch>
    )
};

export default AppRoutes
