import { Button, Card, Grid, Stack, Typography } from '@mui/material';

type JobPost = {
  id: number;
  title: string;
  date: string;
  img: string;
};

type JobPostsListProps = {
  items: JobPost[];
};

export const JobPostsList = ({ items }: JobPostsListProps) => {
  return (
    <Grid marginTop="0.5rem" spacing={2} container>
      {items.map(item => (
        <Grid key={item.id} xs={6} item>
          <Card sx={{ padding: '1rem', display: 'flex' }}>
            <img
              src={item.img}
              alt="car"
              width="210px"
              height="120px"
              style={{ borderRadius: 4 }}
            />

            <Stack margin="0 1rem" width="100%" justifyContent="space-between">
              <div>
                <Typography variant="h3">{item.title}</Typography>
                <Typography variant="subtitle1">{item.date}</Typography>
              </div>

              <Button variant="contained">Mais informações</Button>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
