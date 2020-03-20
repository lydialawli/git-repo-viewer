import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import Tabs from './Tabs'

const Content = () => (
  <div>
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

export default Content
