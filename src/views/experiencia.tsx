import React, { useEffect, useState } from "react";
import { TextField, Grid, Button, Typography, MenuItem, Stack, IconButton, } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { setDadosExperiencia, setPasso } from "../feature/dados-entrada/slice";
import { Add, Close } from '@mui/icons-material'
import { useDispatch } from "react-redux"

const Experiencia = () => {

    const [arrayTecnologia, setArrayTecnologia] = useState<string[]>([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { dadosExperiencia, dadosEntrada } = useSelector((state: any) => state.dadosIniciais)

    const [dados, setDados] = useState(dadosExperiencia)


    useEffect(() => {
        dispatch(setPasso(1))
        if (dadosEntrada.nome === '' || dadosEntrada.cidade === '' || dadosEntrada.bairro === '' || dadosEntrada.telefone === '') {
            handleClickVoltar()

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClickTecnologia = () => {
        if (dados.tecnologiasAprendidas === '') return
        if (arrayTecnologia.includes(dados.tecnologiasAprendidas)) return
        setArrayTecnologia([...arrayTecnologia, dados.tecnologiasAprendidas])

    }

    const handeClickApagarTecnologia = (tecnologia: string) => {
        const arrayReview = arrayTecnologia.filter((item) => item !== tecnologia)
        setArrayTecnologia(arrayReview)
    }
    const handleClickVoltar = () => {
        navigate("/")
    }
    const handleClickAvancar = () => {
        navigate("/final")

        dispatch(setDadosExperiencia({ ...dados, tecnologiasAprendidas: arrayTecnologia }))
    }
    return (

        <Grid container spacing={2} padding='1rem 1rem 1rem  5rem' sx={{ '& .MuiList-root': { height: '100px !important', overflowY: 'hidden' } }}>
            <Grid item xs={12} >
                <Stack direction={'row'} justifyContent='space-between' sx={{ background: '#12AD65', padding: '15px', borderRadius: '15px' }}>
                    <Typography color={'#fff'} variant='h6' fontWeight={700}>Informações sobre sua experiência na área:</Typography>
                    <Typography color={'#fff'} variant='subtitle1' fontWeight={700}>Passo 2</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} >
                <Typography>Você já têm experiência na área:</Typography>
                <TextField fullWidth size="small" select onChange={(event) => setDados(() => ({ ...dados, possuiExperiencia: event.target.value }))} value={dados?.possuiExperiencia} >
                    <MenuItem value={'0'}>Não tenho experiência</MenuItem>
                    <MenuItem value={'>1'}>Menos de 1</MenuItem>
                    <MenuItem value={'1-2'}>1 á 2</MenuItem>
                    <MenuItem value={'2-5'}>2 á 5</MenuItem>
                    <MenuItem value={'5<'}>5 ou mais</MenuItem>
                </TextField>
            </Grid>
            {dados?.possuiExperiencia !== '0' ? <Grid item xs={12} >
                <Typography>Conte-nos sobre suas experiêncas anteriores:</Typography>
                <TextField fullWidth size="small" onChange={(event) => setDados(() => ({ ...dados, experienciaAnterior: event.target.value }))} value={dados.experienciaAnterior} rows={4} multiline >
                </TextField>
            </Grid> : null}
            {dados?.possuiExperiencia !== '0' ? <Grid item xs={12} >
                <Typography>Qual foi o seu último cargo:</Typography>
                <TextField fullWidth size="small" onChange={(event) => setDados(() => ({ ...dados, ultimoCargo: event.target.value }))} value={dados.ultimoCargo}>
                </TextField>
            </Grid> : null}
            <Grid item xs={12}>
                <Typography >Quais tecnologias você já utilizou:</Typography>
                <Stack direction='row' spacing={2}>
                    <TextField fullWidth size="small" onChange={(event) => setDados(() => ({ ...dados, tecnologiasAprendidas: event.target.value }))} value={dados.tecnologiasAprendidas} />
                    <IconButton color='primary' onClick={handleClickTecnologia} sx={{ cursor: 'pointer' }} ><Add /></IconButton>
                </Stack>
                <Grid container spacing={2} marginTop='6px'>
                    {arrayTecnologia.map((item: string, index) =>

                        <Grid item xs={3} key={index} >
                            <Stack direction='row' sx={{ background: '#1aa3e8', borderRadius: '10px', justifyContent: 'space-between', padding: '4px', wordBreak: ' break-word' }} spacing={2}>
                                <Typography sx={{ color: '#fff', padding: '4px', fontWeight: 700, textAlign: 'center', fontSize: '9px' }}>
                                    {item}
                                </Typography>
                                <Close sx={{ transform: 'scale(0.6)', color: '#fff', cursor: 'pointer' }} onClick={() => handeClickApagarTecnologia(item)} />
                            </Stack>
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Button variant="outlined" fullWidth onClick={handleClickVoltar}  >Voltar</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" fullWidth onClick={handleClickAvancar} >Avançar</Button>
            </Grid>
        </Grid>




    )
}

export default Experiencia;