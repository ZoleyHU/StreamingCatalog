import React from 'react'
import Card from '../Card/Card'

interface Props {}

const CardList : React.FC<Props> = (props: Props) : JSX.Element => {
  return (
    <div>
      <Card title='A vak asszony visszanéz' runtime={10} posterLink='kép helye' showType='film'/>
      <Card title='sajt' runtime={100} posterLink='kép helye2' showType='sori'/>
      <Card title='Szósz' runtime={1430} posterLink='kép helye3' showType='sauce'/>
    </div>
  )
}

export default CardList