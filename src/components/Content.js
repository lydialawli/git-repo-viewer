import React from 'react'
import Search from './Search'
import Tabs from './Tabs'
import useRepoDataQuery from './../queries'
import Card from './Card'
import { ContentWrapper } from './Styles'

const Content = () => {
  // TODO: search input result should arrive at this component, to query repo data
  const { repo } = useRepoDataQuery('octocat', 'Hello-World')
  console.log('---->', repo)

  return (
    <ContentWrapper>
      <Search />
      {!!repo && repo.loading ?
        <em>loading...</em>
        :
        <Tabs>
          <div label="Pull requests">
            {repo && repo.pullRequests ?
              repo.pullRequests.edges.map(pR => {
                return <Card key={pR.node.id} data={pR.node} />
              })
              :
              <em>No pull requests found</em>
            }
          </div>
          <div label="Open issues">
            {repo && repo.issues ?
              repo.issues.edges.map(issue => {
                return <Card key={issue.node.id} data={issue.node} />
              })
              :
              <em>No open issues found</em>
            }
          </div>
          <div label="Closed issues">
            <em>No closed issues found</em>
          </div>
        </Tabs>
      }
    </ContentWrapper>
  )
}

export default Content
