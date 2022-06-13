import { Button, Card, Grid, Typography } from '@mui/material';
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
      {jobPosts.length && <JobPostsList items={jobPosts} adminMode />}

      <Grid container spacing={2} sx={{ marginTop: '0.1rem' }}>
        <Grid item xs={6}>
          <Card sx={{ padding: '0.8rem' }}>
            <Typography variant="h3">Adicionar novos serviços</Typography>
            <Typography variant="subtitle1">
              Aqui você pode adicionar novos serviços ao portfólio de serviços
              da Silas Car
            </Typography>

            <Button sx={{ marginTop: '0.5rem' }} variant="contained">
              Adicionar
            </Button>
          </Card>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default DashboardPage;
