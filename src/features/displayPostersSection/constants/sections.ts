import { usePopular } from '../../popular/popularHooks';
import { useTop } from '../../topRated/topRatedHooks';

export const SECTION_NAMES = {
  top: 'Top',
  popular: 'Popular',
  recommended: 'Recommended',
  liked: 'Liked',
  rated: 'Rated',
  popular_friends: 'Popular With Friends',
  rated_friends: 'Rated by Friends',
  credits: 'Credits',
};

export const SECTION_NAMES_FRIENDS = {
  popular: 'Popular',
  rated: 'Rated',
};

export const TYPE_NAMES = {
  movie: 'Movies',
  series: 'Series',
  people: 'people',
};

export const HOOKS_FOR_SECTIONS = {
  popular: usePopular,
  top: useTop,
};
