import React from 'react'
import Card from '../Card/Card'
import { Show } from 'streaming-availability'

interface Props {
  searchResults: Show[];
  country: string;
}

const CardList : React.FC<Props> = ({searchResults, country}: Props) : JSX.Element => {
  return <div className='flex flex-wrap w-full text-center'>
    {
      searchResults.length > 0 ? (
        searchResults.map((show) => {
          return <Card id={show.id} key={show.imdbId} show={show} country={country}/>
        })
      ) : (
        <p className='text-3xl font-semibold m-auto'>No results</p>
      )
    }
    </div>
}

export default CardList