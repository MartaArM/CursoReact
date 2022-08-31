import { ShowHeroes } from "../components/ShowHeroes"

// Muestra héroes de DC
export const DCPage = () => {
  return (
    <>
        <h1>DC Page</h1>
        <hr/>

        <ShowHeroes publisher='DC Comics' />
    </>
  )
}
