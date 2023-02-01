import { GetConfig } from "features/config/types";
import { People, PeopleArray } from "./types";

export const filterPeopleInformation = (config : GetConfig, fetchPeopleResponse : People) => {
        const peopleArray : PeopleArray[] = [];
        fetchPeopleResponse["results"].forEach((elem) => {
                const personObject = {title:"", imageURL:""};
                const imageURL = config["images"]["base_url"] + config["images"]["profile_sizes"][3] + elem["profile_path"];

                personObject["title"] = elem["name"];
                personObject["imageURL"] = imageURL;    
                
                if(personObject["title"] && personObject["imageURL"]) peopleArray.push(personObject);
        });
        //console.log(peopleArray);
        return peopleArray;
}