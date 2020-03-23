import React from 'react'
import PropTypes from 'prop-types'
import { Header, Avatar, LogoutText } from './Styles'
import { useViewerQuery } from './../queries'

const HeaderBar = ({ onLogout }) => {
  const { res } = useViewerQuery()

  return (
    <Header>
      <LogoutText onClick={onLogout}>Logout</LogoutText>
      {
        (res.loading || res.error) &&
        <Avatar src={'https://www.iconninja.com/files/980/515/831/warrior-ninja-avatar-samurai-icon.svg'} />
      }
      {
        res && res.avatarUrl &&
        <Avatar src={res.avatarUrl} alt={res.login} />
      }
    </Header>
  )
}

HeaderBar.propTypes = {
  onLogout: PropTypes.func.isRequired,
}


export default HeaderBar
