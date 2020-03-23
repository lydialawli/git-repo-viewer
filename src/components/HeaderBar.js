import React from 'react'
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

export default HeaderBar
