import React from 'react'
import styled from 'styled-components'


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



const HeaderBar = ({ onLogout }) => (
  <Header>
    <div onClick={onLogout}>Logout</div>
    <Avatar src={"https://avatars2.githubusercontent.com/u/33575398?u=a4ddbb7c85285c084370fff4cbcb05ffa02fa26c&v=4"} alt={'lydialawli'} />
  </Header>
)

export default HeaderBar
