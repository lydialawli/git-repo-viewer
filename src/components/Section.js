import React from 'react'
import useRepoDataQuery from './../queries'
import Card from './Card'

const Section = ({ name, repoName, queryType, type }) => {

  const { repo } = useRepoDataQuery(name, repoName, queryType)

  return (
    !!repo && repo.loading ?
      <em>loading...</em>
      :
      (
        repo && repo[type] ?
          repo[type].edges.map(pR => {
            return <Card key={pR.node.id} data={pR.node} />
          })
          :
          <em>No pull requests found</em>
      )
  )
}

export default Section
