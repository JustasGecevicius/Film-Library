
export const productionCompanyInformationFilter = (array : Object[], configuration : any) => {

        const baseURL = configuration["images"]["base_url"] + configuration["images"]["logo_sizes"][6];
        const sortedArray: any = [];

        array.forEach((elem : any) => {
                const imageURL = baseURL + elem["logo_path"];
                const newObj = {...elem, "logo_path": imageURL};
                //console.log(newObj);
                sortedArray.push(newObj);
        })     

        return sortedArray; 
}