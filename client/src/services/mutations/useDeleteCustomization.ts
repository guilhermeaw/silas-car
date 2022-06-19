import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';

import api from '../api';

export const useDeleteCustomization = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    (id: string) =>
      api.delete(`/customizations/${id}`).then(response => response.data),
    {
      onError: (error: Error) => {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
      },
      onSuccess: () => {
        enqueueSnackbar('Customização excluída com sucesso.', {
          variant: 'success',
        });
      },
    },
  );
};
