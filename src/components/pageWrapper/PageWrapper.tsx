import React, { FC, ReactNode } from 'react';

import {
    Container,
    Wrapper,
} from './PageWrapper.styles';

interface props {
    children?: ReactNode;
}

const PageWrapper:FC<props> = ({ children }) => (
    <Container>
        <Wrapper>
            {children}
        </Wrapper>
    </Container>
);

export default PageWrapper;
