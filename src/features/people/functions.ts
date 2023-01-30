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