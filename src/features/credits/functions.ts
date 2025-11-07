import { GetConfig } from 'features/config/types';
import { MovieObject } from 'features/movies/types';
import { PersonCast } from 'features/people/types';

export const filterPersonCreditsCastInformation = (
  config: GetConfig,
  cast: (PersonCast | undefined)[]
) => {
  if (!config || !cast) return [];
  if (
    typeof config !== 'object' ||
    Array.isArray(config) ||
    !Array.isArray(cast)
  )
    return [];
  const { poster_sizes, base_url } = config?.images || {};
  const baseUrl =
    !Array.isArray(poster_sizes) ||
    !poster_sizes.length ||
    !base_url ||
    typeof base_url !== 'string'
      ? ''
      : base_url + poster_sizes[5];

  const array = cast.reduce((acc, elem) => {
    if (!elem || typeof elem !== 'object' || Array.isArray(elem)) return acc;
    const { title, release_date, poster_path, id } = elem;

    if (!title || !id) return acc;

    const imageURL = poster_path && baseUrl ? baseUrl + poster_path : '';
    acc.push({ title, release_date, imageURL, id });
    return acc;
  }, [] as MovieObject[]);
  return array;
};
