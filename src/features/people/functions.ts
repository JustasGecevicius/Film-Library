import { GetConfig } from "features/config/types";
import { PersonObject } from "features/displayPostersSection/types";
import { People } from "./types";

export const filterPeopleInformation = (config : GetConfig, fetchPeopleResponse : People) => {
        const peopleArray : PersonObject[] = [];
        fetchPeopleResponse["results"].forEach((elem) => {
                const personObject = {name:"", imageURL:""};
                const imageURL = config["images"]["base_url"] + config["images"]["profile_sizes"][3] + elem["profile_path"];

                personObject["name"] = elem["name"];
                personObject["imageURL"] = imageURL;    
                
                if(personObject["name"] && personObject["imageURL"]) peopleArray.push(personObject);
        });
        return peopleArray;
}