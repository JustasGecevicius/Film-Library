import { DataNumbersType } from 'features/showMovieAndSeries/types';
import { symbolChecker } from '../functions';
import _ from 'lodash';

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
    ['Average Rating', voteAverage ? _.round(voteAverage, 2) : undefined],
    ['Last Episode', last_air_date],
    ['Episodes', number_of_episodes],
    ['Seasons', number_of_seasons],
  ];

  return (
    <div className='flex-row flex-wrap justify-start w-full max-w-4xl mx-auto gap-x-2'>
      {fixedNumbers.map((elem, index) => {
        return elem[1] ? (
          <div
            className='px-2 py-1 border border-black rounded-full'
            key={index}
          >
            <p>{`${elem[0]} | ${elem[1]}`}</p>
          </div>
        ) : null;
      })}
    </div>
  );
};
