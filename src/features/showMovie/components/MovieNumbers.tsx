/* eslint-disable array-callback-return */
import { tagFixer } from "features/movies/functions";
import { MovieNumbersType } from "features/movies/types";

export const MovieNumbers = ({
  budget,
  revenue,
  runtime,
  voteAverage,
}: MovieNumbersType) => {
  //console.log(props)
  const fixedProps = tagFixer({ budget, revenue, runtime, voteAverage });
  return (
    <div className="movieNumbers">
      <div className="movieNumbersWidth">
        {fixedProps.map((elem, index) => {
          if (elem[1] !== "0") {
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
