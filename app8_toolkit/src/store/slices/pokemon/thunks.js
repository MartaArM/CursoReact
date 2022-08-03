import { setPokemons, startLoading } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return (dispatch, getState) => {
        dispatch(startLoading());

        //TODO: realizar llamada api pokemon
        // dispatch(setPokemons(action));
    }
}