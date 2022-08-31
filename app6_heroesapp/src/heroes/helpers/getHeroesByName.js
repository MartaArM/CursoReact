import { heroes } from "../data/Heroes";

export const getHeroesByName = (name) => {
    name = name.toLowerCase().trim()
    if (name == "") return [];
    return heroes.filter( (heroe) => ((heroe.superhero).toLocaleLowerCase()).includes(name));
}