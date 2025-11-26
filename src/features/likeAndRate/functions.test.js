import { checkLikeAndRate, checkRating, checkIfLiked } from './functions';

describe('check if movie/series liked and/or rated', () => {
  let movies;
  beforeEach(() => {
    movies = [{ id: 1 }];
  });
  it('should return liked: true and rating: 5 if user has liked and rated the item', () => {
    const likedMovies = ['1'];
    const ratedMovies = { 1: 5 };
    checkLikeAndRate(movies, likedMovies, ratedMovies);
    expect(movies).toMatchObject([{ id: 1, liked: true, rating: 5 }]);
  });
  it('should return liked: false and rating: undefined if user has not rated or liked the item', () => {
    const ratedMovies = { 2: 7 };
    checkLikeAndRate(movies, [], ratedMovies);
    expect(movies).toMatchObject([{ id: 1, liked: false, rating: undefined }]);
  });
  it('should not change the object if element is not a valid movie object', () => {
    const invalidMovies = [null, 42, 'movie', {}, []];
    const likedMovies = ['1'];
    const ratedMovies = { 1: 5 };
    checkLikeAndRate(invalidMovies, likedMovies, ratedMovies);
    expect(invalidMovies).toStrictEqual([null, 42, 'movie', {}, []]);
  });
});

describe('check if movie/series rated by user', () => {
  const ratings = { 123: 5, 234: undefined, 345: 10 };

  it('should return the rating of the movie if rated', () => {
    const result = checkRating(ratings, '123');
    expect(result).toBe(5);
  });
  it('should return undefined if the movie is not rated', () => {
    const result = checkRating(ratings, '456');
    expect(result).toBe(undefined);
  });
  it('should return undefined if ratedMovies is not an object', () => {
    const result = checkRating([], '123');
    expect(result).toBe(undefined);
  });
  it('should return undefined if movieId is not a string', () => {
    const result = checkRating(ratings, 123);
    expect(result).toBe(undefined);
  });
  it('should return undefined if found rating is not a number', () => {
    const result = checkRating(ratings, '234');
    expect(result).toBe(undefined);
  });
});

describe('check if movie/series liked', () => {
  it('should return true if movie is liked', () => {
    const result = checkIfLiked(['123'], '123');
    expect(result).toBe(true);
  });
  it('should return true if movie is liked nr2', () => {
    const result = checkIfLiked([undefined, '123'], '123');
    expect(result).toBe(true);
  });
  it('should return false if movieId is undefined', () => {
    const result = checkIfLiked(['123'], undefined);
    expect(result).toBe(false);
  });
  it('should return false if likes array is not an array', () => {
    const result = checkIfLiked({}, '123');
    expect(result).toBe(false);
  });
  it('should return false if movieId is an empty string', () => {
    const result = checkIfLiked(['123'], '');
    expect(result).toBe(false);
  });
  it('should return false if movie is not liked', () => {
    const result = checkIfLiked(['123'], '456');
    expect(result).toBe(false);
  });
});
