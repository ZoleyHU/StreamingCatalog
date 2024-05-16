import React from 'react'
import Card from '../Card/Card'
import { Show } from 'streaming-availability'

interface Props {
  searchResults: Show[]
}

const CardList : React.FC<Props> = ({searchResults}: Props) : JSX.Element => {
  return <div className='flex flex-wrap w-full'>
    {
      searchResults.length > 0 ? (
        searchResults.map((show) => {
          return <Card id={show.id} key={show.imdbId} show={show}/>
        })
      ) : (
        <p className='text-3xl font-semibold text-center'>No results</p>
      )
    }
    </div>
}

export default CardList