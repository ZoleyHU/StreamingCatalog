import React from 'react'
import { Show } from 'streaming-availability';

interface Props {
  id: string;
  show: Show;
}
//TODO: add stream options in a list next to each other
const Card: React.FC<Props> = ({id, show}: Props): JSX.Element => {
  return (
    <div className='card'>
      <img src={show.imageSet.verticalPoster.w240} alt={show.title + " poster"}/>
      <div className='details'>
        <h2>{show.title}</h2>
        <p>{show.showType}</p>
      </div>
    </div>
  )
}

export default Card