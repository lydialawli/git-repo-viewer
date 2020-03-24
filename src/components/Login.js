import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { LoginWrapper, InputContainer, ButtonSubmit, GreyTextBottom, GreyText, IconWrapper } from './Styles'


const Login = ({ onSubmit }) => {
  const [token, setToken] = useState('')

  const openGithubLink = () => {
    window.open('https://github.com/lydialawli/git-repo-viewer')
  }

  const openGenerateTokenLink = () => {
    window.open('https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token')
  }

  return (
    <LoginWrapper>
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
      <GreyText
        onClick={openGenerateTokenLink}
        style={{ textDecoration: 'underline' }}>Need some help? click here
      </GreyText>
      <GreyTextBottom>
        <IconWrapper
          noPadding
          className="fab fa-github"
          onClick={openGithubLink} /> Go to this projects repository
        </GreyTextBottom>
    </LoginWrapper >

  )
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

Login.defaultProps = {
  errorMsg: ''
}

export default Login
