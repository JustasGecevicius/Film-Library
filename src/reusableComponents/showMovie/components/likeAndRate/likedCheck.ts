interface Props{
        likedMovies:Object
        currentMovie:string
}

export const likedCheck = (likedMovies : any, currentMovie : any) => {
        //returns true or false depending on if the movie was found in the liked list or not
       return Object.keys(likedMovies).includes(currentMovie);
}