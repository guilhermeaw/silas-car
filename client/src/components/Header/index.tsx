import { Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

export const Header = () => {
  const navigate = useNavigate();

  const user = null;

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
          <Typography variant="h1" fontSize="1.5rem">
            Silas Car
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          {user ? (
            <Button variant="contained" onClick={() => {}}>
              Logout
            </Button>
          ) : (
            <Button variant="outlined" onClick={() => navigate('/dashboard')}>
              Dashboard
            </Button>
          )}
        </Stack>
      </Container>
    </S.Header>
  );
};
