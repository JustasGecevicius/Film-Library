import { MovieBackdropType } from '../../movies/types';

export const BackdropPerson = ({
  backdrop,
  poster,
  title,
}: MovieBackdropType) => (
  <div
    className='h-[500px] bg-center bg-cover bg-no-repeat'
    style={{ backgroundImage: `url(${backdrop})` }}
  >
    <div className='relative h-full max-w-4xl mx-auto '>
      <div className='relative flex-row items-end -translate-y-full top-full gap-x-8'>
        <div
          className='bg-cover bg-center h-48 aspect-[2/3] rounded-md'
          style={{ backgroundImage: `url(${poster})` }}
        ></div>
        <h2 className='text-6xl font-serifFont whitespace-break-spaces'>
          {title}
        </h2>
      </div>
    </div>
  </div>
);
