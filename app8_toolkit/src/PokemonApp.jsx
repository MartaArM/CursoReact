import React, { useEffect } from 'react'
import { useDispatch,  useSelector} from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {

    const dispatch = useDispatch();
    useEffect(() => { // Se llama cuando queremos ejecutar algo solo la primera vez
        dispatch(getPokemons());
    }, [])

    const {page, pokemons, isLoading} = useSelector((state) => state.pokemons);

  return (
    <>
        <h1>Pokemon App</h1>
        <hr/>
        <span>Loading: { isLoading ? 'Cargando' : 'Cargado'}</span>
        <ul>
            {
                pokemons.map( (pok) => (
                    <li key={ pok.name }>{ pok.name }</li>
                  ))
            }
        </ul>
    </>
  )
}
