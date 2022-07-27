import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from 'query-string';
import { HeroCard } from "../components/HeroCard";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search); // Cojo la query de la URL
  
  const heroes = getHeroesByName(q);
  
  // ----------- MANEJO DE FORMULARIO ------------ //
  const {formState, onInputChange} = useForm ({ // Manejamos el formulario
    searchInput: q
  })

  const {searchInput} = formState;
  // ---------------------------------------------- //

  const onSearchSubmit = (event) => {
    event.preventDefault();

    if (searchInput.length > 1){
      navigate("?q="+searchInput) // Vamos a utilizar parámetros en la url
    }
  }

  return (
    <>
        <h1>Search Page</h1>
        <div className="row">
          <div className="col-5">
            <h4>Búsqueda</h4>

            <form className="mt-3 d-flex" onSubmit={onSearchSubmit}>

              <input type="text" 
              placeholder="Buscar un héroe"
              className="input-margin form-control "
              name="searchInput"
              autoComplete="off"
              value = {searchInput}
              onChange={onInputChange}
              />

              <button 
              className="btn btn-color align-self-end">
                Buscar
              </button>
            </form>

          </div>

          <div className="col-7">

            <h4>Resultados</h4>
            <hr />

            {
              (q.length>0) ? null : 
              (<div className="alert alert-info">
                Busca un héroe
              </div>)

            }

            {
              (q.length > 0 && heroes.length <= 0) ? 
              (
                <div className="alert alert-danger">
                  No se encontró ningún héroe
                </div>
              ) :
              null
              
            }

            {
              heroes.map( (element) =>  ( // Por cada categoría creamos una lista de gifs
                  
                  <HeroCard key={element.id} hero={element} />
              ) )
            }
            
          </div>
        </div>
    </>
  )
}
