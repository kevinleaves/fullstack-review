import React from 'react'


const Repo = ({repo}) => {

  return (
    <li>
      <p>Name: {repo.name}</p>
      <p>Description: {repo.description}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>URL: {repo.html_url}</p>
      <p>Last Updated: {repo.updated_at}</p>
    </li>
  )
}

export default Repo