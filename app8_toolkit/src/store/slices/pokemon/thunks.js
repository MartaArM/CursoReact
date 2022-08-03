import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoading } from "./pokemonSlice"

// Ejecuta funciones de forma asincrona
export const getPokemons = (page = 0) => {
    return async(dispatch, getState) => {
        dispatch(startLoading());

        //TODO: realizar llamada api pokemon
        // Llamada a la api de pokemon con AXIOS ("../../../api/pokemonApi")
        const {data} = await pokemonApi.get('pokemon?limit=10&offset=' + (page*10));
        console.log(data);
        dispatch(setPokemons( {pokemons: data.results, page: page+1}))
        // dispatch(setPokemons(action));
    }
}