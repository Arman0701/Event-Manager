import data from './data.json'

export function getEvents(){
    return data
}
export function getFilms(){
    return data["films"]
}
export function getTheaters(){
    return data["theaters"]
}
export function getConcerts(){
    return data["concerts"]
}
export function getClubsAndPubs(){
    return data["clubsAndPubs"]
}