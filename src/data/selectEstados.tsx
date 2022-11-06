import React from 'react'
import axios from 'axios'


  export const selectEstadosAxios = axios.create({
        baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/',
      });

     


