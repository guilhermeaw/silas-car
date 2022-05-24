import { Button, Card, Stack, Typography } from '@mui/material';

type BannerProps = {
  title: string;
  subtitle: string;
  actionLabel: string;
};

const Banner = ({ actionLabel, subtitle, title }: BannerProps) => {
  return (
    <Card
      sx={{
        background:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("src/assets/images/banner.jpg");',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: '35rem',
      }}
    >
      <Stack sx={{ position: 'absolute', top: '6rem', left: '4rem' }}>
        <Typography color="#fff" variant="h1">
          {title}
        </Typography>

        <Typography color="#fff" variant="subtitle1">
          {subtitle}
        </Typography>

        <Button
          sx={{ marginTop: '1rem', color: '#fff' }}
          color="inherit"
          size="large"
          variant="outlined"
        >
          {actionLabel}
        </Button>
      </Stack>
    </Card>
  );
};

export default Banner;
