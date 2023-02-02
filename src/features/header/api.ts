import {
  getDownloadURL,
  getMetadata,
  getStorage,
  listAll,
  ref,
} from "firebase/storage";
import { IconsObject, Metadata } from "./types";

export const fetchHeaderIcons = async () : Promise<IconsObject> => {
  const storage = getStorage();
  const metadata: Promise<Metadata>[] = [];
  let data: Promise<string>[] = [];
  const iconsObject : IconsObject = {};

  const listRef = ref(storage, "header");
  const allItems = await listAll(listRef);

  allItems.items.forEach((elem) => {
    metadata.push(getMetadata(elem));
    data.push(getDownloadURL(elem));
  });
  const metaPromises = await Promise.all(metadata);
  const dataPromises = await Promise.all(data);
  metaPromises.forEach((elem, index) => {
    let iconName = elem["name"].split(".").slice(0, -1).join(".");
    iconsObject[iconName] = dataPromises[index];
  });
  return iconsObject;
};
