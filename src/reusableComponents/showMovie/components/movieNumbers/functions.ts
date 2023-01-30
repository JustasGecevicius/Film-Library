import { Props } from "./type";

export const tagFixer = (props : Props) => {
const arr : [string, number][] = Object.entries(props);
    arr.forEach((elem, index) => {
        switch (elem[0]) {
            case "budget":
                arr[index][0] = "Budget";
                break;
            case "revenue":
                arr[index][0] = "Revenue";
                break;
            case "runtime":
                arr[index][0] = "Runtime";
                break;
            case "voteAverage":
                arr[index][0] = "Vote";
                break;
            default:
                break;
        }
    });
    return arr
}