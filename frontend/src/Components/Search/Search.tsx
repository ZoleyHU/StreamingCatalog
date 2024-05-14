import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

interface Props {}

const Search : React.FC<Props> = (props: Props) : JSX.Element => {
    const [search, setSearch] = useState<string>("");

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearch(event.target.value);
        console.log(event);
    }

    const onClickHandler = async (event: SyntheticEvent) => {
        event.preventDefault();
    }

  return (
    <div>
        <input type="text" value={search} onChange={(event) => onChangeHandler(event)}/>
        <button onClick={(event) => onClickHandler(event)}>Search</button>
    </div>
  )
}

export default Search