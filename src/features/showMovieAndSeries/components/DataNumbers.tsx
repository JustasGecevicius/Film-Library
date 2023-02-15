/* eslint-disable array-callback-return */
import { DataNumbersType } from "features/showMovieAndSeries/types";
import { symbolChecker } from "../functions";

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
    ["Budget", fixedBudget],
    ["Revenue", fixedRevenue],
    ["Runtime", runtime],
    ["Average", voteAverage],
    ["Last Episode", last_air_date],
    ["Average", voteAverage],
    ["Episodes", number_of_episodes],
    ["Seasons", number_of_seasons],
  ];

  return (
    <div className="dataNumbers">
      <div className="dataNumbersWidth">
        {fixedNumbers.map((elem, index) => {
          if (elem[1] !== undefined) {
            return (
              <div className="movieNumbersSymbol" key={index}>
                <p className="movieNumberSymbolText">{`${elem[0]} | ${elem[1]}`}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
