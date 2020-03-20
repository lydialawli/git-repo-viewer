import React from 'react'
import './App.css'
import Search from "./components/Search"
import Tabs from './components/Tabs'

function App() {
  return (
    <div className="App">
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
    </div>
  )
}

export default App
