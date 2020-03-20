import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Header, Avatar, LogoutText } from './Styles'


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
    <LogoutText onClick={onLogout}>Logout</LogoutText>
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
