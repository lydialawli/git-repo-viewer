import React, { useState } from 'react'
import './App.css'
import Search from "./components/Search"
import Tabs from './components/Tabs'
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
    paddingTop: '20px',
    margin: 0,
    borderTop: '10px solid rgb(210, 54, 105)',
  },
  '*': {
    boxSizing: 'border-box',
  },
})

const accessToken = localStorage.getItem('token')

function App() {

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
        <>
          <div onClick={logOut}>Logout</div>
          <Search />
          <Tabs>
            <div label="Pull requests">
              <em>List of pull requests</em>
            </div>
            <div label="Open issues">
              <em>List of open issues</em>
            </div>
            <div label="Closed issues">y
              <em>List of closed issues</em>
            </div>
          </Tabs>
        </>
        :
        <Login onSubmit={handleSubmit} />
      }
    </>
  )
}

export default App
