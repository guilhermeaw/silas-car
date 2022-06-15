import { Typography } from '@mui/material';
import { SubmitHandler } from 'react-hook-form';

import { MainContainer } from '../../components/MainContainer';
import { JobFormData, ManageJobForm } from '../../components/ManageJobForm';

const AddJobPage = () => {
  const handleSubmit: SubmitHandler<JobFormData> = data => {
    alert(JSON.stringify(data));
  };

  return (
    <MainContainer>
      <Typography variant="h2">Adicionar serviço</Typography>
      <Typography variant="subtitle1">Adicione um serviço</Typography>

      <ManageJobForm onSubmit={handleSubmit} />
    </MainContainer>
  );
};

export default AddJobPage;
