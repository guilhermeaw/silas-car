import { Button, Card, Stack, Typography, Grid } from '@mui/material';
import Banner from '../../components/Banner';

import { MainContainer } from '../../components/MainContainer';

const DashboardPage = () => {
  const cars = [
    {
      id: 1,
      name: 'Corsa Classic',
      year: '2008',
      img: 'https://i.pinimg.com/originals/a3/e2/19/a3e219ad261727b311b63969cc7a0e54.jpg',
      mileage: 57000,
      engine: '1.4',
      price: 17900,
    },
  ];

  return (
    <MainContainer>
      <Banner
        title="Silas Car carros customizados"
        subtitle="Confira abaixo todos os nossos serviços de customização"
        actionLabel="Conferir os serviços"
      />

      <Grid sx={{ margin: '1rem 0' }} container>
        {cars.map(car => (
          <Grid key={car.id} item>
            <Card
              sx={{ padding: '1rem', display: 'flex', flexDirection: 'column' }}
            >
              <Typography variant="h3" marginBottom="0.2rem">
                {car.name}
              </Typography>
              <img
                src={car.img}
                alt="car"
                width="320px"
                height="200px"
                style={{ borderRadius: 4 }}
              />

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h3" fontWeight="bold">
                  R$ 17.900,00
                </Typography>
                <Button variant="contained">Mais informações</Button>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </MainContainer>
  );
};

export default DashboardPage;
