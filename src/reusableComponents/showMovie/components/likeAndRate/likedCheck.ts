interface Props{
        likedMovies:Object
        currentMovie:string
}

export const likedCheck = (likedMovies : any, currentMovie : any) => {
        console.log(likedMovies, currentMovie);
}