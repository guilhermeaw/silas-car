import { useLocation, useNavigate } from 'react-router-dom';
import { RefObject, useRef } from 'react';
import { Button, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import { AuthContainer } from '../../components/AuthContainer';
import { InputPassword } from '../../components/InputPassword';
import { InputEmail } from '../../components/InputEmail';
import { FormInput } from '../../components/FormInput';

import { useAuth } from '../../store/Auth';

import * as S from './styles';

type LoginFormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const emailInput = useRef(null) as RefObject<HTMLInputElement>;
  const passwordInput = useRef(null) as RefObject<HTMLInputElement>;

  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const { handleSubmit, control } = useForm<LoginFormData>();

  const from = location.state?.from?.pathname || '/';

  const handleLogin: SubmitHandler<LoginFormData> = async data => {
    const { email, password } = data;

    await signIn({ email, password });

    navigate(from);
  };

  return (
    <AuthContainer>
      <S.Form onSubmit={handleSubmit(handleLogin)}>
        <Typography variant="h1" sx={{ marginBottom: '2rem' }}>
          Fazer login
        </Typography>

        <FormInput
          control={control}
          label="E-mail"
          name="email"
          size="medium"
          type="email"
          required
        />

        <FormInput
          control={control}
          label="Senha"
          name="password"
          size="medium"
          type="password"
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
      </S.Form>
    </AuthContainer>
  );
};

export default LoginPage;
