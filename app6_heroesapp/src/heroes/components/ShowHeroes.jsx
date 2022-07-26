import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const ShowHeroes = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);

  return (
    <ul>
        {
            heroes.map( (element) =>  ( // Por cada categoría creamos una lista de gifs
                <li key={element.id}>{element.superhero}</li> // Aqui se muestran los GIF
            ) )
        }
    </ul>
  )
}
