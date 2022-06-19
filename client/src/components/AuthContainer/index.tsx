import { Grid } from '@mui/material';

type AuthContainerProps = {
  children: JSX.Element;
};

export const AuthContainer = ({ children }: AuthContainerProps) => (
  <Grid container sx={{ minHeight: '100vh' }}>
    <Grid
      item
      xs={6}
      sx={{
        background:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url( "/assets/images/cover.jpg");',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />

    <Grid
      item
      xs={6}
      sx={({ palette }) => ({ background: palette.background.default })}
    >
      {children}
    </Grid>
  </Grid>
);
