/* eslint-disable array-callback-return */
// Types
import { DataNumbersType } from "features/showMovieAndSeries/types";
// Functions
import { symbolChecker } from "../functions";
import _ from "lodash";

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
    ["Runtime", `${runtime} minutes`],
    ["Average Rating", voteAverage ? _.round(voteAverage, 2) : undefined],
    ["Last Episode", last_air_date],
    ["Episodes", number_of_episodes],
    ["Seasons", number_of_seasons],
  ];

  return (
    <div className="dataNumbers">
      <div className="dataNumbersWidth">
        {fixedNumbers.map((elem, index) => {
          if (elem[1] !== undefined) {
            return (
              <div className="dataNumbersSymbol" key={index}>
                <p className="movieNumberSymbolText">{`${elem[0]} | ${elem[1]}`}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
