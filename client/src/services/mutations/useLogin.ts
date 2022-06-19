import { useMutation } from 'react-query';

import { useSnackbar } from 'notistack';
import { SignInCredentials } from '../../store/Auth/AuthContext';
import { User } from '../../models/User';
import api from '../api';

type SessionValues = {
  token: string;
  user: User;
};

export const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    ({ email, password }: SignInCredentials) =>
      api
        .post<SessionValues>('/session', { email, password })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
      },
    },
  );
};
