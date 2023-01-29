import { getStorage, ref, getDownloadURL, getMetadata, listAll } from "firebase/storage"
import { Metadata } from "./types";


export const api = async () => {
        const storage = getStorage();
        const metadata : Promise<Metadata>[]= [];
        let data : Promise<string>[] = [];
        const iconsObject : any = {};      

        const listRef = ref(storage, "header");
        const allItems = await listAll(listRef);
        allItems.items.forEach((elem) => {
                metadata.push(getMetadata(elem));
                data.push(getDownloadURL(elem));
        })
        //console.log( data)
        const metaPromises = await Promise.all(metadata);
        const dataPromises = await Promise.all(data);
        metaPromises.forEach((elem, index) => {
                let iconName = elem["name"].split('.').slice(0, -1).join('.');
                iconsObject[iconName] = dataPromises[index];
        })
        return iconsObject;
}