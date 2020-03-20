import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Login = ({ onSubmit }) => {
  const [token, setToken] = useState('')

  return (
    <form>
      <h1>Git Repo Viewer</h1>
      <input
        type="password"
        name="token"
        value={token}
        onChange={e => {
          setToken(e.target.value)
        }}
        placeholder="Paste your GitHub token"
      />
      <button onClick={onSubmit} css={{ width: '100%', fontFamily: 'monospace' }}>SUBMIT</button>
    </form>
  )
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Login
