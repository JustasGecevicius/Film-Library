import { useSearchPeople } from '../../../searchArea/hooks';
import { SearchResultsPropsType } from '../../../searchArea/types';
import { Link } from 'react-router-dom';
import { FoundSearch } from '../../../searchArea/components/searchMoviesSeries/FoundSearch';
import { useConfig } from '../../../../hooks';

export const SearchResultsPeople = ({ query }: SearchResultsPropsType) => {
  const { config } = useConfig();
  const results = useSearchPeople(query, 700);
  return results && config
    ? results.map((elem, index) => (
        <Link to={`/Film-Library/person/${elem.id}`} key={index}>
          {elem.profile_path && (
            <FoundSearch
              id={elem.id}
              name={elem.name}
              URL={`${config.images.base_url}${config.images.profile_sizes[3]}${elem.profile_path}`}
            />
          )}
        </Link>
      ))
    : null;
}
