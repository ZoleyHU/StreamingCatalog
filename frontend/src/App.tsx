import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import {Show} from "streaming-availability";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Show[]>([])

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setSearch(event.target.value);
      console.log(event);
  }

  const onClickHandler = async (event: SyntheticEvent) => {
      event.preventDefault();
  }

  return (
    <div className="App">
      <Search search={search} onClickHandler={onClickHandler} onChangeHandler={onChangeHandler}/>
      <CardList />
    </div>
  );
}

export default App;
