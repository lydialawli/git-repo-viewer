import styled from 'styled-components'

export const LoginWrapper = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Header = styled('header')({
  width: '100%',
  height: 60,
  backgroundColor: 'rgb(210, 54, 105)',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  boxShadow: ' 2px 1px 10px 3px rgb(231, 231, 231)'
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

export const GreyText = styled('span')(({ loadingText }) => ({
  color: loadingText ? 'rgb(154,154,154)' : 'rgb(163,168,174)',
  fontSize: loadingText ? 20 : 13,
  paddingLeft: 3,
  fontWeight: 200,
  fontFamily: 'Rubik'
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
    text-decoration: none;
  }
`

export const InputContainer = styled('input')({
  minWidth: '50px',
  height: '15px',
  borderRadius: 4,
  fontSize: 13,
  border: '2px solid #ccc',
  fontWeight: 200,
  fontFamily: 'Rubik',
  padding: '8px 20px',
  textDecoration: 'none',
})

export const ErrorMsg = styled('span')({
  color: 'red',
})


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
})

export const TabList = styled('ol')({
  width: '100%',
  borderBottom: '1px solid #ccc',
  paddingLeft: 30,
})

export const TopContent = styled('div')(({ justifyContent }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: justifyContent || 'space-between',
  flexDirection: 'row',
  paddingTop: 10,
  fontWeight: 500,
}))

export const CommentContainer = styled('div')({
  display: 'flex',
  boxShadow: ' 2px 1px 10px 0.5px rgb(231, 231, 231)',
  borderRadius: 5,
  padding: 10,
  fontSize: 13,
  fontFamily: 'Rubik',
  marginTop: 10,
  flexDirection: 'column',
  transition: 'all .3s ease-in-out'
})

export const CommentBody = styled('p')({
  fontSize: 13,
  paddingLeft: 40
})

export const CardWrapper = styled('div')({
  width: '90%',
  minHeight: '70px',
  margin: '30px 5px 30px 30px',
  border: '3px solid palevioletred',
  padding: '3px 15px 10px',
  borderRadius: 4,
})

export const Tag = styled('span')({
  display: 'inline-block',
  margin: '4px 4px 4px 0',
  backgroundColor: '#eee',
  borderRadius: 3,
  padding: '2px 6px 3px',
  color: '#666',
  fontSize: 13,
})

export const IconWrapper = styled('i')(({ noPadding }) => ({
  display: 'flex',
  paddingTop: noPadding ? 0 : 15,
  paddingRight: 4,
  justifyContent: 'center',
  color: 'rgb(163,168,174)',
  cursor: 'pointer',
}))
