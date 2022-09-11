import { createSlice } from '@reduxjs/toolkit'


import {ler} from "../../query/ler"


const dados = ler()



export const slice = createSlice({
  name:'materia',
  initialState: {
    ...dados.then((item)=>(item))
  },
  reducers: {
    setDadosEstudo: (state, action) => {
     
      state.materia = action.payload.materia
      state.horarioInicio = action.payload.horarioInicio
      state.horarioFim = action.payload.horarioFim
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDadosEstudo } = slice.actions

export default slice.reducer