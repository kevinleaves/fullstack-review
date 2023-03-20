import React from 'react'


const Repo = ({ repo }) => {

  return (
    <li>
      <a href={repo.html_url}>Name: {repo.name}</a>
      <p>Owner: {repo.owner}</p>
      <p>Description: {repo.description}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Last Updated: {repo.updated_at}</p>
    </li>
  )
}

export default Repo