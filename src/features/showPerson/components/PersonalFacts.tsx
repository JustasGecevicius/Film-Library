import { PersonalFactsType } from "features/people/types";

export const PersonalFacts = ({
  birthday,
  also_known_as,
  deathday,
  place_of_birth,
}: PersonalFactsType) => (
  <div className='flex-row flex-wrap w-full max-w-4xl gap-2 py-2 mx-auto'>
    <div className='flex-row h-[30px]'>
      {!!birthday && (
        <p className='px-2 border-2 whitespace-nowrap rounded-xl'>{`Birthday | ${birthday}`}</p>
      )}
    </div>
    {also_known_as?.map(
      (nickname, index) =>
        nickname && (
          <div className='border-2 rounded-xl h-[30px] px-2' key={index}>
            <p className='whitespace-nowrap'>{`Known as | ${nickname}`}</p>
          </div>
        )
    )}
    {!!deathday && (
      <div className='border-2 rounded-xl h-[30px] px-2'>
        <p className='whitespace-nowrap'>{`Deathday | ${deathday}`}</p>
      </div>
    )}
    {!!place_of_birth && (
      <div className='border-2 rounded-xl h-[30px] px-2'>
        <p className='whitespace-nowrap'>{`Birth place | ${place_of_birth}`}</p>
      </div>
    )}
  </div>
);
