import { useMemo } from 'react';
import { Typography } from '@mui/material';
import { SubmitHandler } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { Customization } from '../../models/Customization';
import { MainContainer } from '../../components/MainContainer';
import { useEditCustomization } from '../../services/mutations';
import {
  CustomizationFormData,
  ManageCustomizationForm,
} from '../../components/ManageCustomizationForm';

const EditCustomizationPage = () => {
  const { mutateAsync: editCustomization } = useEditCustomization();

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();

  const customizations = queryClient.getQueryData(
    'customizations',
  ) as Customization[];

  const customizationToEdit = customizations?.find(item => item._id === id);

  const defaultValues = useMemo(() => {
    return customizationToEdit
      ? {
          customizationTitle: customizationToEdit?.title,
          customizationDescription: customizationToEdit?.description,
          customizationImageUrl: customizationToEdit?.img_url,
        }
      : undefined;
  }, [customizationToEdit]);

  const handleSubmit: SubmitHandler<CustomizationFormData> = async data => {
    const {
      customizationDescription,
      customizationImageUrl,
      customizationTitle,
    } = data;

    await editCustomization({
      _id: id!,
      description: customizationDescription,
      img_url: customizationImageUrl,
      title: customizationTitle,
    });

    navigate('/dashboard');
  };

  return (
    <MainContainer>
      <Typography variant="h2">Editar serviço</Typography>
      <Typography variant="subtitle1">Edite o serviço</Typography>

      <ManageCustomizationForm
        onSubmit={handleSubmit}
        defaultValues={defaultValues}
      />
    </MainContainer>
  );
};

export default EditCustomizationPage;
