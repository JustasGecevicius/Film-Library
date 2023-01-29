import { getStorage, ref, getDownloadURL } from "firebase/storage";

export const fetch = async () => {
        const storage = getStorage();
        const refference : any = ref(storage, "searchBar/searchIcon.png");
        const link = await getDownloadURL(refference);
        return link
}