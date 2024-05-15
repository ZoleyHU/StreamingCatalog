import React from 'react'
import Card from '../Card/Card'
import { Show } from 'streaming-availability'

interface Props {
  searchResults: Show[]
}

const CardList : React.FC<Props> = ({searchResults}: Props) : JSX.Element => {
  return <>
    {
      searchResults.length > 0 ? (
        searchResults.map((show) => {
          return <Card id={show.id} key={show.imdbId} show={show}/>
        })
      ) : (
        <h1>No results</h1>
      )
    }
    </>
}

export default CardList