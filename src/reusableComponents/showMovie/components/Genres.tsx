import React from 'react'
import { GenreSymbol } from './GenreSymbol';

interface Props {
genres:Object[];
}



export const Genres = ({genres} : Props) => {
                return (<div className='genres'>
                        <div className='genreItems'>
                        {genres.map((elem : any, index) => {
                                return <GenreSymbol key={index} genre={elem["name"]}/>
                        })}
                        </div>

                </div>);
}