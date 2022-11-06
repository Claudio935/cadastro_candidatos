import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "dadosCadastro",
  initialState: {
    dadosEntrada: {
      estado: "",
      cidade: "",
      nome: "",
      bairro: "",
      logradouro: "",
      telefone: "",
      email: "",
    },
    passo: {
      atual: 0,
    },
    dadosExperiencia: { possuiExperiencia: "0", tecnologiasAprendidas: [], experienciaAnterior:"", ultimoCargo:"" },
    dadosFinais:{
      email:''
    }
  },

  reducers: {
    setDadosCadastros: (state, action) => {
      state.dadosEntrada = action.payload;
    },
    setPasso: (state, action) => {
      state.passo.atual = action.payload;
    },
    setDadosExperiencia: (state, action) => {
      state.dadosExperiencia = action.payload;
    }, 
    setDadosFinais: (state, action) => {
      state.dadosFinais = action.payload;
    }, 
  },
});

// Action creators are generated for each case reducer function
export const { setDadosCadastros, setPasso, setDadosExperiencia, setDadosFinais } = slice.actions;

export default slice.reducer;
