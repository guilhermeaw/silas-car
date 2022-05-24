import { Button, Card, Stack, Typography, Grid } from '@mui/material';

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
      <Card
        sx={{
          background:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url( "src/assets/images/banner.jpg");',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          height: '35rem',
        }}
      >
        <Stack sx={{ position: 'absolute', top: '6rem', left: '4rem' }}>
          <Typography color="#fff" variant="h1">
            Silas Car carros customizados
          </Typography>

          <Typography color="#fff" variant="subtitle1">
            Confira abaixo todos os nossos modelos customizados e escolhe o que
            mais combinar com você
          </Typography>

          <Button
            sx={{ marginTop: '1rem', color: '#fff' }}
            color="inherit"
            size="large"
            variant="outlined"
          >
            Conferir os modelos
          </Button>
        </Stack>
      </Card>

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
