import { Typography } from '@mui/material';

import { MainContainer } from '../../components/MainContainer';
import { ManageJobForm } from '../../components/ManageJobForm';

const EditJobPage = () => {
  return (
    <MainContainer>
      <Typography variant="h2">Editar serviço</Typography>
      <Typography variant="subtitle1">Edite o serviço</Typography>

      <ManageJobForm action="Editar" />
    </MainContainer>
  );
};

export default EditJobPage;
