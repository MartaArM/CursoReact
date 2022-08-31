import { heroes } from "../data/Heroes";

export const getHeroesByPublisher = (publisher) => {
    if (publisher == 'DC Comics' || publisher == 'Marvel Comics') {
        return heroes.filter( (heroe) => heroe.publisher == publisher);
    }
    else {
        throw new Error(publisher + " is not a valid publisher.");
    }
}