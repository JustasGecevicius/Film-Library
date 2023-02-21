interface Props {
  birthday: string;
  deathday: string | null;
  also_known_as: string[];
  place_of_birth: string;
}

export const PersonalFacts = ({
  birthday,
  also_known_as,
  deathday,
  place_of_birth,
}: Props) => {
  return (
    <div className="dataNumbers">
      <div className="dataNumbersWidth">
        <div className="dataNumbersSymbol">
          <p className="movieNumberSymbolText">{`Birthday | ${birthday}`}</p>
        </div>
        {also_known_as.map((nickname) => {
          return (
            <div className="dataNumbersSymbol">
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
