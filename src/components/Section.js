import React from 'react'
import useRepoDataQuery from './../queries'
import Card from './Card'

const Section = ({ name, repoName, type }) => {
  const queryType = type === 'pullRequests' ? type : 'issues'
  const { repo } = useRepoDataQuery(name, repoName, type)

  return (
    !!repo && repo.loading ?
      <em>loading...</em>
      :
      (
        repo && repo[queryType] ?
          repo[queryType].edges.map(data => {
            return <Card key={data.node.id} data={data.node} />
          })
          :
          <em>No {type} found</em>
      )
  )
}

export default Section
