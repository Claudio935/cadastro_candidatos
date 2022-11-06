import React, { useEffect } from "react";
import { TextField, Grid, Button, Typography, Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { setPasso } from "../feature/dados-entrada/slice";
import { useDispatch } from "react-redux";


const Final = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { dadosExperiencia, dadosEntrada } = useSelector((state: any) => state.dadosIniciais)
    const { tecnologiasAprendidas = [] } = dadosExperiencia

    useEffect(() => {
        dispatch(setPasso(2))
        if (dadosEntrada.nome === '' || dadosEntrada.cidade === '' || dadosEntrada.bairro === '' || dadosEntrada.telefone === '') {
            navigate("/")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClickVoltar = () => {
        navigate("/Experiencia")
        dispatch(setPasso(0))
    }
    return (
        <form action="https://formsubmit.co/claudiojr_13@hotmail.com" method="POST" >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000/agradecimento" />
            <input type="hidden" name='nomeCompleto' value={dadosEntrada?.nome} />
            <input type="hidden" name='estado' value={dadosEntrada?.estado} />
            <input type="hidden" name='cidade' value={dadosEntrada?.cidade} />
            <input type="hidden" name='bairro' value={dadosEntrada?.bairro} />
            <input type="hidden" name='logradouro' value={dadosEntrada?.logradouro} />
            <input type="hidden" name='telefone' value={dadosEntrada.telefone} />
            <input type="hidden" name='email' value={dadosEntrada?.email} />
            <input type="hidden" name='possui_experiencia' value={dadosExperiencia?.possuiExperiencia} />
            <input type="hidden" name='experiencia_anterior' value={dadosExperiencia?.experienciaAnterior} />
            <input type="hidden" name='ultimo_cargo' value={dadosExperiencia?.ultimoCargo} />
            {tecnologiasAprendidas.map((item: string, index: any) => <input key={index} type="hidden" name={`tecnologias_aprendidas_${index}`} value={item} />
            )}
            <Grid container spacing={2} padding='1rem 1rem 1rem  5rem'>
                <Grid item xs={12} >
                    <Stack direction={'row'} justifyContent='space-between' sx={{ background: '#12AD65', padding: '15px', borderRadius: '15px' }}>
                        <Typography color={'#fff'} variant='h6' fontWeight={700}>Verificação dos dados adicionados:</Typography>
                        <Typography color={'#fff'} variant='subtitle1' fontWeight={700}>Passo 3</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} >
                    <TextField fullWidth name='nomeCompleto' label='Nome Completo' size="small" value={dadosEntrada?.nome} disabled />
                </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth label='Estado' name='estado' size="small" value={dadosEntrada?.estado} disabled />
                </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth label='Cidade' name='cidade' size="small" value={dadosEntrada?.cidade} disabled />
                </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth label='Bairro' name='bairro' size="small" value={dadosEntrada?.bairro} disabled />
                </Grid>
                <Grid item xs={8}>
                    <TextField fullWidth label='Logradouro' name='logradouro' size="small" value={dadosEntrada?.logradouro} disabled />
                </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth label='Telefone' name='telefone' size="small" value={dadosEntrada.telefone}
                        disabled />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label='E-mail'
                        size="small"
                        value={dadosEntrada?.email}
                        name='email'
                        disabled
                    />
                </Grid>
                <Grid item xs={12} >
                    <Typography color='#bdbdbd'>Você já têm experiência na área:</Typography>
                    <TextField fullWidth size="small" name='possui_experiencia' value={dadosExperiencia?.possuiExperiencia} disabled />

                </Grid>
                {dadosExperiencia?.possuiExperiencia !== '' ? <Grid item xs={12} >
                    <Typography color='#bdbdbd'>Conte-nos sobre suas experiêncas anteriores:</Typography>
                    <TextField fullWidth size="small" name='experiencia_anterior' rows={4} multiline value={dadosExperiencia?.experienciaAnterior} disabled />

                </Grid> : null}
                {dadosExperiencia?.possuiExperiencia !== '' ? <Grid item xs={12} >
                    <Typography color='#bdbdbd'>Qual foi o seu último cargo:</Typography>
                    <TextField fullWidth size="small" name='ultimocargo' value={dadosExperiencia?.ultimoCargo} disabled />

                </Grid> : null}
                <Grid item xs={12}>
                    <Grid container spacing={2} >
                        {tecnologiasAprendidas.map((item: string, index: any) =>
                            <Grid item xs={3} key={index}>
                                <Stack direction='row' sx={{ background: '#1aa3e8', borderRadius: '10px', justifyContent: 'space-between', padding: '4px', wordBreak: ' break-word' }} spacing={2}>
                                    <Typography sx={{ color: '#bdbdbd', padding: '4px', fontWeight: 700, textAlign: 'center', fontSize: '9px' }}>
                                        {item}
                                    </Typography>
                                </Stack>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined" fullWidth onClick={handleClickVoltar} >Voltar</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" fullWidth type="submit" >Enviar</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default Final;