import React from 'react'

interface Props {
  title: string;
  runtime: number;
  posterLink: string;
  showType: string;
}

const Card: React.FC<Props> = ({title, runtime, posterLink, showType}: Props): JSX.Element => {
  return (
    <div className='card'>
      <p>{posterLink}</p>
        <div className='details'>
            <h2>{title}</h2>
            <p>{showType}</p>
        </div>
        <p>Lenght {runtime} mins</p>
    </div>
  )
}

export default Card