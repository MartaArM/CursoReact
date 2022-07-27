import { HeroCard } from "../components/HeroCard"

export const SearchPage = () => {
  return (
    <>
        <h1>Search Page</h1>
        <div className="row">
          <div className="col-5">
            <h4>Búsqueda</h4>

            <form className="mt-3 d-flex" action="">
              <input type="text" 
              placeholder="Buscar un héroe"
              className="input-margin form-control "
              name="searchInput"
              autoComplete="off"
              />
              <button className="btn btn-color align-self-end">
                Buscar
              </button>
            </form>

          </div>

          <div className="col-7">
            <h4>Resultados</h4>
            <hr />

            <div className="alert alert-info">
              Busca un héroe
            </div>

            <div className="alert alert-danger">
              No se encontró ningún héroe
            </div>

            {/* <HeroCard /> */}
          </div>
        </div>
    </>
  )
}
