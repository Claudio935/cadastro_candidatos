import React, { useState } from "react";
import { TextField, Grid, Button, Typography, MenuItem, Stack } from "@mui/material"
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [dadosEntrada, setDadosEntrada] = useState({ nomeAdm: '' })
    const navigate = useNavigate()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDadosEntrada(() => ({ ...dadosEntrada, nomeAdm: event.target.value }));
    };
    return (

        <Grid container spacing={2} padding='1rem' sx={{'& .MuiList-root':{height:'100px !important'}}}>
            <Grid item xs={12} >
                <Stack direction={'row'} justifyContent='space-between' sx={{background:'#12AD65', padding:'15px', borderRadius:'15px'}}>
                <Typography color={'#fff'} variant='h6' fontWeight={700}>Digite os Dados de entrada</Typography>
                <Typography color={'#fff'} variant='subtitle1' fontWeight={700}>Passo 1</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} >
                <Typography>Qual valor de crédito você está buscando?</Typography>
                <TextField fullWidth label='Valor' size="small" />
            </Grid>
            <Grid item xs={12}>
                <Typography >Qual valor de crédito você está buscando?</Typography>
                <TextField fullWidth label='Valor' size="small" />
            </Grid>
            <Grid item xs={12}>
                <Typography>Administradora</Typography>
                <TextField 
                fullWidth 
                label='Nome da Administradora' 
                select size="small" 
                onChange={handleChange} 
                value={dadosEntrada?.nomeAdm} 
                 SelectProps={{MenuProps:{sx:{height:'200px'}}}}>

                    <MenuItem value={"Bradesco"}>Bradesco</MenuItem >
                    <MenuItem value={"Bradesco"}>Bradesco</MenuItem>
                    <MenuItem>Bradesco</MenuItem>
                    <MenuItem>Bradesco</MenuItem>
                    <MenuItem>Bradesco</MenuItem>
                    <MenuItem>Bradesco</MenuItem>
                    <MenuItem>Bradesco</MenuItem>
                    <MenuItem>Bradesco</MenuItem>

                </TextField>
            </Grid>
            <Grid item xs={6}>
                <Button variant="outlined" fullWidth onClick={()=>{navigate("/")}}>Voltar</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" fullWidth onClick={()=>{navigate("/resultado")}}>Avançar</Button>
            </Grid>
        </Grid>




    )
}

export default Home;