import React from 'react';
import Repo from './Repo.jsx'

const RepoList = ({ repos }) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    <ol>
      {repos.map(repo =>
        <Repo repo={repo}/>
      )}
    </ol>
  </div>
)

export default RepoList;