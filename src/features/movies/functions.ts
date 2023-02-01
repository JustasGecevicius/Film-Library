import { getConfig } from "features/config/api";
import { GetConfig } from "features/config/types";
import { deleteField, doc, DocumentData, DocumentReference, Firestore, getDoc, updateDoc } from "firebase/firestore";
import { getMovieData } from "./api";
import { FetchData, GetTrendingMovies, MovieNumbersType, MovieObjectType } from "./types";

export const filterMovieInformation = (config : GetConfig, fetchMovieResponse : GetTrendingMovies) => {
        const movieArray : MovieObjectType[] = [];
        fetchMovieResponse["results"].forEach((elem) => {
                //console.log(elem, "elem")
                const movieObject = {title:"", imageURL:"", releaseDate:"", movieId:""};
                const imageURL = config["images"]["base_url"] + config["images"]["poster_sizes"][5] + elem["poster_path"];

                movieObject["title"] = elem["title"];
                movieObject["releaseDate"] = elem["release_date"];
                movieObject["imageURL"] = imageURL;  
                movieObject["movieId"] = elem["id"].toString();
                
                if(movieObject["title"] && movieObject["releaseDate"] && movieObject["imageURL"]) movieArray.push(movieObject);
        });
        return movieArray;
}

export const fetchData = async ({ movieId, setConfig, setData }: FetchData) => {
        const { data: movieData } = await getMovieData(movieId);
        const { data: configuration } = await getConfig();
        setConfig(configuration);
        setData(movieData);
};

export const filterProductionCompanies = (array : Object[], configuration : any) => {

        const baseURL = configuration["images"]["base_url"] + configuration["images"]["logo_sizes"][6];
        const sortedArray: any = [];

        array.forEach((elem : any) => {
                if(elem["logo_path"]){
                        const imageURL = baseURL + elem["logo_path"];
                        const newObj = {...elem, "logo_path": imageURL};
                        sortedArray.push(newObj);
                }
        })     

        return sortedArray; 
}

export const like = async (db: any, movieId : string, userId : string, title: string, setLiked :any, liked:boolean) => {
        //gets the movie refference
        const movieRef = doc(db, "likedMovies", `${userId}`)
        //delete or add the movie based on liked state
        if(liked){
                await updateDoc(movieRef, {[movieId] : deleteField()})
        }
        else{
                await updateDoc(movieRef, {[movieId] : title});
        }
        //setting the state of liked to the opposite
        setLiked(!liked);
}

export const fetchLiked = async (db : any, userId : any, movieId : any, setLiked : any) => {
        const docRef: DocumentReference<DocumentData> = doc(
                db,
                "likedMovies",
                `${userId}`
            );
            const document = await getDoc(docRef);
            const allFields: DocumentData | undefined = document.data();
            //checking if the movie is liked already and setting the liked state
            setLiked(likedCheck(allFields, movieId));
}

export const likedCheck = (likedMovies : any, currentMovie : any) => {
        //returns true or false depending on if the movie was found in the liked list or not
        //console.log(likedMovies, currentMovie);
       return Object.keys(likedMovies).includes(currentMovie);
}
//find a way to fix the rating type issue???
export const rate = async (db: any, movieId : string, userId : string, rating: any, setRating :React.Dispatch<React.SetStateAction<string>>) => {
    //gets the movie refference
    //console.log(rating[0].value)
    const movieRef = doc(db, "ratedMovies", `${userId}`)
    //delete or add the movie based on liked state
    if(rating){
        await updateDoc(movieRef, {[movieId] : rating[0].value});
    }
    //setting the state of liked to the opposite
    setRating(rating[0].value);
}

export const fetchRating = async (db : Firestore, userId : string, movieId : string, setRating : React.Dispatch<React.SetStateAction<string>>) => {
    const docRef: DocumentReference<DocumentData> = doc(
            db,
            "ratedMovies",
            `${userId}`
        );
        const document = await getDoc(docRef);
        const allFields: DocumentData | undefined = document.data();
        if(!allFields) return;
        if(Object.keys(allFields).includes(movieId)){
            setRating(allFields[movieId]);
        }
        else{setRating("X");};
}

const symbolChecker = (number : number) => {

        let value : string;
            switch (Math.round(number).toString().length) {
        case 3:
            value = number.toString();
            break;
        case 4:                
            value = Math.round(number / 1000).toString() + "k";
            break;
        case 5:
            value = Math.round(number / 1000).toString() + "k";
            break;
        case 6:
            value = Math.round(number / 1000).toString() + "k";
            break;
        case 7:
            value = Math.round(number / 1000000).toString() + "m";
            break;
        case 8:
            value = Math.round(number / 1000000).toString() + "m";
            break;
        case 9:
            value = Math.round(number / 1000000).toString() + "m";
            break;
        case 10:
            value = Math.round(number / 1000000000).toString() + "b";
            break;
        case 11:
            value = Math.round(number / 1000000000).toString() + "b";
            break;
        case 12:
            value = Math.round(number / 1000000000).toString() + "b";
            break;
        default:
            value = "0";
    }
    return value;
}

export const tagFixer = (props : MovieNumbersType) => {
        let newArr : [string, string][] = [];
        const arr : [string, number][] = Object.entries(props);
            arr.forEach((elem, index) => {
                newArr.push(["", ""]);
                newArr[index][1] = symbolChecker(elem[1]);
                switch (elem[0]) {
                    case "budget":
                        newArr[index][0] = "Budget";
                        break;
                    case "revenue":
                        newArr[index][0] = "Revenue";
                        break;
                    case "runtime":
                        newArr[index][0] = "Runtime";
                        break;
                    case "voteAverage":
                        newArr[index][0] = "Vote";
                        break;
                    default:
                        break;
                }
            });
            return newArr
        }