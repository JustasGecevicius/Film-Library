import { PersonalFactsType } from "features/people/types";

export const PersonalFacts = ({
  birthday,
  also_known_as,
  deathday,
  place_of_birth,
}: PersonalFactsType) => {
  return (
    <div className="dataNumbers">
      <div className="dataNumbersWidth">
        <div className="dataNumbersSymbol">
          <p className="movieNumberSymbolText">{`Birthday | ${birthday}`}</p>
        </div>
        {also_known_as.map((nickname, index) => {
          return (
            <div className="dataNumbersSymbol" key={index}>
              <p className="movieNumberSymbolText">{`Known as | ${nickname}`}</p>
            </div>
          );
        })}
        {deathday && (
          <div className="dataNumbersSymbol">
            <p className="movieNumberSymbolText">{`Deathday | ${deathday}`}</p>
          </div>
        )}
        <div className="dataNumbersSymbol">
          <p className="movieNumberSymbolText">{`Birth place | ${place_of_birth}`}</p>
        </div>
      </div>
    </div>
  );
};
