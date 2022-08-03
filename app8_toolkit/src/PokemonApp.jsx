import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {

    const dispatch = useDispatch();
    useEffect(() => { // Se llama cuando queremos ejecutar algo solo la primera vez
        dispatch(getPokemons());
    }, [])

  return (
    <>
        <h1>Pokemon App</h1>
        <hr/>
        <ul>
            <li>Primero</li>
            <li>Segundo</li>
        </ul>
    </>
  )
}
