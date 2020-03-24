import React, { useState } from 'react'
import Search from './Search'
import Tabs from './Tabs'
import { ContentWrapper, Center, GreyText, IconWrapper } from './Styles'
import Section from './Section'

const Content = () => {
  const [userInput, setUserInput] = useState({ name: '', repoName: '' })

  const openGithubLink = () => {
    window.open('https://github.com/lydialawli/git-repo-viewer')
  }

  const exampleRepos = [
    'relic-toolkit/relic',
    'ethereum/go-ethereum',
    'ahmadawais/corona-cli',
    'nomiclabs / buidler'
  ]

  return (
    <ContentWrapper>
      <>
        <Search onSubmitSearch={x => { setUserInput(x) }} />

        {userInput && !!userInput.name && !!userInput.repoName ?
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
          </Tabs>
          :
          <Center style={{ height: '50vh' }}>
            <GreyText loadingText>
              Some example repositories:<br /><br />
              {exampleRepos.map((r, i) => <li key={i}>{r}</li>)}
            </GreyText>
          </Center>
        }
      </>
      <GreyText>
        <IconWrapper
          noPadding
          className="fab fa-github"
          onClick={openGithubLink} /> Go to this projects repository
        </GreyText>
    </ContentWrapper >
  )
}

export default Content
