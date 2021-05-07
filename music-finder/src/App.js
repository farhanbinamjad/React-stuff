import './App.css';
import Results from "./resultinf"
import React, {useEffect, useState} from 'react'

function App() {

  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() =>{
    getResults();
  },[query]);
  
  const getResults = async () =>{
    const response = await fetch(`https://itunes.apple.com/search?term=${query}&media=music&entity=album&attribute=artistTerm&limit=500`);
    const data = await response.json();
    setResults(data.results);
  };
  
  const updateSearch = e =>{
    setSearch(e.target.value);

  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Enter to Search" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="items">
      {
        results.map(result =>(
          <Results 
          title={result.collectionCensoredName} 
          image={result.artworkUrl100}/>
        ))
      }
    </div>
    </div>
  )
}

export default App
