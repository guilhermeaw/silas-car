import { Button } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FormInput } from '../FormInput';

export type JobFormData = {
  jobTitle: string;
  jobDescription: string;
  jobImageUrl: string;
};

type ManageJobFormProps = {
  defaultValues?: JobFormData;
  onSubmit: SubmitHandler<JobFormData>;
};

export const ManageJobForm = ({
  defaultValues,
  onSubmit,
}: ManageJobFormProps) => {
  const { handleSubmit, control } = useForm<JobFormData>({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput control={control} label="Título" name="jobTitle" required />

      <FormInput
        control={control}
        label="Descrição"
        name="jobDescription"
        required
        multiline
        minRows={2}
      />

      <FormInput
        control={control}
        label="Imagem (URL)"
        name="jobImageUrl"
        required
      />

      <Button sx={{ marginTop: '0.5rem' }} variant="contained" type="submit">
        Confirmar
      </Button>
    </form>
  );
};
