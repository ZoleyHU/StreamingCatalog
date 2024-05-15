import React from 'react'
import { Show } from 'streaming-availability';

interface Props {
  id: string;
  show: Show;
}
//TODO: add price and quality for rental/buyable movies, on their own page
const Card: React.FC<Props> = ({id, show}: Props): JSX.Element => {
  return (
    <div className='card'>
      <img src={show.imageSet.verticalPoster.w240} alt={show.title + " poster"}/>
      <div className='details'>
        <h2>{show.title + " (" + (show.releaseYear===undefined ? (show.firstAirYear +"-"+ show.lastAirYear) : show.releaseYear ) + ")"}</h2>
        <p>{show.showType}</p>
        <p>{show.showType==='series' && show.seasonCount + " Seasons"}</p>
      </div>
    </div>
  )
}

export default Card