import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { InputContainer, ButtonSubmit, ErrorMsg } from './Styles'


const Login = ({ onSubmit, errorMsg }) => {
  const [token, setToken] = useState('')

  return (
    <section>
      <form onSubmit={e => onSubmit(e, token)}>
        <h1 >Git Repo Viewer</h1>
        <InputContainer
          type="password"
          name="token"
          value={token}
          onChange={e => {
            setToken(e.target.value)
          }}
          placeholder="Paste your GitHub token"
        />
        <ButtonSubmit css={{ width: '100%', fontFamily: 'monospace' }}>SUBMIT</ButtonSubmit>
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
