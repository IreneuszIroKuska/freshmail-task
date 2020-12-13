import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';

interface props {
    children?: ReactNode;
}
const store = configureStore();

const StoreProvider:FC<props> = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
)

export default StoreProvider;
