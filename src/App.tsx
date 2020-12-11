import React from 'react';
import ThemeProvider from './providers/themeProvider/ThemeProvider';
import AppProvider from './providers/appProvider/AppProvider';
import AppRoutes from './routing/AppRoutes';
import Menu from './components/menu';
import PageWrapper from './components/pageWrapper';

const App = () => (
  <ThemeProvider>
    <AppProvider>
    <Menu />
      <PageWrapper>
        <AppRoutes />
      </PageWrapper>
    </AppProvider>
  </ThemeProvider>
)

export default App;
