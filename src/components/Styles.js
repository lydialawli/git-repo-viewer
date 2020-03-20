import styled from 'styled-components'


export const Header = styled('header')({
  width: '100vw',
  height: 80,
  backgroundColor: 'rgb(210, 54, 105)',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
})

export const Avatar = styled('img')(({ height, width, src }) => ({
  borderRadius: '50%',
  width: width || 48,
  height: height || 48,
  backgroundColor: '#ccc',
  overflow: 'hidden',
  marginLeft: 20,
  marginRight: 20,
  src,
}))

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
  }
`

export const InputContainer = styled.input`
  width: 300px;
  height: 30px;
  borderRadius: 4;
  fontSize: 18;
  fontFamily: 'monospace';
  padding: '8px 30px';
`

export const ErrorMsg = styled.text`
  color: red;
`


export const SearchWrapper = styled('div')({
  width: '60vw',
  height: 80,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
})
