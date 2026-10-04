import { DataNumbersType } from 'features/showMovieAndSeries/types';
import { symbolChecker } from '../functions';
import { round } from 'lodash';

export const DataNumbers = ({
  budget,
  revenue,
  runtime,
  voteAverage,
  last_air_date,
  number_of_episodes,
  number_of_seasons,
}: DataNumbersType) => {
  const fixedBudget = budget ? symbolChecker(budget) : undefined;
  const fixedRevenue = revenue ? symbolChecker(revenue) : undefined;

  const fixedNumbers = [
    ['Budget', fixedBudget],
    ['Revenue', fixedRevenue],
    ['Runtime', runtime ? `${runtime} minutes` : undefined],
    ['Average Rating', voteAverage ? round(voteAverage, 2) : undefined],
    ['Last Episode', last_air_date],
    ['Episodes', number_of_episodes],
    ['Seasons', number_of_seasons],
  ];

  return (
    <section className='grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4'>
      {fixedNumbers.map((elem, index) =>
        elem[1] ? (
          <div
            className='p-4 border bg-white/5 border-white/10 rounded-2xl'
            key={index}
          >
            <p className='mb-1 text-xs font-bold tracking-wider uppercase text-white/45'>
              {elem[0]}
            </p>
            <p className='font-semibold text-white'>{elem[1]}</p>
          </div>
        ) : null
      )}
    </section>
  );
};
