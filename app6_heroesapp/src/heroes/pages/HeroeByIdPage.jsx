import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";

export const HeroeByIdPage = () => {
  const {id} = useParams(); // Cogemos el id del parámetro que le hemos pasado a la url
  const hero = getHeroById(id); // Buscamos el héroe por ID

  const navigate = useNavigate(); // Nuevo hook

  const onNavigateBack = () => {
    navigate(-1); // Volver a la página anterior
  }

  if (!hero) { // Si no hay heroe con ese id volvemos a la principal
    return <Navigate to="/marvel" />;
  }
  else {

    const image = "/assets/heroes/" + hero.id + ".jpg";

    return (
      <div className="container-fluid container-size m-4">
        <div className="row">
          <div className="col-5 p-3 img-size" >
            <img src={image} alt={hero.superhero} className="img-fluid" />
          </div>
          <div className=" row col-7 p-3">
            <div className="align-self-start p-3">
              <h4>{hero.superhero}</h4>
              <hr/>
              <p> <b>Alter ego:</b> {hero.alter_ego}</p>
              
              <p>
              <small><b>Primera aparición: </b>{hero.first_appearance}</small>
              </p>

              { // Se muestran los caracteres si no es siempre igual que el alter ego
              (hero.characters != hero.alter_ego) ? 
              (<p><b>Caracteres: </b>{hero.characters}</p>) :
              null
              }

            </div>
            
            <div className="align-self-end row">
              <p  className="col-7"><b>{hero.publisher}</b></p> 
              
              <button 
              className="col-5 btn btn-color"
              onClick={onNavigateBack}> Volver </button>
            </div>

          </div>
        </div>
    </div>
    )
  }
  
}
