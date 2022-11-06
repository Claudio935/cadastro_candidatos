import React, { useEffect, useMemo, useState, } from "react";
import { TextField, Grid, Button, Typography, MenuItem, Stack, InputProps } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { setDadosCadastros, setPasso } from "../feature/dados-entrada/slice";
import { selectEstadosAxios } from "../data/selectEstados";
import { useDispatch } from "react-redux";

import MaskedInput from "react-text-mask";

const InputMaskPhone = React.forwardRef<HTMLElement, InputProps>(
    function InputMaskCustomPhone(props: any, ref) {


        return (
            <MaskedInput
                {...props}
                mask={['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                guide={false}

            />
        );
    }
)
const Pessoais = () => {
    const { dadosEntrada } = useSelector((state: any) => state.dadosIniciais)
    const [dados, setDados] = useState(dadosEntrada)
    const [dadosCidade, setDadosCidade] = useState([{ nome: '' }])

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(setPasso(0))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useMemo(() => {
        selectEstadosAxios(`${dados.estado}/municipios`).then((response) => {
            setDadosCidade(response.data)
        })
    }, [dados.estado])


    const handleClick = () => {
        if (dados.nome === '' || dados.cidade === '' || dados.bairro === '' || dados.telefone === ''|| dados.email === '') return
        navigate("/Experiencia")
        dispatch(setDadosCadastros(dados))

    };

    return (

        <Grid container spacing={2} padding='1rem 1rem 1rem  5rem' sx={{ '& .MuiList-root': { height: '100px !important' } }}>
            <Grid item xs={12} >
                <Stack direction={'row'} justifyContent='space-between' sx={{ background: '#12AD65', padding: '15px', borderRadius: '15px' }}>
                    <Typography color={'#fff'} variant='h6' fontWeight={700}>Digite os Dados pessoais</Typography>
                    <Typography color={'#fff'} variant='subtitle1' fontWeight={700}>Passo 1</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} >
                <TextField fullWidth label='Nome Completo' size="small" value={dados?.nome} onChange={(event) => setDados(() => ({ ...dados, nome: event.target.value }))} />
            </Grid>
            <Grid item xs={4}>
                <TextField fullWidth label='Estado' size="small" select onChange={(event) => setDados(() => ({ ...dados, estado: event.target.value }))} value={dados?.estado} SelectProps={{ MenuProps: { sx: { height: '200px' } } }}>
                    <MenuItem value="">Selecione</MenuItem>
                    <MenuItem value="AC">AC</MenuItem>
                    <MenuItem value="AL">AL</MenuItem>
                    <MenuItem value="AP">AP</MenuItem>
                    <MenuItem value="AM">AM</MenuItem>
                    <MenuItem value="BA">BA</MenuItem>
                    <MenuItem value="CE">CE</MenuItem>
                    <MenuItem value="DF">DF</MenuItem>
                    <MenuItem value="ES">ES</MenuItem>
                    <MenuItem value="GO">GO</MenuItem>
                    <MenuItem value="MA">MA</MenuItem>
                    <MenuItem value="MS">MS</MenuItem>
                    <MenuItem value="MT">MT</MenuItem>
                    <MenuItem value="MG">MG</MenuItem>
                    <MenuItem value="PA">PA</MenuItem>
                    <MenuItem value="PB">PB</MenuItem>
                    <MenuItem value="PR">PR</MenuItem>
                    <MenuItem value="PE">PE</MenuItem>
                    <MenuItem value="PI">PI</MenuItem>
                    <MenuItem value="RJ">RJ</MenuItem>
                    <MenuItem value="RN">RN</MenuItem>
                    <MenuItem value="RS">RS</MenuItem>
                    <MenuItem value="RO">RO</MenuItem>
                    <MenuItem value="RR">RR</MenuItem>
                    <MenuItem value="SC">SC</MenuItem>
                    <MenuItem value="SP">SP</MenuItem>
                    <MenuItem value="SE">SE</MenuItem>
                    <MenuItem value="TO">TO</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={4}>
                <TextField fullWidth label='Cidade' size="small" select value={dados?.cidade} onChange={(event) => setDados(() => ({ ...dados, cidade: event.target.value }))}>
                    {dadosCidade.map((item, index) => <MenuItem value={item?.nome ? item.nome : ''} key={index}>{item?.nome ? item.nome : ''}</MenuItem>)}
                </TextField>
            </Grid>
            <Grid item xs={4}>
                <TextField fullWidth label='Bairro' size="small" value={dados?.bairro} onChange={(event) => setDados(() => ({ ...dados, bairro: event.target.value }))} />
            </Grid>
            <Grid item xs={8}>
                <TextField fullWidth label='Logradouro' size="small" value={dados?.logradouro} onChange={(event) => setDados(() => ({ ...dados, logradouro: event.target.value }))} />
            </Grid>
            <Grid item xs={4}>
                <TextField fullWidth label='Telefone' size="small" InputProps={{ inputComponent: InputMaskPhone as any }} InputLabelProps={{ shrink: !!dados.telefone }} value={dados.telefone} onChange={(event) => setDados(() => ({ ...dados, telefone: event.target.value }))}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label='E-mail'
                    size="small"
                    value={dados?.email}
                    onChange={(event) => setDados(() => ({ ...dados, email: event.target.value }))}
                />
            </Grid>
            <Grid item xs={6}>
                <Button variant="outlined" fullWidth onClick={() => { navigate("/") }} disabled>Voltar</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" fullWidth onClick={handleClick}>Avançar</Button>
            </Grid>
        </Grid>




    )
}

export default Pessoais;