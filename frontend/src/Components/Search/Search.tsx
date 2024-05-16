import React, { ChangeEvent, SyntheticEvent } from 'react'

interface Props {
    search: string | undefined;
    selectedCountry: string;
    onSearchSubmit: (event: SyntheticEvent) => void;
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onCountryChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
//TODO: advanced search feature
//TODO: get all supported countries
const Search : React.FC<Props> = ({search, selectedCountry, onSearchSubmit, onSearchChange, onCountryChange}: Props) : JSX.Element => {
  return (
    <form className='' onSubmit={onSearchSubmit}>
      <input value={search} onChange={onSearchChange}/>
      <select defaultValue="hu" value={selectedCountry} onChange={(e) => onCountryChange(e)}>
        <option value={"hu"}>Hungary</option>
        <option value={"us"}>United States</option>
      </select>
    </form>
  )
}

export default Search