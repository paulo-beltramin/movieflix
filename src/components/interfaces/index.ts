


export interface MovieProps {
    id: number
    title: string
    poster_path: string
}


export interface DetailsMovies extends MovieProps {
    id:number
    overview?: string
    backdrop_path?: string
    release_date?: string
    vote_average: number
}


export interface DetailSeries extends DetailsMovies {
    name:string
}


export interface SeriesProps {
    id: number
    name: string
    poster_path: string
}
