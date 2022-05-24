import { Button, Card, Grid, Typography } from '@mui/material';

import { MainContainer } from '../../components/MainContainer';

const DashboardPage = () => {
  return (
    <MainContainer>
      <Grid container spacing={2}>
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
