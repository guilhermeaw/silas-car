import { Button, Container, Stack, Typography } from '@mui/material';

import * as S from './styles';

export const Header = () => {
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
          <Button variant="contained" onClick={() => {}}>
            Logout
          </Button>
        </Stack>
      </Container>
    </S.Header>
  );
};
