import React, { useEffect } from "react";
import { Stack, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { setPasso } from "../feature/dados-entrada/slice";
import { ReactComponent as MySVG } from '../analise.svg';



const Agradecimento = () => {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(setPasso(2)) },

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (

        <Stack direction='column' padding='1rem 1rem 0px  5rem' sx={{ '& .MuiList-root': { height: '100px !important' } }} justifyContent='center' alignItems='center'>

            <Typography variant="h2" textAlign='center' color='#042258' fontWeight={700} marginBottom='25px' fontFamily={'Heather'}>Obrigado !!</Typography>
            <Typography variant="h6" textAlign='center' padding='0px 40px' fontWeight={600} fontFamily={'Lithograph'} >Seus dados serão analisados por nossa equipe para o preenchimento de novas vagas!!</Typography>
            <MySVG style={{ width: '45%', height: '45%' }} />

        </Stack>

    )
}

export default Agradecimento;