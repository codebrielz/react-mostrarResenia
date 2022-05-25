import { resenias } from "../data/resenias";

export const getReviewByName = (name = '')=>{

    if(name === ''){
        return [];
    }

    name = name;

    return resenias.filter(review => review.name.toLocaleLowerCase().includes(name));
}