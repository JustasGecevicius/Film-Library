import React, { useEffect, useState } from 'react'
import { PosterDisplay } from 'reusableComponents/PosterDisplay'
import { getConfig } from 'features/config/api'
import '../../css/explore.css'
import { filterMovieInformation } from 'features/movies/functions'
import { getTopRatedMovies, getTrendingMovies } from 'features/movies/api'

import { GetConfig } from 'features/config/types'

import { useQuery } from 'react-query'

interface Props {}

export const Explore: React.FC<Props> = () => {
  const { data, isLoading } = useQuery('config', getConfig)

  const [popularMovies, setPopularMovies] = useState<any>()
  const [topRatedMovies, setTopRatedMovies] = useState<any>()

  useEffect(() => {
    const fetch = async () => {
      const { data: popMovies } = await getTrendingMovies()
      const { data: topMovies } = await getTopRatedMovies()
      const popMovieData = filterMovieInformation(data?.data, popMovies)
      const topMovieData = filterMovieInformation(data?.data, topMovies)
      setPopularMovies(popMovieData)
      setTopRatedMovies(topMovieData)
    }

    if (!data?.data) return

    fetch()
  }, [data?.data])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {popularMovies ? (
        <PosterDisplay
          arr={popularMovies}
          sectionName='Popular Movies'
        ></PosterDisplay>
      ) : null}

      {topRatedMovies ? (
        <PosterDisplay
          arr={topRatedMovies}
          sectionName='Top Rated Movies'
        ></PosterDisplay>
      ) : null}
      {/* <PopularWithFriends></PopularWithFriends> */}
    </>
  )
}
