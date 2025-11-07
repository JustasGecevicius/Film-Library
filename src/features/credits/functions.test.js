import { filterPersonCreditsCastInformation } from './functions';

describe('filterPersonCreditsCastInformation_tests', () => {
  const mockCast = [
    {
      title: 'Movie 1',
      release_date: '2022-01-01',
      poster_path: '/path/to/poster1.jpg',
      id: 1,
    },
    {
      title: 'Movie 2',
      release_date: '2022-02-01',
      poster_path: '',
      id: 2,
    },
    undefined,
    null,
    '',
    'X',
    123,
    { title: '' },
    {
      title: 'Movie 4',
      release_date: '2022-04-01',
      poster_path: '/path/to/poster4.jpg',
    },
  ];

  test('filterPersonCreditsCastInformation should filter and map cast information correctly', () => {
    const mockConfig = {
      images: {
        base_url: 'https://image.tmdb.org/t/p/',
        poster_sizes: [
          'w92',
          'w154',
          'w185',
          'w342',
          'w500',
          'w780',
          'original',
        ],
      },
    };

    const result = filterPersonCreditsCastInformation(mockConfig, mockCast);

    expect(result).toEqual([
      {
        title: 'Movie 1',
        release_date: '2022-01-01',
        imageURL: 'https://image.tmdb.org/t/p/w780/path/to/poster1.jpg',
        id: 1,
      },
      {
        title: 'Movie 2',
        release_date: '2022-02-01',
        imageURL: '',
        id: 2,
      },
    ]);
  });

  test('no config', () => {
    const mockConfig = undefined;
    const result = filterPersonCreditsCastInformation(mockConfig, mockCast);
    expect(result).toEqual([]);
  });

  test('Incorrect config => no poster_sizes', () => {
    const mockConfig = {
      images: {
        base_url: 'https://image.tmdb.org/t/p/',
        poster_sizes: [],
      },
    };
    const result = filterPersonCreditsCastInformation(mockConfig, mockCast);
    expect(result).toEqual([
      {
        title: 'Movie 1',
        release_date: '2022-01-01',
        imageURL: '',
        id: 1,
      },
      {
        title: 'Movie 2',
        release_date: '2022-02-01',
        imageURL: '',
        id: 2,
      },
    ]);
  });

  test('Incorrect config => no base_url', () => {
    const mockConfig = {
      images: {
        base_url: undefined,
        poster_sizes: ['w130', 'w300', 'w780', 'w1280', 'w1920', 'original'],
      },
    };
    const result = filterPersonCreditsCastInformation(mockConfig, mockCast);

    expect(result).toEqual([
      {
        title: 'Movie 1',
        release_date: '2022-01-01',
        imageURL: '',
        id: 1,
      },
      {
        title: 'Movie 2',
        release_date: '2022-02-01',
        imageURL: '',
        id: 2,
      },
    ]);
  });
});
