// Types
import { GetConfig } from "features/config/types";
import { ProductionCompany } from "./types";

// A function that returns only the needed attributed of the fetched
// production company information
export const filterProductionCompanies = (
  config: GetConfig,
  array: ProductionCompany[]
) => {
  const baseURL =
    config.images.base_url +
    config.images.logo_sizes[6];
  const sortedArray: ProductionCompany[] = [];

  array.forEach((elem) => {
    if (elem.logo_path) {
      const logoURL = baseURL + elem.logo_path;
      const newObj = { ...elem, logo_path: logoURL };
      sortedArray.push(newObj);
    }
  });

  return sortedArray;
};
// A function the reduces the number size to thousands, million and billions
// and makes it more readeable
export const symbolChecker = (number: number) => {
  let value: string;
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
};