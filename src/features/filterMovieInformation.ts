export const filterMovieInformation = (config : any, fetchMovieResponse : any) => {
        const movieArray : Object[] = [];
        fetchMovieResponse["results"].forEach((elem : any) => {
                const movieObject = {title:"", imageURL:"", releaseDate:"", movieId:""};
                const imageURL = config["images"]["base_url"] + config["images"]["poster_sizes"][5] + elem["poster_path"];

                movieObject["title"] = elem["title"];
                movieObject["releaseDate"] = elem["release_date"];
                movieObject["imageURL"] = imageURL;  
                movieObject["movieId"] = elem["id"].toString();
                
                if(movieObject["title"] && movieObject["releaseDate"] && movieObject["imageURL"]) movieArray.push(movieObject);
        });
       // console.log(movieArray);
        return movieArray;
}

export const filterPeopleInformation = (config : any, fetchPeopleResponse : any) => {
        const peopleArray : Object[] = [];
        fetchPeopleResponse["results"].forEach((elem : any) => {
                const personObject = {name:"", imageURL:""};
                const imageURL = config["images"]["base_url"] + config["images"]["profile_sizes"][3] + elem["profile_path"];

                personObject["name"] = elem["name"];
                personObject["imageURL"] = imageURL;    
                
                if(personObject["name"] && personObject["imageURL"]) peopleArray.push(personObject);
        });
        return peopleArray;
}