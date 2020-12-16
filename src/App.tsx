import React from 'react';
import WithErrorBoundary from './hoc/withErrorBoundary';
import StoreProvider from './providers/storeProvider/StoreProvider';
import ThemeProvider from './providers/themeProvider/ThemeProvider';
import AppProvider from './providers/appProvider/AppProvider';
import AppRoutes from './routing/AppRoutes';
import Menu from './components/menu';
import PageWrapper from './components/pageWrapper';

const App = () => (
  <StoreProvider>
    <ThemeProvider>
      <AppProvider>
      <Menu />
        <PageWrapper>
          <AppRoutes />
        </PageWrapper>
      </AppProvider>
    </ThemeProvider>
  </StoreProvider>
)

export default WithErrorBoundary(App);
