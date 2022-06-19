import { useSnackbar } from 'notistack';
import { useQuery } from 'react-query';

import { Customization } from '../../models/Customization';
import api from '../api';

export const useFetchCustomizations = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery(
    'customizations',
    () =>
      api
        .get<Customization[]>('/customizations')
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
