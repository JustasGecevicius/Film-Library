import { PersonalFactsType } from "features/people/types";

export const PersonalFacts = ({
  birthday,
  also_known_as,
  deathday,
  place_of_birth,
}: PersonalFactsType) => {
  return (
    <div className='flex-row w-full flex-wrap gap-2 py-2 mx-auto max-w-4xl'>
      <div className='flex-row h-[30px]'>
        {birthday && (
          <p className='whitespace-nowrap border-2 rounded-xl px-2'>{`Birthday | ${birthday}`}</p>
        )}
      </div>
      {also_known_as.map((nickname, index) => {
        return (
          nickname && (
            <div className='border-2 rounded-xl h-[30px] px-2' key={index}>
              <p className='whitespace-nowrap'>{`Known as | ${nickname}`}</p>
            </div>
          )
        );
      })}
      {deathday && (
        <div className='border-2 rounded-xl h-[30px] px-2'>
          <p className='whitespace-nowrap'>{`Deathday | ${deathday}`}</p>
        </div>
      )}
      {place_of_birth && (
        <div className='border-2 rounded-xl h-[30px] px-2'>
          <p className='whitespace-nowrap'>{`Birth place | ${place_of_birth}`}</p>
        </div>
      )}
    </div>
  );
};
