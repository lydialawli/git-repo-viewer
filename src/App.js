import React, { useState } from 'react'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import './App.css'
import HeaderBar from './components/HeaderBar'
import Content from './components/Content'
import Login from './components/Login'
import { createGlobalStyle } from 'styled-components'
import 'styled-components/macro'

const Global = createGlobalStyle({
  body: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    color: '#444',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto"',
    margin: 0,
  },
  '*': {
    boxSizing: 'border-box',
  },
})

const accessToken = localStorage.getItem('token')


const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})




function App() {
  const [errorMsg, setErrorMsg] = useState('')

  // fetch('https://api.github.com/graphql', {
  //   method: 'POST',
  //   headers: {
  //     Authorization: `bearer ${accessToken}`,
  //   },
  //   body: JSON.stringify({
  //     query: `
  //   {
  //     viewer {
  //       name
  //     }
  //   }
  //   `
  //   })
  // })
  //   .then(res => res.json())
  //   .then(json => {
  //     console.log('-->', json)
  //   })

  const handleSubmit = (event, token) => {
    event.preventDefault()
    localStorage.setItem('token', token)
    window.location.reload()
  }

  const logOut = () => {
    console.log('accesToken => ', accessToken)

    localStorage.clear()
    window.location.reload()
  }

  return (
    <>
      <Global />
      {accessToken ?
        <ApolloProvider client={client}>
          <HeaderBar onLogout={logOut} />
          <Content />
        </ApolloProvider>
        :
        <Login onSubmit={handleSubmit} />
      }
    </>
  )
}

export default App
