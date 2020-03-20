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
  width: 300px;
  height: 30px;
  borderRadius: 4;
  fontSize: 18;
  fontFamily: 'monospace';
  padding: '8px 30px';
`

const ErrorMsg = styled.text`
  color: red;
`


const Login = ({ onSubmit, errorMsg }) => {
  const [token, setToken] = useState('')

  return (
    <section>
      <form onSubmit={e => onSubmit(e, token)}>
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
        <Button css={{ width: '100%', fontFamily: 'monospace' }}>SUBMIT</Button>
      </form>
      <ErrorMsg >{errorMsg}</ErrorMsg>
    </section>

  )
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
}

Login.defaultProps = {
  errorMsg: ''
}

export default Login
