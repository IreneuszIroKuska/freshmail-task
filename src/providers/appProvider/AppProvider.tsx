import React, { FC, ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

interface props {
    children?: ReactNode;
}

const AppProvider:FC<props> = ({children}) => <Router>{children}</Router>;

export default AppProvider;
