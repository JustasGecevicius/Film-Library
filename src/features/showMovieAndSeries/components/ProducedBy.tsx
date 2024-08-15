import { ProducedByType } from 'features/movies/types';

export const ProducedBy = ({ productionCompanies }: ProducedByType) => (
  <div className='flex-col w-full max-w-4xl py-4 mx-auto gap-y-2'>
    <h3 className='text-xl font-bold'> Production Companies</h3>
    <div className='flex-row flex-wrap gap-2'>
      {productionCompanies.map((elem, index) => (
        <div key={index} className='flex-col items-center bg-white rounded-xl'>
          <div
            className='w-[100px] h-[100px] bg-center bg-no-repeat bg-contain'
            style={{
              backgroundImage: `url(${elem.logo_path})`,
            }}
          ></div>
          <p className='p-2 text-black'>{elem.name}</p>
        </div>
      ))}
    </div>
  </div>
);
