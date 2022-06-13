import {
  DeleteOutline as DeleteOutlineIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

import {
  Button,
  Card,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

type JobPost = {
  id: number;
  title: string;
  date: string;
  img: string;
};

type JobPostsListProps = {
  items: JobPost[];
  adminMode?: boolean;
};

export const JobPostsList = ({
  items,
  adminMode = false,
}: JobPostsListProps) => {
  return (
    <Grid marginTop="0.5rem" spacing={2} container>
      {items.map(item => (
        <Grid key={item.id} xs={6} item>
          <Card sx={{ padding: '1rem', display: 'flex', position: 'relative' }}>
            <img
              src={item.img}
              alt="car"
              width="210px"
              height="120px"
              style={{ borderRadius: 4 }}
            />

            <Stack
              marginLeft="1rem"
              width="100%"
              justifyContent="space-between"
            >
              <div>
                <Typography variant="h3">{item.title}</Typography>
                <Typography variant="subtitle1">{item.date}</Typography>
              </div>

              <Button variant="contained">Mais informações</Button>
            </Stack>

            {adminMode && (
              <Stack
                direction="row"
                sx={{ position: 'absolute', top: 8, right: 8 }}
              >
                <IconButton aria-label="Editar serviço" onClick={() => {}}>
                  <EditIcon />
                </IconButton>

                <IconButton aria-label="Deletar serviço" onClick={() => {}}>
                  <DeleteOutlineIcon />
                </IconButton>
              </Stack>
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
