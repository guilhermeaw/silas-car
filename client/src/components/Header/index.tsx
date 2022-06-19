import { Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/Auth';

import { RouterLink } from '../RouterLink';

import * as S from './styles';

export const Header = () => {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  const handleSignOut = () => {
    signOut();
    navigate('/login');
  };

  return (
    <S.Header>
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <RouterLink to="/">
            <Typography variant="h1" fontSize="1.5rem">
              Silas Car
            </Typography>
          </RouterLink>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={() => navigate('/dashboard')}>
            Dashboard
          </Button>

          {user && (
            <Button variant="contained" onClick={handleSignOut}>
              Logout
            </Button>
          )}
        </Stack>
      </Container>
    </S.Header>
  );
};
