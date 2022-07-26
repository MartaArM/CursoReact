import { heroes } from "../data/Heroes";

export const getHeroById = (id) => {
    const hero = heroes.find( (heroe) => heroe.id == id);

    return hero;
    
}