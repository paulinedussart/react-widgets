import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';
const Search = () => {
  const [term, setTerm] = useState('cats');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
    const waitSearching = setTimeout(function () {
      if (term) {
        axios
          .get('https://en.wikipedia.org/w/api.php', {
            params: {
              action: 'query',
              list: 'search',
              origin: '*',
              format: 'json',
              srsearch: term,
            },
          })
          .then((response) => setResults(response.data.query.search));
      }
    }, 300);
    // alow to cleanup the timer to wait 500ms to the API call
    return () => {
      clearTimeout(waitSearching);
    };
  }, [term]);

  return (
    <div>
      <h1>
        Wikipedia Searching API
        <form className='ui form'>
          <div className='field'>
            <label htmlFor='query'>Enter Search Term</label>
            <input onChange={handleInputChange} value={term} className='input-search' type='text' />
          </div>
        </form>
        <List results={results} />
      </h1>
    </div>
  );
};

export default Search;
