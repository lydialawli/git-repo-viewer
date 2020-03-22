import styled from 'styled-components'


export const Header = styled('header')({
  width: '100%',
  height: 60,
  backgroundColor: 'rgb(210, 54, 105)',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
})

export const ContentWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'LigthGreen',
})

export const Avatar = styled('img')(({ height, width, src, margin }) => ({
  borderRadius: '50%',
  width: width || 48,
  height: height || 48,
  backgroundColor: '#ccc',
  overflow: 'hidden',
  marginLeft: margin || 20,
  marginRight: margin || 20,
  src,
}))

export const GreyText = styled('span')(({ height, width, src, margin, loading }) => ({
  color: loading ? 'rgb(154,154,154)' : 'rgb(163,168,174)',
  fontSize: loading ? 20 : 13,
  paddingLeft: 3,
  fontWeight: 200,
}))

export const Center = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const LogoutText = styled('h4')({
  color: 'dark-grey',
  cursor: 'pointer'
})


export const ButtonSubmit = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    background-color: palevioletred;
    color: white;
    cursor: pointer;
  }
`

export const InputContainer = styled('input')({
  width: '350px',
  minWidth: '300px',
  height: '20px',
  borderRadius: 4,
  fontSize: 13,
  fontWeight: 200,
  fontFamily: 'Rubik',
  padding: '8px 20px',
})

export const ErrorMsg = styled.text`
  color: red;
`


export const SearchWrapper = styled('div')({
  width: '600px',
  height: 80,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
})

export const TabWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  // background: 'lightBlue'
})

export const TabList = styled('ol')({
  width: '100%',
  borderBottom: '1px solid #ccc',
  paddingLeft: 30,
})
