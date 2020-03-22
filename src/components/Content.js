import React, { useState } from 'react'
import Search from './Search'
import Tabs from './Tabs'
import { ContentWrapper } from './Styles'
import Section from './Section'

const Content = () => {
  const [userInput, setUserInput] = useState({ name: '', repoName: '' })

  return (
    <ContentWrapper>
      <Search onSubmitSearch={x => { setUserInput(x) }} />

      {userInput && !!userInput.name && !!userInput.repoName &&
        <Tabs>
          <div label="Pull requests">
            <Section
              name={userInput.name}
              repoName={userInput.repoName}
              type={'pullRequests'}
            />
          </div>
          <div label="Open issues">
            <Section
              name={userInput.name}
              repoName={userInput.repoName}
              type={'open-issues'}
            />
          </div>
          <div label="Closed issues">
            <Section
              name={userInput.name}
              repoName={userInput.repoName}
              type={'closed-issues'}
            />
          </div>
        </Tabs>}
      {/* } */}
    </ContentWrapper>
  )
}

export default Content
