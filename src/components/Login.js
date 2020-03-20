import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
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

const Input = styled.input`
  borderRadius: 4;
  fontSize: 18;
  fontFamily: 'monospace';
  padding: '8px 30px';
`

const Login = ({ onSubmit }) => {
  const [token, setToken] = useState('')

  return (
    <form>
      <h1 >Git Repo Viewer</h1>
      <Input
        type="password"
        name="token"
        value={token}
        onChange={e => {
          setToken(e.target.value)
        }}
        placeholder="Paste your GitHub token"
      />
      <Button onClick={onSubmit} css={{ width: '100%', fontFamily: 'monospace' }}>SUBMIT</Button>
    </form>
  )
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Login
