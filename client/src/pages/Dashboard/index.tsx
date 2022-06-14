import { Button, Card, Grid, Typography } from '@mui/material';

import { JobPostsList } from '../../components/JobPostsList';
import { MainContainer } from '../../components/MainContainer';

const DashboardPage = () => {
  const jobPosts = [
    {
      id: 1,
      title: 'Customização de Corsa Classic',
      description:
        'Corsa Classic turbo com Turbina Holset HX-35, Válvula de Alívio SPA Compact, Intercooler frontal,Pressurização em Alumínio 2,5",Escape 2,5" com 1 abafador JK, Pistões IASA 87mm (p/ 700cv), Bielas K1 (p/ 700cv), Parafusos ARP, Anéis NPR, Blockguard, Bomba de Óleo GM 2.4 16v retrabalhada, junta de cabeçote de aço de Astra Flex, Cabeçote 16v 100% original, comandos originais, tuchos novos, taxa 10,0:1,Ventoinhas SLIM, Injeção Megasquirt MS2-V3 com correção por sonda Wideband AEM, auto-acerto de mapa de combustível, Two Step e Flat Shift acionados por botão no pedal de embreagem, 4 bicos Fuel Injector Clinic (FIC) 1050cc baixa impedância com resistores, Bomba de combustível Dinâmica 12bar no lugar da original + 1 de Mercedes externa (embaixo da porta traseira do passageiro), Linha de combustível 9,5mm, filtro de comb. de Blazer V6 (fica atrás do motor), Bobina de Vectra 2011, velas NGK Iridium, cabos de vela originais, Câmbio GM F23 (eixo piloto largo) adaptado, Embreagem Cerâmica FF 1200lbs com acionamento mecânico adaptado, Suspensão de Rosca Fênix, Rodas do Vectra GT-X aro 17 originais GM, Pneusv BFGoodrich G-force Profiler II 215/45 17, Freio Dianteiro: Discos 288mm frisados + pastilhas Red Powerbrakes, Manômetros de pressão de turbo, óleo e combustível, Sonda Wideband AEM UEGO 40-3100',
      date: '24/05/2022',
      img: 'https://i.pinimg.com/originals/a3/e2/19/a3e219ad261727b311b63969cc7a0e54.jpg',
    },
    {
      id: 2,
      title: 'Customização de Civic SI',
      description:
        'Instalação de rodas esportivas aro 22, instalação de aerofólio de fibra de carbono, escapamento esportivo',
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
