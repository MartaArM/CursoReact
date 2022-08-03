import { createSlice } from '@reduxjs/toolkit'
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page:0,
    pokemons: [],
    isLoading: false
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
        state.isLoading = true;
    }
  }
})
export const { startLoading, setPokemons} = pokemonSlice.actions; 