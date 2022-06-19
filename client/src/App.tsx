import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import { Routes } from './routes';
import { AuthProvider } from './store/Auth';

import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={new QueryClient()}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </SnackbarProvider>
      </QueryClientProvider>

      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
