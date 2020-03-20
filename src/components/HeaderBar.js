import React from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const Header = styled('header')({
  width: '100vw',
  height: 80,
  backgroundColor: 'rgb(210, 54, 105)',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
})

const Avatar = styled('img')(({ height, width, src }) => ({
  borderRadius: '50%',
  width: width || 48,
  height: height || 48,
  backgroundColor: '#ccc',
  overflow: 'hidden',
  marginLeft: 20,
  marginRight: 20,
  src,
}))

const Logout = styled('h4')({
  color: 'dark-grey',
  cursor: 'pointer'
})

const GET_VIEWER = gql`
	query {
		viewer {
			avatarUrl
			login
			id
		}
	}
`

const HeaderBar = ({ onLogout }) => (

  <Header>
    <Logout onClick={onLogout}>Logout</Logout>
    <Query query={GET_VIEWER}>
      {({ loading, error, data }) => (
        <>
          {loading && <Avatar src={'https://www.iconninja.com/files/980/515/831/warrior-ninja-avatar-samurai-icon.svg'} />}
          {error && <Avatar src={'https://www.iconninja.com/files/980/515/831/warrior-ninja-avatar-samurai-icon.svg'} />}
          {data && data.viewer && (
            <Avatar src={data.viewer.avatarUrl} alt={data.viewer.login} />
          )}
        </>
      )}
    </Query>

  </Header>
)

export default HeaderBar
