import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';

import { Customization } from '../../models/Customization';
import api from '../api';

export const useAddCustomization = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    ({ description, img_url, title }: Omit<Customization, '_id' | 'date'>) =>
      api
        .post<Customization>('/customizations', {
          description,
          title,
          img_url,
        })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
      },
      onSuccess: () => {
        enqueueSnackbar('Customização adicionada com sucesso.', {
          variant: 'success',
        });
      },
    },
  );
};
