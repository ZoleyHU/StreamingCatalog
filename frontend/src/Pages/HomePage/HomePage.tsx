import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Show } from 'streaming-availability';
import { searchShows } from '../../api';
import Header from '../../Components/Header/Header';
import Search from '../../Components/Search/Search';
import CardList from '../../Components/CardList/CardList';

interface Props {}

const HomePage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [searchResult, setSearchResult] = useState<Show[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [selectedCountry, setSelectedCountry] = useState<string>("hu");
  
    const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearch(event.target.value);
    }
  
    const onSearchSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const result = await searchShows(search, selectedCountry);
        if (typeof result === "string") {
          setErrorMessage(result);
        } else if(Array.isArray(result)) {
          setSearchResult(result);
        }
    }
  
    const onCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setSelectedCountry(event.target.value);
    }
    

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-600 to-slate-800'>
    <div>
    <Header />
    <Search search={search} selectedCountry={selectedCountry} onSearchSubmit={onSearchSubmit} onSearchChange={onSearchChange} onCountryChange={onCountryChange}/>      
    </div>
    <div>
    {errorMessage && <h1>{errorMessage}</h1>}
    <CardList searchResults={searchResult} country={selectedCountry}/>
    </div>
    
  </div>
  )
}

export default HomePage