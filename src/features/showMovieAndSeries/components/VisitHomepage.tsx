import { VisitHomepageType } from 'features/movies/types';

export const VisitHomepage = ({ link }: VisitHomepageType) => (
  <div>
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className='inline-flex items-center h-11 px-5 text-sm font-bold text-black transition bg-white rounded-full hover:bg-white/80'
    >
      Visit official website
    </a>
  </div>
);
