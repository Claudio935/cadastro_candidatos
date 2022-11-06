import { configureStore } from '@reduxjs/toolkit'
import dadosEntradaReducer from './dados-entrada/slice'


export default configureStore({
  reducer: {
    dadosIniciais: dadosEntradaReducer},
})