import React from 'react'
import styled from 'styled-components'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Search from './Search'
import Tabs from './Tabs'


const GET_REPO_DATA = gql`
  query ($name: String!, $repo: String!) {
    repository(owner: $name, name: $repo) {
      pullRequests(last: 5) {
        edges {
          node {
            number
            url
            author {
              login
            }
            createdAt
            merged
          }
        }
      }
      issues(last: 20, states: CLOSED) {
        edges {
          node {
            title
            url
            labels(first: 5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

const Content = ({ name, repo }) => (
  <div>
    <Search />
    {/* <Query query={GET_REPO_DATA} variables={{ name, repo }}> */}
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
    {/* </Query> */}
  </div >

)

export default Content
