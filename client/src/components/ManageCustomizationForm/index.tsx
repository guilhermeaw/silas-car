import { Button } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FormInput } from '../FormInput';

export type CustomizationFormData = {
  customizationTitle: string;
  customizationDescription: string;
  customizationImageUrl: string;
};

type ManageCustomizationFormProps = {
  defaultValues?: CustomizationFormData | undefined;
  onSubmit: SubmitHandler<CustomizationFormData>;
};

export const ManageCustomizationForm = ({
  defaultValues,
  onSubmit,
}: ManageCustomizationFormProps) => {
  console.log({ defaultValues });
  const { handleSubmit, control } = useForm<CustomizationFormData>({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        control={control}
        label="Título"
        name="customizationTitle"
        required
      />

      <FormInput
        control={control}
        label="Descrição"
        name="customizationDescription"
        required
        multiline
        minRows={2}
      />

      <FormInput
        control={control}
        label="Imagem (URL)"
        name="customizationImageUrl"
        required
      />

      <Button sx={{ marginTop: '0.5rem' }} variant="contained" type="submit">
        Confirmar
      </Button>
    </form>
  );
};
