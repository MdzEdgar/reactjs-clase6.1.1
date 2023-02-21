import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: [],
  reducers: {
    setPokemonsGlobal: (state, action) => {
      return action.payload;
    },
  },
});

export const {setPokemonsGlobal} = pokemonsSlice.actions;

export const getAllPokemonsThunk = () => (dispatch) => {
  const URL = "https://pokeapi.co/api/v2/pokemon/"
    axios.get(URL)
      .then((res) => dispatch(setPokemonsGlobal(res.data.results)))
      .catch((err) => console.log(err))
}

export default pokemonsSlice.reducer;