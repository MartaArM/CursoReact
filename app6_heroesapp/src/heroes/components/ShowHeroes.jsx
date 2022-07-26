import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";

export const ShowHeroes = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);

  return (
    // <ul>
    //     {
    //         heroes.map( (element) =>  ( // Por cada categoría creamos una lista de gifs
    //             <li key={element.id}>{element.superhero}</li> // Aqui se muestran los GIF
    //         ) )
    //     }
    // </ul>
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            heroes.map( (element) =>  ( // Por cada categoría creamos una lista de gifs
                <HeroCard key={element.id} hero={element} />
            ) )
        }
    </div>
  )
}
