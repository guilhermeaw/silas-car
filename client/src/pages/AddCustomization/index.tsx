import { Typography } from '@mui/material';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { MainContainer } from '../../components/MainContainer';
import {
  CustomizationFormData,
  ManageCustomizationForm,
} from '../../components/ManageCustomizationForm';
import { useAddCustomization } from '../../services/mutations';

const AddCustomizationPage = () => {
  const { mutateAsync: addCustomization } = useAddCustomization();
  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<CustomizationFormData> = async data => {
    const {
      customizationDescription,
      customizationImageUrl,
      customizationTitle,
    } = data;

    await addCustomization({
      description: customizationDescription,
      img_url: customizationImageUrl,
      title: customizationTitle,
    });

    navigate('/dashboard');
  };

  return (
    <MainContainer>
      <Typography variant="h2">Adicionar serviço</Typography>
      <Typography variant="subtitle1">Adicione um serviço</Typography>

      <ManageCustomizationForm onSubmit={handleSubmit} />
    </MainContainer>
  );
};

export default AddCustomizationPage;
