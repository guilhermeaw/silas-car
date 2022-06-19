import { Button, Card, Grid, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Customization } from '../../models/Customization';
import { CustomizationItem } from './CustomizationItem';

type CustomizationsListProps = {
  items: Customization[];
  adminMode?: boolean;
};

export const CustomizationsList = ({
  items,
  adminMode = false,
}: CustomizationsListProps) => {
  const navigate = useNavigate();

  return (
    <Grid marginTop="0.5rem" spacing={2} container>
      {items.map(item => (
        <CustomizationItem key={item._id} item={item} adminMode={adminMode} />
      ))}

      {adminMode && (
        <Grid item xs={6}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1rem',
              height: '100%',
            }}
          >
            <Stack>
              <Typography variant="h3">Adicionar novos serviços</Typography>
              <Typography variant="subtitle1">
                Aqui você pode adicionar novos serviços ao portfólio de serviços
                da Silas Car
              </Typography>
            </Stack>

            <Button
              sx={{ marginTop: '0.5rem' }}
              variant="contained"
              onClick={() => navigate('/add-job')}
            >
              Adicionar
            </Button>
          </Card>
        </Grid>
      )}
    </Grid>
  );
};
