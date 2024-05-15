import React, { ChangeEvent, SyntheticEvent } from 'react'

interface Props {
    search: string | undefined;
    onClickHandler: (event: SyntheticEvent) => void;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
//TODO: add country selection
//TODO: advanced search feature
const Search : React.FC<Props> = ({search, onClickHandler, onChangeHandler}: Props) : JSX.Element => {
  return (
    <div>
        <input type="text" value={search} onChange={(event) => onChangeHandler(event)}/>
        <button onClick={(event) => onClickHandler(event)}>Search</button>
    </div>
  )
}

export default Search