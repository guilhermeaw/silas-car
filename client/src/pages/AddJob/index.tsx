import { Typography } from '@mui/material';

import { MainContainer } from '../../components/MainContainer';
import { ManageJobForm } from '../../components/ManageJobForm';

const AddJobPage = () => {
  return (
    <MainContainer>
      <Typography variant="h2">Adicionar serviço</Typography>
      <Typography variant="subtitle1">Adicione um serviço</Typography>

      <ManageJobForm action="Adicionar" />
    </MainContainer>
  );
};

export default AddJobPage;
