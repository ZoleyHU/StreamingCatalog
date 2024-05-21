import React from 'react'
import { Show } from 'streaming-availability';
import CardStreamingIcon from '../CardStreamingIcon/CardStreamingIcon';

interface Props {
  id: string;
  show: Show;
  country: string;
}
//TODO: add price and quality for rental/buyable movies, on their own page
const Card: React.FC<Props> = ({id, show, country}: Props): JSX.Element => {
  return (
    <div className='m-auto w-60 h-fit flex flex-col items-center text-center p-3 rounded-xl overflow-hidden shadow-lg shadow-slate-700 bg-white'>
      <img src={show.imageSet.verticalPoster.w240} alt={show.title + " poster"}/>
      <div>
        <p className='text-2xl'>{show.title + " (" + (show.releaseYear===undefined ? (show.firstAirYear +"-"+ show.lastAirYear) : show.releaseYear ) + ")"}</p>
        <p className='uppercase text-lg text-gray-500'>{show.showType}</p>
      </div>
      <CardStreamingIcon show={show} country={country}/>
    </div>
  )
}

export default Card