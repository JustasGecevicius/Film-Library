import { usePopular } from '../../popular/popularHooks';
import { useTop } from '../../topRated/topRatedHooks';

export const SECTION_NAMES = {
  top: 'Top',
  pop: 'Popular',
  recommended: 'Recommended',
};

export const TYPE_NAMES = {
  movie: 'Movie',
  series: 'Series',
};

export const HOOKS_FOR_SECTIONS = {
  pop: usePopular,
  top: useTop,
};
