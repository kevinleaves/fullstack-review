import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    $.ajax('/repos', {
      method: 'GET',
      dataType: 'json',
      contentType: 'application/json'
    })
  },[])

  const search = (term) => {
    $.ajax('/repos', {
      method: 'POST',
      data: JSON.stringify({username: term}),
      dataType: 'json',
      contentType: 'application/json'
    })
    console.log(`${term} was searched`);
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));