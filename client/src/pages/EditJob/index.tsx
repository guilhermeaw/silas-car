import { Typography } from '@mui/material';
import { SubmitHandler } from 'react-hook-form';

import { MainContainer } from '../../components/MainContainer';
import { JobFormData, ManageJobForm } from '../../components/ManageJobForm';

const EditJobPage = () => {
  const handleSubmit: SubmitHandler<JobFormData> = data => {
    alert(JSON.stringify(data));
  };

  const jobToEdit = {
    jobTitle: 'Customização de Civic SI',
    jobDescription:
      'Instalação de rodas esportivas aro 22, instalação de aerofólio de fibra de carbono, escapamento esportivo',
    jobImageUrl:
      'https://i.pinimg.com/originals/a3/e2/19/a3e219ad261727b311b63969cc7a0e54.jpg',
  };

  return (
    <MainContainer>
      <Typography variant="h2">Editar serviço</Typography>
      <Typography variant="subtitle1">Edite o serviço</Typography>

      <ManageJobForm onSubmit={handleSubmit} defaultValues={jobToEdit} />
    </MainContainer>
  );
};

export default EditJobPage;
