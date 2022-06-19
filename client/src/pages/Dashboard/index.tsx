import { CustomizationsList } from '../../components/CustomizationsList';
import { MainContainer } from '../../components/MainContainer';

import { useFetchCustomizations } from '../../services/queries';

const DashboardPage = () => {
  const { data: customizations, isLoading } = useFetchCustomizations();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <MainContainer>
      {customizations?.length && (
        <CustomizationsList items={customizations} adminMode />
      )}
    </MainContainer>
  );
};

export default DashboardPage;
