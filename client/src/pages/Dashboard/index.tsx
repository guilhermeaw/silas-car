import { Banner } from '../../components/Banner';
import { JobPostsList } from '../../components/JobPostsList';

import { MainContainer } from '../../components/MainContainer';

const DashboardPage = () => {
  const jobPosts = [
    {
      id: 1,
      title: 'Customização de Corsa Classic',
      date: '24/05/2022',
      img: 'https://i.pinimg.com/originals/a3/e2/19/a3e219ad261727b311b63969cc7a0e54.jpg',
    },
    {
      id: 2,
      title: 'Customização de Civic SI',
      date: '18/01/2022',
      img: 'https://i.pinimg.com/originals/a3/e2/19/a3e219ad261727b311b63969cc7a0e54.jpg',
    },
  ];

  return (
    <MainContainer>
      <Banner
        title="Silas Car carros customizados"
        subtitle="Confira abaixo todos os nossos serviços de customização"
        actionLabel="Conferir os serviços"
      />

      {jobPosts.length && <JobPostsList items={jobPosts} />}
    </MainContainer>
  );
};

export default DashboardPage;
