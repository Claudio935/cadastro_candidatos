import React from "react";
import NewRoutes from "./routes";
import { AppBar, Grid, Box, Toolbar, Typography, Stack, Step, Stepper,StepLabel } from '@mui/material'


function App() {
  const img =  require("./grana.png")
 
  fetch("https://api.bradesco.com/bradesco/open-banking/products-services/v1/personal-financings?page=1&page-size=25").then(response =>{
    return response.json();
      }).then(data =>
      {console.log(data)
  })
 
  return (
    <Box>
      <AppBar component="nav" variant="outlined" sx={{ 
        zIndex: 2, 
        position: 'absolute', 
        left: '0px', height: '140px', 
        display:'flex',
        justifyContent:'center',
        background:'#fff',
        color:'black',
        boxShadow: ' 0px 2px 12px rgba(0, 0, 0, 0.1)'
        }}>
        <Toolbar>
          <Box>
          <Typography variant="h3">Sistema de Financiamento</Typography>
          <Typography variant='h6'>Faça o Calculo de seu Financiamento!</Typography>
          </Box>
          
        </Toolbar>
      </AppBar>
      <Grid container spacing={0} sx={{position:'absolute', top:'140px',  height:'calc(100vh - 142px)', width:'100%',...style.img}}>
     <Grid item xs={12} md={6}  sx={{zIndex:7 ,padding:'20px 30px', height:'100%', alignItems:'center', justifyContent:'center',  boxShadow: ' 0px 2px 12px rgba(0, 0, 0, 0.1)',}} >
     <Typography variant="h3" textAlign='center'>Digite os valores para calcularmos as taxas</Typography>
     <Typography  variant="subtitle1" padding='0px 95px' textAlign='center'>Nosso Simulador calculará Grandes oportunidades de financiamento para que você possa realizar seu sonho da casa própria</Typography>
  <Box sx={{width:'100%', justifyContent:'center', alignItems:'center', display:'flex', margin:'15px 0px'}}>
  <img src={img} alt="" style={{height:'100%', width:'140px', textAlign:'center'}} />
  </Box>
     <Stepper alternativeLabel activeStep={0} sx={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
        
    <Step>
      <StepLabel >Passo 1</StepLabel>
    </Step>

 
    <Step >
      <StepLabel >Passo 2</StepLabel>
    </Step>
    <Step >
      <StepLabel >Passo 3</StepLabel>
    </Step>
    <Step >
      <StepLabel >Passo 4</StepLabel>
    </Step>

</Stepper>

</Grid>
<Grid item xs={12} md={6} sx={{ zIndex:4,   height:'100%',  boxShadow: ' 0px 2px 12px rgba(0, 0, 0, 0.1)' }}>
      <NewRoutes />
      </Grid>
      </Grid>
    </Box>
  );
}

const style = {
  
  img:{
    '@media (max-width: 600px)': {
      height:'700px !important'
     },
  },


}
export default App;
