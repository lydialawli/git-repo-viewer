import React, { useState } from 'react'
import Search from './Search'
import Tabs from './Tabs'
import { ContentWrapper } from './Styles'
import Section from './Section'

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
              type={'pullRequests'}
            />
          </div>
          <div label="Open issues">
            <Section
              name={name}
              repoName={repoName}
              type={'open-issues'}
            />
          </div>
          <div label="Closed issues">
            <Section
              name={name}
              repoName={repoName}
              type={'closed-issues'}
            />
          </div>
        </Tabs>}
      {/* } */}
    </ContentWrapper>
  )
}

export default Content
