import React, { useState } from 'react'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import './App.css'
import HeaderBar from './components/HeaderBar'
import Content from './components/Content'
import Login from './components/Login'
import 'styled-components/macro'


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
  // TODO: store state in redux
  const [name, setName] = useState('')
  const [repo, setRepo] = useState('')

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
    <div className='layout'>
      {accessToken ?
        <ApolloProvider client={client}>
          <HeaderBar onChangeName={n => setName(n)} onChangeRepo={r => setRepo(r)} onLogout={logOut} />
          <Content name={name} repo={repo} />
        </ApolloProvider>
        :
        <Login onSubmit={handleSubmit} />
      }
    </div>
  )
}

export default App
