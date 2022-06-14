import { Button, TextField } from '@mui/material';
import { RefObject, useRef } from 'react';

type ManageJobFormProps = {
  action: 'Adicionar' | 'Editar';
};

export const ManageJobForm = ({ action }: ManageJobFormProps) => {
  const titleInput = useRef(null) as RefObject<HTMLInputElement>;
  const descriptionInput = useRef(null) as RefObject<HTMLInputElement>;
  const imageInput = useRef(null) as RefObject<HTMLInputElement>;

  return (
    <form onSubmit={() => {}}>
      <TextField
        label="Título"
        sx={{ background: '#fff' }}
        size="small"
        margin="dense"
        inputRef={titleInput}
        required
        fullWidth
      />

      <TextField
        label="Descrição"
        sx={{ background: '#fff' }}
        size="small"
        margin="dense"
        inputRef={descriptionInput}
        required
        fullWidth
        multiline
      />

      <TextField
        label="Imagem (URL)"
        sx={{ background: '#fff' }}
        size="small"
        margin="dense"
        inputRef={imageInput}
        required
        fullWidth
      />

      <Button sx={{ marginTop: '0.5rem' }} variant="contained" type="submit">
        {action}
      </Button>
    </form>
  );
};
