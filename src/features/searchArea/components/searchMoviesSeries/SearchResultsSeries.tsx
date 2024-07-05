import { useSearchSeries } from '../../../searchArea/hooks';
import { SearchResultsPropsType } from '../../../searchArea/types';
import { Link } from 'react-router-dom';
import { FoundSearch } from './FoundSearch';
import { useConfig } from '../../../../hooks';

export const SearchResultsSeries = ({ query }: SearchResultsPropsType) => {
  const { config } = useConfig();
  const results = useSearchSeries(query, 700);
  return (
    <>
      {results && config ? (
        results.map((elem, index) => {
          return (
            <Link to={`/Film-Library/series/${elem.id.toString()}`} key={index}>
              {elem.poster_path && (
                <FoundSearch
                  id={elem.id}
                  name={elem.name}
                  URL={`${config.images.base_url}${config.images.poster_sizes[5]}${elem.poster_path}`}
                />
              )}
            </Link>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};
