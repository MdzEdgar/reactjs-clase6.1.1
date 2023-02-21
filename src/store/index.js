import { configureStore } from "@reduxjs/toolkit";
import pokemons from './slices/pokemons.slice.js'

export default configureStore({
  reducer: {
    pokemons
  }
})