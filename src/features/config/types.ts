export type GetConfig = {
  change_keys: string[];
  images: GetConfigImages;
};

export interface GetConfigImages {
  backdrop_sizes: string[];
  base_url: string;
  logo_sizes: string[];
  poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'];
  profile_sizes: string[];
  secure_base_url: string;
  still_sizes: string[];
}
