import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import {Show} from "streaming-availability";
import { searchShows } from './api';

function App() {
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
    <div className="App">
      <Search search={search} selectedCountry={selectedCountry} onSearchSubmit={onSearchSubmit} onSearchChange={onSearchChange} onCountryChange={onCountryChange}/>
      {errorMessage && <h1>{errorMessage}</h1>}
      <CardList searchResults={searchResult}/>
    </div>
  );
}

export default App;
