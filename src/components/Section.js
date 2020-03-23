import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useRepoDataQuery } from './../queries'
import Card from './Card'
import { GreyText, Center } from './Styles'

const Section = ({ name, repoName, type }) => {
  const [pressedCard, setPressedCard] = useState('')
  const queryType = type === 'pullRequests' ? type : 'issues'
  const { repo } = useRepoDataQuery(name, repoName, type)

  return (
    !!repo && repo.loading ?
      <Center style={{ height: '50vh' }}>
        <GreyText loadingText>loading...</GreyText>
      </Center>
      :
      (
        repo && repo[queryType] ?
          repo[queryType].edges.map(data => {
            return <Card cardPressed={(id) => setPressedCard(id)} isPressed={pressedCard === data.node.id} key={data.node.id} data={data.node} />
          })
          :
          <Center style={{ height: '50vh' }}>
            <em>No {type} found</em>
          </Center>
      )
  )
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}


export default Section
