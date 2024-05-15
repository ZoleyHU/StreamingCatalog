import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import {Show} from "streaming-availability";
import { searchShows } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Show[]>([])
  const [errorMessage, setErrorMessage] = useState<string>("")

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setSearch(event.target.value);
  }

  const onClickHandler = async (event: SyntheticEvent) => {
      event.preventDefault();
      const result = await searchShows(search)
      if (typeof result === "string") {
        setErrorMessage(result);
      } else if(Array.isArray(result)) {
        setSearchResult(result);
      }
  }

  return (
    <div className="App">
      <Search search={search} onClickHandler={onClickHandler} onChangeHandler={onChangeHandler}/>
      {errorMessage && <h1>{errorMessage}</h1>}
      <CardList searchResults={searchResult}/>
    </div>
  );
}

export default App;
