import React from "react";
import NewRoutes from "./routes";
import { AppBar, Grid, Box, Toolbar, Typography, Step, Stepper, StepLabel, Stack } from '@mui/material'
import { useSelector } from "react-redux";
import { ReactComponent as MySVG } from './cadastro.svg';

function App() {


  const { passo } = useSelector((state: any) => state.dadosIniciais)




  return (
    <Box>
      <AppBar component="nav" elevation={0} variant="outlined" sx={{
        zIndex: 2,
        position: 'absolute',
        left: '0px', height: '140px',
        display: 'flex',
        justifyContent: 'center',
        background: '#fff',
        color: 'black',
        boxShadow: ' 0px 2px 12px rgba(0, 0, 0, 0.1)',
      }}>
        <Toolbar>
          <Box>
            <Typography variant="h3" color='#042258' fontWeight={700} fontFamily={'Heather'}>Sistema de Cadastro</Typography>
            <Typography variant='h6' fontWeight={600} fontFamily={'Lithograph'}>Faça o seu cadastro e conquiste sua vaga!</Typography>
          </Box>

        </Toolbar>
      </AppBar>
      <Grid container spacing={0} sx={{ position: 'absolute', top: '140px', height: 'calc(100vh - 142px)', width: '100%', ...style.img, overflowY: 'hidden' }}>
        <Grid item xs={12} md={5} sx={{ zIndex: 7, padding: '20px 30px', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'relative', justifyContent: 'center', background: '#f7f7f7' }} >
          <Stack direction={'column'} sx={{ width: '100%', justifyContent: 'center', alignItems: 'center', margin: '15px 15px 15px 0px' }}>
            <Typography variant="h3" textAlign='center' color='#042258' fontWeight={700} marginBottom='15px' fontFamily={'Heather'}>Digite os seus dados: </Typography>
            <Typography variant="subtitle1" padding='0px 25px' textAlign='center' fontFamily={'Lithograph'} fontWeight={600} >Todas as sua informações serão salvas e posteriormente analisadas  para que possamos encontrar as melhores oportunidades para o seu perfil !!</Typography>
            <MySVG style={{ height: '200px', width: '200px' }} />
          </Stack>
          <Stepper orientation="vertical" activeStep={passo?.atual} sx={{ position: 'absolute', right: passo?.atual === 0 ? '-59px' : '-58px', top: '0px', height: '100%', '& .MuiStepConnector-lineVertical': { height: '100%' } }}  >
            <Step >
              <StepLabel sx={{ '& .MuiStepLabel-label': { fontSize: '10px', fontWeight: 700 } }} >Passo 1</StepLabel>
            </Step>
            <Step >
              <StepLabel sx={{ '& .MuiStepLabel-label': { fontSize: '10px', fontWeight: 700 } }}>Passo 2</StepLabel>
            </Step>
            <Step >
              <StepLabel sx={{ '& .MuiStepLabel-label': { fontSize: '10px', fontWeight: 700 } }}>Final</StepLabel>
            </Step>
          </Stepper>
        </Grid>
        <Grid item xs={12} md={7} sx={{ zIndex: 4, height: '100%', overflowY: 'auto', background: '#ffff', ...style.scrooll }} >
          <Box>
            <NewRoutes />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}


const style = {

  img: {
    '@media (max-width: 600px)': {
      height: '700px !important'
    },
  },

scrooll:{
'&::-webkit-scrollbar': {
    width: '6px',              
  },
'&::-webkit-scrollbar-track':{
    background: 'rgba(0, 0, 0, 0.0)',       
  },
  
 '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#1976d2',
    borderRadius: '20px',    
    border: '3px solid rgba(0, 0, 0, 0.0)',  
    '&:hover':{
      backgroundColor: '#110c30', 
    }
  },
}
}
export default App;
