import { GetConfig } from 'features/config/types';
import { ProductionCompany } from './types';
import { inRange } from 'lodash';

// A function that returns only the needed attributed of the fetched
// production company information
export const filterProductionCompanies = (
  config: GetConfig,
  array: ProductionCompany[]
) => {
  const baseURL = config.images.base_url + config.images.logo_sizes[6];
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
  if (inRange(number, 1000, 999999)) {
    return Math.round(number / 1000).toString() + 'k';
  } else if (inRange(number, 1000000, 999999999)) {
    return Math.round(number / 1000000).toString() + 'm';
  } else if (inRange(number, 1000000000, 999999999999)) {
    return Math.round(number / 1000000000).toString() + 'b';
  }
};
