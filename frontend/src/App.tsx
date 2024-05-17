import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import {Show} from "streaming-availability";
import { searchShows } from './api';
import Header from './Components/Header/Header';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Show[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("hu");

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setSearch(event.target.value);
  }
  //TODO: new component for streaming pics on search results, it should only show the firts 2 uniqe ones then just (...and more) or something
  //TODO: fix possible bug, sometimes multiple copies of the same movie appear in one search
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
      <CardList searchResults={searchResult}/>
      </div>
      
    </div>
  );
}

export default App;
