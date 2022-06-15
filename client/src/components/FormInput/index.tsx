import { TextField, TextFieldProps } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

type FormInputProps = {
  name: string;
  control: Control<any, any>;
} & TextFieldProps;

export const FormInput = ({ control, name, ...restProps }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <TextField
          sx={{ background: '#fff' }}
          size="small"
          margin="dense"
          fullWidth
          error={!!error}
          helperText={error ? error.message : null}
          {...field}
          {...restProps}
        />
      )}
      rules={{}}
    />
  );
};
