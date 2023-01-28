import React from 'react'

interface Props {
        genre:string
}

export const GenreSymbol: React.FC<Props> = ({genre}) => {
                return (<div className='genreSymbol'>
                        {genre}
                </div>);
}