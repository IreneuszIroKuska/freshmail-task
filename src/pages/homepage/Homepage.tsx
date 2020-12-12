import React, { Suspense } from 'react';
import HomeContainer from '../../containers/homeContainer';
import Loader from '../../components/loader';
import { HomepageWrapper } from './Homepage.styles';

const Homepage = () => (
    <Suspense fallback={<Loader />}>
        <HomepageWrapper>
            <HomeContainer />
        </HomepageWrapper>
    </Suspense>

);

export default Homepage;
