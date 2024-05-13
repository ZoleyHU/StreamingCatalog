import React from 'react'

interface Props {}

const Card = (props: Props) => {
  return (
    <div className='card'>
      <p>placeholder for poster</p>
        <div className='details'>
            <h2>Title</h2>
            <p>Type: Movie</p>
        </div>
        <p>Lenght 3423 mins</p>
    </div>
  )
}

export default Card