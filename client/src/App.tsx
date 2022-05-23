import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>App</h1>

      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
