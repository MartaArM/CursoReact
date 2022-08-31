import { ShowHeroes } from "../components/ShowHeroes"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

//Muestra héroes de Marvel
export const MarvelPage = () => {
  return (
    <>
        <h1>Marvel Page</h1>
        <hr/>

        <ShowHeroes publisher='Marvel Comics' />
    </>
  )
}
