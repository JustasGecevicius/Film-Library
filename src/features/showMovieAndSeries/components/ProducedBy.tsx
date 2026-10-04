import { ProducedByType } from 'features/movies/types';

export const ProducedBy = ({ productionCompanies }: ProducedByType) => (
  <section className='py-4'>
    <h2 className='mb-5 text-2xl font-bold tracking-tight'>
      Production companies
    </h2>
    <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4'>
      {productionCompanies.map((elem, index) => (
        <div
          key={index}
          className='flex flex-col items-center justify-between min-h-36 gap-3 p-4 text-center border bg-white/5 border-white/10 rounded-2xl'
        >
          {elem.logo_path ? (
            <img
              src={elem.logo_path}
              alt={`${elem.name} logo`}
              className='object-contain w-full h-20 p-2 bg-white rounded-xl'
            />
          ) : (
            <div className='flex items-center justify-center w-full h-20 text-2xl font-bold bg-white/10 rounded-xl'>
              {elem.name.charAt(0)}
            </div>
          )}
          <p className='text-sm font-semibold text-white/80'>{elem.name}</p>
        </div>
      ))}
    </div>
  </section>
);
