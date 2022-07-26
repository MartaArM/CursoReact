import { ShowHeroes } from "../components/ShowHeroes"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const MarvelPage = () => {
  return (
    <>
        <h1>Marvel Page</h1>
        <hr/>

        <ShowHeroes publisher='Marvel Comics' />
    </>
  )
}
