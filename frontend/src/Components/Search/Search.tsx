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
    <form className='text-center ml-[20%] mr-[20%] mb-2 p-[1%] mt-[10%] bg-slate-800 text-2xl' onSubmit={onSearchSubmit}>
      <input className='h-9 w-96 text-2xl mr-2' value={search} onChange={onSearchChange}/>
      <select className='h-9 w-auto' defaultValue="hu" value={selectedCountry} onChange={(e) => onCountryChange(e)}>
        <option value={"hu"}>Hungary</option>
        <option value={"us"}>United States</option>
      </select>
    </form>
  )
}

export default Search