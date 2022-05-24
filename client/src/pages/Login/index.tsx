import { FormEvent, RefObject, useRef } from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { AuthContainer } from '../../components/AuthContainer';
import { InputPassword } from '../../components/InputPassword';
import { InputEmail } from '../../components/InputEmail';

import * as S from './styles';
import { RouterLink } from '../../components/RouterLink';

const LoginPage = () => {
  const emailInput = useRef(null) as RefObject<HTMLInputElement>;
  const passwordInput = useRef(null) as RefObject<HTMLInputElement>;

  const navigate = useNavigate();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate('/');
  };

  return (
    <AuthContainer>
      <S.Form onSubmit={handleLogin}>
        <Typography variant="h1" sx={{ marginBottom: '2rem' }}>
          Fazer login
        </Typography>

        <InputEmail
          inputRef={emailInput}
          size="medium"
          margin="dense"
          required
        />

        <InputPassword
          size="medium"
          margin="dense"
          inputRef={passwordInput}
          required
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ marginTop: '1rem' }}
        >
          Entrar
        </Button>

        <Button sx={{ marginTop: '1rem' }}>
          <RouterLink to="/signup">Registrar-se</RouterLink>
        </Button>
      </S.Form>
    </AuthContainer>
  );
};

export default LoginPage;
