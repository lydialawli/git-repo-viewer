import React, { useState } from 'react'
import Search from './Search'
import Tabs from './Tabs'
import { ContentWrapper } from './Styles'
import Section from './Section'
import { PULL_REQUESTS_QUERY, CLOSED_ISSUES_QUERY, OPEN_ISSUES_QUERY } from './../queries'

const Content = () => {
  const [name, setName] = useState('')
  const [repoName, setRepoName] = useState('')

  return (
    <ContentWrapper>
      <Search onChangeName={n => { setName(n) }} onChangeRepoName={r => { setRepoName(r) }} />

      {name && repoName &&
        <Tabs>
          <div label="Pull requests">
            <Section
              name={name}
              repoName={repoName}
              queryType={PULL_REQUESTS_QUERY}
              type={'pullRequests'}
            />
          </div>
          <div label="Open issues">
            <Section
              name={name}
              repoName={repoName}
              queryType={OPEN_ISSUES_QUERY}
              type={'issues'}
            />
          </div>
          <div label="Closed issues">
            <Section
              name={name}
              repoName={repoName}
              queryType={CLOSED_ISSUES_QUERY}
              type={'issues'}
            />
          </div>
        </Tabs>}
      {/* } */}
    </ContentWrapper>
  )
}

export default Content
