import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';

import { Customization } from '../../models/Customization';
import api from '../api';

export const useEditCustomization = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    ({ _id, description, img_url, title }: Omit<Customization, 'date'>) =>
      api
        .put<Customization>(`/customizations/${_id}`, {
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
        enqueueSnackbar('Customização atualizada com sucesso.', {
          variant: 'success',
        });
      },
    },
  );
};
