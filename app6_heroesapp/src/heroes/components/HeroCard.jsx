import { Link } from "react-router-dom";

// Carta que muestra la foto y los datos del héroe
export const HeroCard = ({hero}) => {
    
    const image = "/assets/heroes/" + hero.id + ".jpg";
    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img className="card-img" src={image} alt={hero.superhero} /> {/*Imagen del superheroe */}
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{hero.superhero}</h5>

                            <p className="card-text">{hero.alter_ego}</p>
                            { // Se muestran los caracteres si no es siempre igual que el alter ego
                                (hero.characters != hero.alter_ego) ? 
                                (<p className="card-text">{hero.characters}</p>) :
                                null
                            }
                            <p className="card-text">
                                <small>{hero.first_appearance}</small>
                            </p>

                            <Link to={"/hero/" + hero.id}> {/* Link para ver más información */}
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}