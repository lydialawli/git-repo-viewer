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


function App() {
  const [logedIn, setLogedIn] = useState(true)


  return (
    <>
      <Global />
      {!logedIn ?
        <Login onSubmit={() => setLogedIn(true)} />
        :
        <>
          <div onClick={() => setLogedIn(false)}>Logout</div>
          <Search />
          <Tabs>
            <div label="Pull requests">
              <em>List of pull requests</em>
            </div>
            <div label="Open issues">
              <em>List of open issues</em>
            </div>
            <div label="Closed issues">
              <em>List of closed issues</em>
            </div>
          </Tabs>
        </>
      }
    </>
  )
}

export default App
