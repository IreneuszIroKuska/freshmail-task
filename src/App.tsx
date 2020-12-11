import React from 'react';
import ThemeProvider from './providers/themeProvider/ThemeProvider';
import AppProvider from './providers/appProvider/AppProvider';
import AppRoutes from './routing/AppRoutes';

const App = () => (
  <ThemeProvider>
    <AppProvider>
    <header> Menu </header>
      <AppRoutes />
    </AppProvider>
  </ThemeProvider>
)

export default App;
