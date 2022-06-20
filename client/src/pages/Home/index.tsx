import { Banner } from '../../components/Banner';
import { CustomizationsList } from '../../components/CustomizationsList';

import { MainContainer } from '../../components/MainContainer';
import { useFetchCustomizations } from '../../services/queries';

const HomePage = () => {
  const { data: customizations, isLoading } = useFetchCustomizations();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <MainContainer>
      <Banner
        title="Silas Car carros customizados"
        subtitle="Confira abaixo todos os nossos serviços de customização"
        actionLabel="Conferir os serviços"
      />

      <CustomizationsList items={customizations} />
    </MainContainer>
  );
};

export default HomePage;
